pragma solidity 0.6.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721Mintable is ERC721("test", "test") {
    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }
}