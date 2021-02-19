import styled from 'styled-components'

// When no wallet is signed in

export const WelcomeBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};
	height: 50vh;
	border-radius: 7px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 95%;
	padding: 5vh 5vw;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		padding: 5vh 5vw;
		width: 50vh;
	}
`

export const WelcomeBoxTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 7px;
	font-size: 48px;
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
	height: 12vh;
	width: 12vh;
`

export const WelcomeBoxP = styled.p`
	text-shadow: 5px 5px 0.5rem #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	text-align: center;
	font-size: 24px;
`
