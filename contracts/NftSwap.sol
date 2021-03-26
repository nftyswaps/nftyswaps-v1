pragma solidity 0.6.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NftSwap {
    event newOrder(
        address makerAddress,
        address takerAddress,
        address makerContract,
        uint256 makerID,
        address takerContract,
        uint256 takerID
    );

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

    //This makes my head hurt and seems like a usless "flex" that makes for unreadable code imo.
    mapping(uint256 => mapping(address => mapping(uint256 => mapping(address => address))))
        public orders;

    function validRecipient(
        address makerContract,
        uint256 makerID,
        address takerContract,
        uint256 takerID
    ) public view returns (bool) {

            address recipient
         = orders[makerID][makerContract][takerID][takerContract];
        return recipient != address(0);
    }

    function makeOrder(
        address makerContract,
        uint256 makerID,
        address takerContract,
        uint256 takerID
    ) public {
        require(
            !validRecipient(makerContract, makerID, takerContract, takerID),
            "invalid order"
        );
        require(
            IERC721(makerContract).getApproved(makerID) == address(this),
            "not approved, cannot create order"
        );

        // only the token owner can create the order
        require(
            IERC721(makerContract).ownerOf(makerID) == msg.sender,
            "not owner, cannot create order"
        );
        // create the order
        orders[makerID][makerContract][takerID][takerContract] = msg.sender;

        // retrieve and emit the takerAddress
        address takerAddress = IERC721(takerContract).ownerOf(takerID);
        emit newOrder(
            msg.sender,
            takerAddress,
            makerContract,
            makerID,
            takerContract,
            takerID
        );
    }

    function takeOrder(
        address makerContract,
        uint256 makerID,
        address takerContract,
        uint256 takerID
    ) public {
        require(
            validRecipient(makerContract, makerID, takerContract, takerID),
            "invalid order"
        );

        // only the token owner can create the order
        require(
            IERC721(takerContract).ownerOf(takerID) == msg.sender,
            "not owner, cannot create order"
        );


            address recipient
         = orders[makerID][makerContract][takerID][takerContract];

        delete orders[makerID][makerContract][takerID][takerContract];
        // transfer the order maker token from maker to taker
        IERC721(makerContract).transferFrom(recipient, msg.sender, makerID);
        // transfer the order taker token from taker to maker
        IERC721(takerContract).transferFrom(msg.sender, recipient, takerID);
    }

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
        address _to,
        uint256 NftId,
        uint256 Erc20Amount
    ) public {
        // only the token owner can create the order
        require(
            IERC721(NftAddress).ownerOf(NftId) == msg.sender,
            "not owner, cannot create order"
        );

        // transfer Nft to person who just bought it
        IERC721(NftAddress).transferFrom(_to, msg.sender, NftId);
        // transfer KyleCoins (ERC-20) to person who just sold NFT
        IERC20(Erc20Token).transferFrom(msg.sender, _to, Erc20Amount);
    }
}
