const NftSwap = artifacts.require('./NftSwap.sol')
const TokenOneMinter = artifacts.require('./Mocks/TokenOneMinter.sol')
const TokenTwoMinter = artifacts.require('./Mocks/TokenTwoMinter.sol')

module.exports = function (deployer) {
	deployer.deploy(NftSwap)
	deployer.deploy(TokenOneMinter)
	deployer.deploy(TokenTwoMinter)
}
