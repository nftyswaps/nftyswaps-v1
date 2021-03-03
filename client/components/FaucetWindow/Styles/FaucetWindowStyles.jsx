import styled from 'styled-components'

export const FaucetWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;

	height: 70vh;
	border-radius: 7px;
	padding: 2.5vh 2.5vw;

	width: 90vw;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		padding: 2.5vh 2.5vw;
		width: 70vw;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		padding: 2vh 2vw;
		width: 50vw;
	}
`

export const InnerFaucetWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	width: 100%;
`

export const FaucetTitle = styled.h1`
	margin: 0;
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	text-align: center;
	text-shadow: 5px 5px 0.5rem #000;
	letter-spacing: 7px;

	width: 100%;

	font-size: 24px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 36px;
	}
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 48px;
	}
`

export const MintButton = styled.button`
	cursor: pointer;
	height: 5vh;
	font-size: 16px;
	border: none;
	border-radius: 7px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	background: ${({ theme }) => theme.colors.orange};
	color: ${({ theme }) => theme.colors.white};

	width: 35vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: 20vw;
	}
`

export const FaucetInput = styled.input.attrs({
	type: 'number',
	placeholder: 'Token ID i.e. <42>',
})`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	background-color: ${({ theme }) => theme.colors.tertiaryGray};
	color: ${({ theme }) => theme.colors.white};
	text-overflow: fade();
	/* padding-right: 70px; */
	padding-left: 20px;
	border-radius: 7px;
	height: 5vh;
	width: 45vw;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: 20vw;
	}
`

export const InputWithButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: auto;
	width: 100%;
`
