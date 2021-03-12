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

const SwapModal = ({ isOpen, hide, offer, makerAsset, takerAsset }) => {
	const wallet = useWallet()
	const contracts = getContracts()
	const [makerContractInfo, setMakerContractInfo] = useState(null)

	const handleSetMakerContractInfo = () => {
		if (
			offer.makerContract.toLowerCase() ==
			contracts.TokenOneMinter._address.toLowerCase()
		) {
			setMakerContractInfo(contracts.TokenOneMinter)
		} else if (
			offer.makerContract.toLowerCase() ==
			contracts.TokenTwoMinter._address.toLowerCase()
		) {
			setMakerContractInfo(contracts.TokenTwoMinter)
		} else {
			alert('contract invalid')
		}
	}

	const makerApproveSwap = async () => {
		await makerContractInfo.methods
			.approve(contracts.NftSwap._address, offer.makerID)
			.send({
				from: wallet.account,
			})
	}

	const handleSendOffer = async () => {
		handleSetMakerContractInfo()
		console.log(makerApproveSwap())

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
				<ModalAddToSwapButton onClick={handleSendOffer}>
					Send Offer
				</ModalAddToSwapButton>
			</SwapModalWrapper>
		</Modal>
	) : (
		<Modal isOpen={isOpen} hide={hide} title={'Loading'}></Modal>
	)
}
export default SwapModal
