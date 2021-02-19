import styled from 'styled-components'

export const AssetSwapBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;

	height: 70vh;
	/* width: 70vh; */
	border-radius: 7px;
	padding: 2.5vh 2.5vw;

	width: 90%;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		padding: 2.5vh 2.5vw;
		width: 45%;
	}
	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		padding: 2vh 2vw;
		width: 45%;
	}
`

export const AssetSwapBoxTitle = styled.h1`
	margin: 0 auto 5vh auto;
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.white};
	font-variant-caps: all-small-caps;
	text-shadow: 5px 5px 0.5rem #000;
	text-overflow: ellipsis;
	text-align: center;
	letter-spacing: 7px;
	width: 70%;
	font-size: 24px;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 36px;
	}
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 48px;
	}
`

export const AssetSwapBoxTitleWrapper = styled.div`
	width: 50%;
	height: auto;
	overflow: hidden;
	/* text-overflow: ellipsis; */
	margin: 0 0 5vh 0;
`

export const AssetSwapBoxList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	height: auto;
	overflow-y: scroll;
`

export const AssetWrapper = styled.div`
	margin-bottom: 5vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	/* 
	flex: 1 0 500px;
	box-sizing: border-box;
	margin: 1rem 0.25em;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		max-width: calc(50% - 1em);
	}
	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		max-width: calc(25% - 2em);
	} */
	/* &:nth-child(odd) {
		margin-right: auto;
	} */
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
