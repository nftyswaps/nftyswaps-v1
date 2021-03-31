pragma solidity 0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Erc20Minter is ERC20("Kyle Coin", "KC") {
    uint256 AmountOfCoins = 714000;

    constructor() public {
        _mint(msg.sender, AmountOfCoins);
    }
}
