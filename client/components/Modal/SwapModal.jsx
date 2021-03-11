import React from 'react'
import { ModalAddToSwapButton } from './Styles/AssetModalStyles'
import {
	SwapModalWrapper,
	SwapModalAssetsWindow,
	Seperator,
} from './Styles/SwapModalStyles'
import Asset from '../AssetBox/Asset'

import Modal from './DefaultModal'
import { useWallet } from 'use-wallet'

const SwapModal = ({ isOpen, hide, offer, makerAsset, takerAsset }) => {
	const wallet = useWallet()

	// Dropping all the letters in the wallet string for comparison with Opensea api
	const account = wallet.account.toLowerCase()

	// console.log(offer)
	// console.log('makerAsset: ' + makerAsset.asset_contract.address)
	// console.log('takerAsset: ' + takerAsset.asset_contract.address)

	const handleSendOffer = () => {
		// if (asset.owner.address == account) {
		// 	handleUpdateOffer({
		// 		makerContract: asset.asset_contract.address,
		// 		makerID: asset.token_id,
		// 	})
		// } else {
		// 	handleUpdateOffer({
		// 		takerContract: asset.asset_contract.address,
		// 		takerID: asset.token_id,
		// 	})
		// }
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
