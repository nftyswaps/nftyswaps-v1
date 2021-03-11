pragma solidity 0.6.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NftSwap {

	event newOrder(address makerAddress, address takerAddress, address makerContract, uint256 makerID, address takerContract, uint256 takerID);
	mapping (uint256 => mapping (address => mapping (uint256 => mapping (address => address)))) public orders;

	function validRecipient(
		address makerContract,
		uint256 makerID,
		address takerContract,
		uint256 takerID    
	) public view returns (bool) {
		address recipient = orders[makerID][makerContract][takerID][takerContract];
		return recipient != address(0);
	}

	function makeOrder(
		address makerContract,
		uint256 makerID,
		address takerContract,
		uint256 takerID
	) public {
		require(!validRecipient(makerContract, makerID, takerContract, takerID), "invalid order");
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
		emit newOrder(msg.sender, takerAddress, makerContract, makerID, takerContract, takerID);
	}

	function takeOrder(
		address makerContract,
		uint256 makerID,
		address takerContract,
        uint256 takerID
    ) public {
		require(validRecipient(makerContract, makerID, takerContract, takerID), "invalid order");

		// only the token owner can create the order
	    require(
			IERC721(takerContract).ownerOf(takerID) == msg.sender,
			"not owner, cannot create order"
	    );

		address recipient = orders[makerID][makerContract][takerID][takerContract];

		delete orders[makerID][makerContract][takerID][takerContract];
		// transfer the order maker token from maker to taker
		IERC721(makerContract).transferFrom(recipient, msg.sender, makerID);
		// transfer the order taker token from taker to maker
		IERC721(takerContract).transferFrom(msg.sender, recipient, takerID);
	}
}
