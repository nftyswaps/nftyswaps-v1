import styled from 'styled-components'

// Search Window

export const SearchBoxWrapper = styled.div`
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

export const SearchBoxTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 7px;
	margin-top: 0;
	font-size: 48px;
	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 56px;
	}
`

export const SearchInputWrapper = styled.div`
	width: 85vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: 42vh;
	}
`

export const SearchBoxInput = styled.input.attrs({
	type: 'text',
	placeholder: '0x',
})`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	background-color: ${({ theme }) => theme.colors.tertiaryGray};
	color: ${({ theme }) => theme.colors.white};
	text-overflow: fade();
	height: 45px;
	padding-right: 70px;
	padding-left: 20px;
	border-radius: 7px;
	&:active {
		outline: none;
	}

	width: 85vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: 42vh;
	}
`
export const SearchBoxSubmit = styled.input.attrs({
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

export const SearchBoxP = styled.p`
	text-shadow: 5px 5px 0.5rem #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	text-align: center;
	margin: 0;
	font-size: 16px;
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 24px;
	}
	margin-bottom: 4vh;
`
