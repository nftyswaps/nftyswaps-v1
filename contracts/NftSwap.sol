pragma solidity 0.6.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NftSwap {
    event newOrder(
        address ListserTokenAddress,
        uint256 ListerTokenId,
        address BuyerAddress,
        address BuyerTokenAddress,
        uint256 BuyerTokenId,
        uint256 OrderID
    );

    struct OrderDetials {
        address ListerTokenAddress;
        uint256 ListerTokenId;
        address BuyerTokenAddress;
        uint256 BuyerTokenId;
    }

    mapping(address => mapping(uint256 => OrderDetials)) public OrderInfo;

    address[] public BuyerAddress;

    function makeOrder(
        address BuyerContract,
        uint256 BuyerID,
        address ListerContract,
        uint256 ListerID,
        uint256 OrderID
    ) public {
        require(
            IERC721(BuyerContract).getApproved(BuyerID) == address(this),
            "not approved, cannot create order"
        );
        require(
            IERC721(BuyerContract).ownerOf(BuyerID) == msg.sender,
            "not owner, cannot create order"
        );

        OrderInfo[msg.sender][OrderID].ListerTokenAddress = ListerContract;
        OrderInfo[msg.sender][OrderID].ListerTokenId = ListerID;
        OrderInfo[msg.sender][OrderID].BuyerTokenAddress = BuyerContract;
        OrderInfo[msg.sender][OrderID].BuyerTokenId = BuyerID;

        emit newOrder(
            ListerContract,
            ListerID,
            msg.sender,
            BuyerContract,
            BuyerID,
            OrderID
        );
    }

    function takeOrder(address Buyer, uint256 OrderID) public {
        // only the token owner can create the order
        require(
            IERC721(OrderInfo[Buyer][OrderID].ListerTokenAddress).ownerOf(
                OrderInfo[Buyer][OrderID].ListerTokenId
            ) == msg.sender,
            "not owner, cannot excute order"
        );
        // transfer the order maker token from maker to taker
        IERC721(OrderInfo[Buyer][OrderID].BuyerTokenAddress).transferFrom(
            Buyer,
            msg.sender,
            OrderInfo[Buyer][OrderID].BuyerTokenId
        );
        //transfer the order taker token from taker to maker
        IERC721(OrderInfo[Buyer][OrderID].ListerTokenAddress).transferFrom(
            msg.sender,
            Buyer,
            OrderInfo[Buyer][OrderID].ListerTokenId
        );
        // Delete Order
        delete OrderInfo[Buyer][OrderID];
    }
}
