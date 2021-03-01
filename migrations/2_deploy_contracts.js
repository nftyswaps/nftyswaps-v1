const NftSwap = artifacts.require('./NftSwap.sol')
const ERC721Mintable = artifacts.require('./Mocks/ERC721Mintable.sol')

module.exports = function (deployer) {
	deployer.deploy(NftSwap)
	deployer.deploy(ERC721Mintable)
}
