import React, { useState } from 'react'
import Web3 from 'web3'

import { ModalAddToSwapButton } from './Styles/AssetModalStyles'
import {
	SwapModalWrapper,
	SwapModalAssetsWindow,
	Seperator,
} from './Styles/SwapModalStyles'
import Asset from '../AssetBox/Asset'

import Modal from './DefaultModal'
import { useWallet } from 'use-wallet'
import getContracts from '../../hooks/getContracts'
import ERC_721_ABI from '../../global/ERC_721_ABI'

const TakerSwapModal = ({ isOpen, hide, offer, makerAsset, takerAsset }) => {
	const wallet = useWallet()
	const web3 = new Web3(Web3.givenProvider)
	const contracts = getContracts()
	const [takerContractInstance, setTakerContractInstance] = useState(null)

	const handleSetTakerContractInstance = async () => {
		setTakerContractInstance(
			new web3.eth.Contract(
				ERC_721_ABI,
				takerAsset.asset_contract.address
			)
		)
		console.log(takerContractInstance)
	}

	const takerApproveSwap = async () => {
		await takerContractInstance.methods
			.approve(contracts.NftSwap._address, offer.takerID)
			.send({
				from: wallet.account,
			})
	}

	const handleSendOffer = async () => {
		handleSetTakerContractInstance()
		console.log(await takerApproveSwap())

		const offerResult = await contracts.NftSwap.methods
			.takeOrder(
				offer.makerContract,
				offer.makerID,
				offer.takerContract,
				offer.takerID
			)
			.send({ from: wallet.account })

		if (offerResult.transactionHash) {
			alert(
				`Assets successfully swapped. Your transaction hash is ${offerResult.transactionHash}`
			)
		} else {
			alert(offerResult.message)
		}

		hide()
	}

	return offer ? (
		<Modal isOpen={isOpen} hide={hide} title={'Preview Offer'}>
			<SwapModalWrapper>
				<SwapModalAssetsWindow>
					{takerAsset ? (
						<Asset asset={takerAsset} />
					) : (
						<h1>nothing</h1>
					)}

					<Seperator />

					{makerAsset ? (
						<Asset asset={makerAsset} />
					) : (
						<h1>nothing</h1>
					)}
				</SwapModalAssetsWindow>
				<ModalAddToSwapButton onClick={handleSendOffer}>
					Send Offer
				</ModalAddToSwapButton>
			</SwapModalWrapper>
		</Modal>
	) : (
		<Modal isOpen={isOpen} hide={hide} title={'Loading'}></Modal>
	)
}
export default TakerSwapModal
