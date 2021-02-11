// SPDX-License-Identifier: MIT

pragma solidity 0.7.4;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/token/ERC721/ERC721.sol";


contract ERC721AtomicSwap {

    
  struct Swap {
    uint256 openToken;
    address openTrader;
    address openContractAddress;
    uint256 closeToken;
    address closeTrader;
    address closeContractAddress;
  }

  enum States {
    INVALID,
    OPEN,
    CLOSED,
    EXPIRED
  }

  mapping (bytes32 => Swap) private swaps;
  mapping (bytes32 => States) private swapStates;

  event Open(bytes32 _swapID, address _closeTrader);
  event Expire(bytes32 _swapID);
  event Close(bytes32 _swapID);

  modifier onlyInvalidSwaps(bytes32 _swapID) {
    require (swapStates[_swapID] == States.INVALID);
    _;
  }

  modifier onlyOpenSwaps(bytes32 _swapID) {
    require (swapStates[_swapID] == States.OPEN);
    _;
  }

  function open(bytes32 _swapID, uint256 openTokenId, address _openContractAddress, uint256 _closeTokenId, address _closeTrader, address _closeContractAddress) public onlyInvalidSwaps(_swapID) {
    // Transfer value from the opening trader to this contract.
    ERC721 openERC721Contract = ERC721(_openContractAddress);
    require(openERC721Contract.isApprovedForAll(msg.sender, address(this)));
    openERC721Contract.safeTransferFrom(msg.sender, address(this), openTokenId);

    // Store the details of the swap.
    Swap memory swap = Swap({
      openToken: openTokenId,
      openTrader: msg.sender,
      openContractAddress: _openContractAddress,
      closeToken: _closeTokenId,
      closeTrader: _closeTrader,
      closeContractAddress: _closeContractAddress
    });
    swaps[_swapID] = swap;
    swapStates[_swapID] = States.OPEN;

    Open(_swapID, _closeTrader);
  }

  function close(bytes32 _swapID) public onlyOpenSwaps(_swapID) {
    // Close the swap.
    Swap memory swap = swaps[_swapID];
    swapStates[_swapID] = States.CLOSED;

    // Transfer the closing funds from the closing trader to the opening trader.
    ERC721 closeERC721Contract = ERC721(swap.closeContractAddress);
    require(closeERC721Contract.isApprovedForAll(swap.closeTrader, address(this)));
    closeERC721Contract.transferFrom(swap.closeTrader, swap.openTrader, swap.closeToken);

    // Transfer the opening funds from this contract to the closing trader.
    ERC721 openERC721Contract = ERC721(swap.openContractAddress);
    openERC721Contract.transferFrom(address(this), swap.closeTrader, swap.openToken);

    Close(_swapID);
  }

  function expire(bytes32 _swapID) public onlyOpenSwaps(_swapID) {
    // Expire the swap.
    Swap memory swap = swaps[_swapID];
    swapStates[_swapID] = States.EXPIRED;

    // Transfer opening value from this contract back to the opening trader.
    ERC721 openERC721Contract = ERC721(swap.openContractAddress);
    openERC721Contract.transferFrom(address(this), swap.openTrader, swap.openToken);

    Expire(_swapID);
  }

  function check(bytes32 _swapID) public view returns (uint256 openValue, address openContractAddress, uint256 closeValue, address closeTrader, address closeContractAddress) {
    Swap memory swap = swaps[_swapID];
    return (swap.openToken, swap.openContractAddress, swap.closeToken, swap.closeTrader, swap.closeContractAddress);
  }
}
