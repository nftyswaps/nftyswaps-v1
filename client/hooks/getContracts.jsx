import { useState } from 'react'
import Web3 from 'web3'
import { useWallet } from 'use-wallet'

import TokenOneMinterDefinition from '../lib/contracts/TokenOneMinter.json'
import TokenTwoMinterDefinition from '../lib/contracts/TokenTwoMinter.json'
import NftSwapDefinition from '../lib/contracts/NftSwap.json'

const getContracts = () => {
	// get network ID and the deployed address
	const wallet = useWallet()
	const web3 = new Web3(Web3.givenProvider)

	const [contracts, setContracts] = useState({
		TokenOneMinter: null,
		TokenTwoMinter: null,
		NftSwap: null,
	})

	const networkId = wallet.chainId

	const TokenOneMinterAddress =
		TokenOneMinterDefinition.networks[networkId].address

	const TokenTwoMinterAddress =
		TokenTwoMinterDefinition.networks[networkId].address

	const NftSwapAddress = NftSwapDefinition.networks[networkId].address

	// create the instances
	if (
		contracts.NftSwap == null &&
		contracts.TokenOneMinterAddress == null &&
		contracts.TokenTwoMinterAddress == null
	) {
		const TokenOneMinterInstance = new web3.eth.Contract(
			TokenOneMinterDefinition.abi,
			TokenOneMinterAddress
		)

		const TokenTwoMinterInstance = new web3.eth.Contract(
			TokenTwoMinterDefinition.abi,
			TokenTwoMinterAddress
		)
		const NftSwapInstance = new web3.eth.Contract(
			NftSwapDefinition.abi,
			NftSwapAddress
		)

		setContracts({
			TokenOneMinter: TokenOneMinterInstance,
			TokenTwoMinter: TokenTwoMinterInstance,
			NftSwap: NftSwapInstance,
		})
	}
	return contracts
}

export default getContracts
