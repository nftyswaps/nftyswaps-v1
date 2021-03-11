import styled from 'styled-components'

export const ModalAddToSwapButton = styled.button`
	cursor: pointer;
	height: 5vh;
	font-size: 16px;
	border: none;
	border-radius: 7px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	background: ${({ theme }) => theme.colors.orange};
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.montserrat};

	width: auto;
	padding: 1rem;
`

export const ModalInner = styled.div`
	height: auto;
	width: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`
