const NftSwap = artifacts.require('./NftSwap.sol')
const TokenOneMinter = artifacts.require('./Mocks/TokenOneMinter.sol')
const TokenTwoMinter = artifacts.require('./Mocks/TokenTwoMinter.sol')
const Erc20Minter = artifacts.require('./Erc20Minter.sol');
const NftToErcSwap = artifacts.require('./NftToErcSwap.sol')

module.exports = function (deployer) {
	deployer.deploy(NftSwap)
	deployer.deploy(TokenOneMinter)
	deployer.deploy(TokenTwoMinter)
	deployer.deploy(Erc20Minter)
	deployer.deploy(NftToErcSwap);
}
