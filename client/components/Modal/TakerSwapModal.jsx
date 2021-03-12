import React, { useState } from 'react'
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

const TakerSwapModal = ({ isOpen, hide, offer, makerAsset, takerAsset }) => {
	const wallet = useWallet()
	const contracts = getContracts()
	const [takerContractInfo, setTakerContractInfo] = useState(null)

	const handleSetTakerContractInfo = () => {
		if (
			offer.takerContract.toLowerCase() ==
			contracts.TokenOneMinter._address.toLowerCase()
		) {
			setTakerContractInfo(contracts.TokenOneMinter)
		} else if (
			offer.takerContract.toLowerCase() ==
			contracts.TokenTwoMinter._address.toLowerCase()
		) {
			setTakerContractInfo(contracts.TokenTwoMinter)
		} else {
			alert('contract invalid')
		}
	}

	const takerApproveSwap = async () => {
		await takerContractInfo.methods
			.approve(contracts.NftSwap._address, offer.takerID)
			.send({
				from: wallet.account,
			})
	}

	const handleSendOffer = async () => {
		handleSetTakerContractInfo()
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
				`Offer successfully sent to ${offerResult.events.newOrder.returnValues.takerAddress}.
				Your transaction hash is ${offerResult.transactionHash}`
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
