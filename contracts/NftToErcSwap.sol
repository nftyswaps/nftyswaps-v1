pragma solidity 0.6.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NftToErcSwap {
    event newErc20Order(
        address ListerAddress,
        address OfferAddress,
        address NftTokenAddrss,
        uint256 TokenId,
        address Erc20Contract,
        uint256 Amount
    );

    struct OrderDetials {
        address ListerAddress;
        address NftTokenAddress;
        uint256 TokenId;
        uint256 Amount;
        address Erc20Contract;
    }

    mapping(address => OrderDetials) public OrderInfo;

    function makeNftToERC20(
        address ListerAddress,
        address ListerNftContract,
        uint256 TokenID,
        address Erc20Contract,
        uint256 Amount
    ) public payable {
        //Add Check to make sure Erc20Contract address passes is Valid
        //Make sure sender has enough coins
        require(
            IERC20(Erc20Contract).balanceOf(msg.sender) >= Amount,
            "sender does not have enought coins"
        );

        // create the order
        OrderInfo[msg.sender].Amount = msg.value;
        OrderInfo[msg.sender].Erc20Contract = Erc20Contract;
        OrderInfo[msg.sender].ListerAddress = ListerAddress;
        OrderInfo[msg.sender].NftTokenAddress = ListerNftContract;
        OrderInfo[msg.sender].TokenId = TokenID;

        //Emit new Order to chain
        emit newErc20Order(
            ListerAddress,
            msg.sender,
            ListerNftContract,
            TokenID,
            Erc20Contract,
            msg.value
        );
    }

    function takeNftToERC20(
        address Erc20Token,
        address NftAddress,
        address Buyer,
        uint256 NftId,
        uint256 Erc20Amount
    ) public {
        // only the token owner can create the order
        require(
            IERC721(NftAddress).ownerOf(NftId) == msg.sender,
            "not owner, cannot create order"
        );

        // transfer Nft to person who just bought it
        IERC721(NftAddress).transferFrom(msg.sender, Buyer, NftId);
        // transfer KyleCoins (ERC-20) to person who just sold NFT
        IERC20(Erc20Token).transferFrom(Buyer, msg.sender, Erc20Amount);
    }
}
