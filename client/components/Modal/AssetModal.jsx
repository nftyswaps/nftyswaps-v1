import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { ModalAddToSwapButton, ModalInner } from './Styles/AssetModalStyles'
import Modal from './DefaultModal'
import { useWallet } from 'use-wallet'
import Asset from '../AssetBox/Asset'

const AssetModal = ({
	isOpen,
	hide,
	asset,
	handleUpdateOffer,
	setAssetForSwapModal,
}) => {
	const wallet = useWallet()

	// Dropping all the letters in the wallet string for comparison with Opensea api
	const account = wallet.account.toLowerCase()

	const handleAddToSwap = () => {
		if (asset.owner.address == account) {
			handleUpdateOffer({
				makerContract: asset.asset_contract.address,
				makerID: asset.token_id,
			})
		} else {
			handleUpdateOffer({
				takerContract: asset.asset_contract.address,
				takerID: asset.token_id,
			})
		}
		setAssetForSwapModal(asset)
		hide()
	}

	return asset ? (
		<Modal
			isOpen={isOpen}
			hide={hide}
			title={!asset ? 'Asset' : asset.collection.name}
		>
			<ModalInner>
				<Asset asset={asset} />
			</ModalInner>

			<ModalAddToSwapButton onClick={handleAddToSwap}>
				Add to Swap
			</ModalAddToSwapButton>
		</Modal>
	) : (
		<Modal isOpen={isOpen} hide={hide} title={'Loading'}></Modal>
	)
}
export default AssetModal
