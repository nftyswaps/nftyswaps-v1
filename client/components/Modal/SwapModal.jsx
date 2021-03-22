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

const SwapModal = ({
	isOpen,
	hide,
	offer,
	makerAsset,
	takerAsset,
	hideButton,
}) => {
	const wallet = useWallet()

	const web3 = new Web3(Web3.givenProvider)
	const contracts = getContracts()

	const [makerContractInstance, setMakerContractInstance] = useState(null)

	const handleSetMakerContractInstance = () => {
		setMakerContractInstance(
			new web3.eth.Contract(
				ERC_721_ABI,
				makerAsset.asset_contract.address
			)
		)
		console.log(makerContractInstance)
	}

	const makerApproveSwap = async () => {
		await makerContractInstance.methods
			.approve(contracts.NftSwap._address, offer.makerID)
			.send({
				from: wallet.account,
			})
	}

	const handleSendOffer = async () => {
		handleSetMakerContractInstance()
		console.log(await makerApproveSwap())

		const offerResult = await contracts.NftSwap.methods
			.makeOrder(
				offer.makerContract,
				offer.makerID,
				offer.takerContract,
				offer.takerID
			)
			.send({ from: wallet.account })

		if (offerResult.transactionHash) {
			alert(
				`Offer successfully sent to ${offerResult.events.newOrder.returnValues.takerAddress}.
				Your transaction hash is ${offerResult.transactionHash}`
			)
		} else {
			alert(offerResult.message)
		}

		hide()
	}

	return offer ? (
		<Modal isOpen={isOpen} hide={hide} title={'Swap'}>
			<SwapModalWrapper>
				<SwapModalAssetsWindow>
					{makerAsset ? (
						<Asset asset={makerAsset} />
					) : (
						<h1>nothing</h1>
					)}

					<Seperator />

					{takerAsset ? (
						<Asset asset={takerAsset} />
					) : (
						<h1>nothing</h1>
					)}
				</SwapModalAssetsWindow>
				{!hideButton ? (
					<ModalAddToSwapButton onClick={handleSendOffer}>
						Send Offer
					</ModalAddToSwapButton>
				) : null}
			</SwapModalWrapper>
		</Modal>
	) : (
		<Modal isOpen={isOpen} hide={hide} title={'Loading'}></Modal>
	)
}
export default SwapModal
