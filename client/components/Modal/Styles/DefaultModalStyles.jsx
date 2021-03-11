import styled from 'styled-components'
import { Close } from '@styled-icons/evil/Close'

export const ModalOverlay = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;

	top: 0%;
	left: 0;
	width: 100vw;
	height: 100%;
	overflow-y: hidden !important;
	background-color: rgba(0, 0, 0, 0.6);
`

export const ModalWrapper = styled.div`
	position: absolute;
	background: ${({ theme }) => theme.colors.primaryGray};
	z-index: 101;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	height: 60vh;
	border-radius: 7px;
	padding: 2.5vw 2.5vw;

	width: 90vw;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		padding: 2.5vw 2.5vw;
		width: 40vw;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		padding: 2vw 2vw;
		width: 40vw;
	}
`

export const ModalHeader = styled.div`
	z-index: 102;
	width: 100%;
	height: auto;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	padding-left: 40px;
`

export const ModalClose = styled(Close)`
	z-index: 102;

	color: ${({ theme }) => theme.colors.orange};
	cursor: pointer;
	height: 40px;
	width: 40px;
`

export const ModalTitle = styled.h1`
	margin: 0;
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	text-align: center;
	text-shadow: 5px 5px 0.5rem #000;
	letter-spacing: 7px;

	width: 100%;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	font-size: 24px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 36px;
	}
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 48px;
	}
`

export const ModalBody = styled.div`
	z-index: 102;
	overflow: hidden;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
