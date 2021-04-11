pragma solidity 0.6.6;

interface INftSwapV21 {
    // Considering moving OrderID creation to be within the function

    event newNftOrder(
        address ListserTokenAddress,
        uint256 ListerTokenId,
        address BuyerAddress,
        address BuyerTokenAddress,
        uint256 BuyerTokenId,
        uint256 OrderID
    );

    event newErcOrder(
        address ListserTokenAddress,
        uint256 ListerTokenId,
        address BuyerAddress,
        address Erc20Contract,
        uint256 Amount,
        uint256 OrderID
    );

    event newEthOrder(
        address ListserTokenAddress,
        uint256 ListerTokenId,
        address BuyerAddress,
        uint256 Amount,
        uint256 OrderID
    );

    /**
     * @dev Creates an Offer of One NFT for One other NFT  
        @param BuyerContract Address of the NFT being preposed to the lister.
        @param BuyerID ID of the NFT being preposed to the lister.
        @param ListerContract Address of the NFT that is Listed or Being asked for.
        @param ListerID ID of the NFT that is Listed or Being asked for.
        @param OrderID Unqiue number that will save the order on chain.
        
        Emits: 
    */

    function makeNftToNft(
        address BuyerContract,
        uint256 BuyerID,
        address ListerContract,
        uint256 ListerID,
        uint256 OrderID
    ) external returns (bool);

    /**
     * @dev Creates an Offer of One NFT for a static amount of ERC20 tokens  
        @param ListerContract Address of the NFT that is Listed or Being asked for.
        @param ListerID ID of the NFT that is Listed or Being asked for.
        @param Erc20Contract Address of the ERC20 Token that is being offered
        @param Amount The total number of ERC20 tokens being offered
        @param OrderID Unqiue number that will save the order on chain.
        
        Emits: 
    */

    function makeNftToERC20(
        address ListerContract,
        uint256 ListerID,
        address Erc20Contract,
        uint256 Amount,
        uint256 OrderID
    ) external payable returns (bool);

    /**
     * @dev Creates an Offer of One NFT for a static amount of ERC20 tokens  
        @param ListerContract Address of the NFT that is Listed or Being asked for.
        @param ListerID ID of the NFT that is Listed or Being asked for.
        @param OrderID Unqiue number that will save the order on chain.
        
        Emits: 
    */

    function makeNftToETH(
        address ListerContract,
        uint256 ListerID,
        uint256 OrderID
    ) external payable returns (bool);

    /**
     * @dev Triggers the trasnfer of assests for between the two parties once aggreed
        upon terms are matched. This is only callable by the person who owns the NFT
        that is being asked for.

        @param Buyer Address of the person submiting the offer
        @param OrderID Unqiue ID that is given the the order stored on chain
        
        Emits: 
    */

    function takeOrder(address Buyer, uint256 OrderID) external returns (bool);
}
