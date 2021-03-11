import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import {
	ModalWrapper,
	ModalOverlay,
	ModalHeader,
	ModalClose,
	ModalTitle,
	ModalBody
} from './Styles/DefaultModalStyles'
import useModal from '../../hooks/useModal'
import { useWallet } from 'use-wallet'

const Modal = ({ isOpen, hide, title, children }) => {

	return isOpen
		? ReactDOM.createPortal(
				<>
					<ModalOverlay>
						<ModalWrapper
						// // aria-modal
						// aria-hidden
						// tabIndex={-1}
						// role='dialog'
						>
							<ModalHeader>
								<ModalTitle>
									{title}
								</ModalTitle>
								<ModalClose onClick={hide} />
							</ModalHeader>
							<ModalBody>{children}</ModalBody>
						</ModalWrapper>
					</ModalOverlay>
				</>,
				document.getElementById('MainWindow')
		  )
		: null
}
export default Modal
