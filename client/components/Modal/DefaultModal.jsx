import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
	DefaultModalWrapper,
	ModalOverlay,
	ModalHeader,
	ModalClose,
	ModalAssetName,
	ModalAddToSwapButton
} from './Styles/DefaultModalStyles'
import useModal from '../../hooks/useModal'

const DefaultModal = ({ isOpen, hide, asset }) => {
	console.log(asset)
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
								<ModalClose onClick={hide} />
							</ModalHeader>
							<ModalAssetName>{asset.asset_contract.name}</ModalAssetName>
							<ModalAddToSwapButton>Add to Swap</ModalAddToSwapButton>
						</DefaultModalWrapper>
					</ModalOverlay>
				</>,
				document.getElementById('MainWindow')
		  )
		: null
}
export default DefaultModal
