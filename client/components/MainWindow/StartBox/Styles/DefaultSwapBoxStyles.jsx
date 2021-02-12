import styled from 'styled-components'

export const SwapBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};
	height: 50vh;
	width: 60vh;
	border-radius: 7px;
	padding: 5vh;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

export const SwapBoxTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 7px;
	font-size: 48px;
`

export const SwapBoxBody = styled.div`
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
	height: 15vh;
	width: 15vh;
`

export const SwapBoxP = styled.p`
	text-shadow: 5px 5px 0.5rem #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	font-size: 24px;
`

// Logged In Window

export const LoggedInSwapBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};
	height: 50vh;
	width: 60vh;
	border-radius: 7px;
	padding: 15vh 9vh;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

export const LoggedInSwapBoxInput = styled.input.attrs({
	type: 'text',
	placeholder: '0x',
})`
	background-color: ${({ theme }) => theme.colors.tertiaryGray};
	color: ${({ theme }) => theme.colors.white};
	text-overflow: fade();
	width: 350px;
	height: 45px;
	padding-right: 70px;
	padding-left: 20px;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	border-radius: 7px;
	&:active {
		outline: none;
	}
`
export const LoggedInSwapBoxSubmit = styled.input.attrs({
	type: 'submit',
	value: 'Go',
})`
	font-family: ${({ theme }) => theme.fonts.raleway};
	background-color: ${({ theme }) => theme.colors.orange};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	margin-left: -60px;
	height: 30px;
	width: 50px;
	border-radius: 7px;
	cursor: pointer;
`

export const LoggedInSwapBoxP = styled.p`
	text-shadow: 5px 5px 0.5rem #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	text-align: center;
	font-size: 24px;
	margin: 0;
`
