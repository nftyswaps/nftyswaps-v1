import styled from 'styled-components'

// When no wallet is signed in

export const WelcomeBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};
	height: 60vh;
	border-radius: 7px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 95%;
	padding: 5vh 5vw;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: 50%;
	}

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		width: 40%;
	}
`

export const WelcomeBoxTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 7px;
	font-size: 36px;
	margin: 0;
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 48px;
	}
`

export const WelcomeBoxBody = styled.div`
	border-radius: 100%;
	height: 60%;
	width: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SwapFox = styled.img`
	-webkit-filter: drop-shadow(0 0 1rem #111);
	filter: drop-shadow(0 0 1rem #111);
	height: 10vh;
	width: auto;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		height: 12vh;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		height: 15vh;
	}
`

export const WelcomeBoxP = styled.p`
	text-shadow: 5px 5px 0.5rem #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	text-align: center;
	font-size: 16px;
	width: 90%;
	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 24px;
	}
`
