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
