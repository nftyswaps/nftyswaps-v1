import styled from 'styled-components'

export const TradingWindowWrapper = styled.main`
	height: 100%;
	width: 100vw;

	display: flex;
	align-items: center;

	overflow-x: scroll;
	scroll-snap-type: x mandatory;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`

export const TradingMainWrapper = styled.div`
	height: 100vh;
	width: 100vw !important;
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.secondaryGray};
`

export const MobileAssetBoxWrapper = styled.section`
	height: 100%;
	width: 100vw !important;
	display: flex;
	justify-content: center !important;
	align-items: center;
	scroll-snap-align: start !important;
	margin-right: 5vw;

	/* Will clean up by adding isMobile prop, for now this is the solution */
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		height: unset !important;
		width: unset !important;
		display: unset !important;
		justify-content: unset !important;
		align-items: unset !important;
		scroll-snap-align: unset !important;
		margin-right: unset !important;
	}
`

export const SwapButton = styled.button`
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
