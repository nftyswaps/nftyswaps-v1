import styled from 'styled-components'

export const AssetSwapBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};
	height: 70vh;
	width: 70vh;
	border-radius: 7px;
	padding: 5vh 5px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
`

export const AssetSwapBoxTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 7px;
	font-size: 48px;
	margin: 0 0 5vh 0;
	text-shadow: 5px 5px 0.5rem #000;
`

export const AssetSwapBoxList = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
	padding: 0 5vh;
	overflow-y: scroll;
`

export const AssetWrapper = styled.div`
	margin-bottom: 5vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:nth-child(odd) {
		margin-right: auto;
	}
`

export const AssetThumb = styled.img`
	-webkit-filter: drop-shadow(0 0 1rem #111);
	filter: drop-shadow(0 0 1rem #111);
	height: 15vh;
	width: 15vh;
	border-radius: 7px;
`

export const AssetTitle = styled.h2`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	text-shadow: 5px 5px 0.5rem #000;

	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	font-size: 24px;
	margin-bottom: 0.5rem;
`

export const AssetArtist = styled.p`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	letter-spacing: 3px;
	font-size: 16px;
	margin: 0;
`
