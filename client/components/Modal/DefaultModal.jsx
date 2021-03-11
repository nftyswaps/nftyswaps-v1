import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import {
	DefaultModalWrapper,
	ModalOverlay,
	ModalHeader,
	ModalClose,
	ModalAssetName,
	ModalAddToSwapButton,
} from './Styles/DefaultModalStyles'
import useModal from '../../hooks/useModal'
import { useWallet } from 'use-wallet'

const DefaultModal = ({ isOpen, hide, asset, handleUpdateOffer }) => {
	const wallet = useWallet()

	// Dropping all the letters in the wallet string for comparison with Opensea api
	const account = wallet.account.toLowerCase()

	console.log(asset)

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
		hide()
	}

	return isOpen
		? ReactDOM.createPortal(
				<>
					<ModalOverlay>
						<DefaultModalWrapper
						// // aria-modal
						// aria-hidden
						// tabIndex={-1}
						// role='dialog'
						>
							<ModalHeader>
								<ModalAssetName>
									{asset.collection.name ||
										asset.creator.user.username ||
										'Unknown'}
								</ModalAssetName>
								<ModalClose onClick={hide} />
							</ModalHeader>
							<ModalAddToSwapButton onClick={handleAddToSwap}>
								Add to Swap
							</ModalAddToSwapButton>
						</DefaultModalWrapper>
					</ModalOverlay>
				</>,
				document.getElementById('MainWindow')
		  )
		: null
}
export default DefaultModal
