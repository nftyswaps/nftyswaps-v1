import styled from 'styled-components'

export const FaucetWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;

	height: 70vh;
	border-radius: 7px;
	padding: 2.5vh 2.5vw;

	width: 90vw;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		padding: 2.5vh 2.5vw;
		width: 50vw;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		padding: 2vh 2vw;
		width: 50vw;
	}
`

export const MintButton = styled.button`
	height: 5vh;
	width: 10vw;
	font-size: 16px;
`
