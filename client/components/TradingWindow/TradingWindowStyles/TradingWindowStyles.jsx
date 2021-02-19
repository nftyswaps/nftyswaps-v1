import styled from 'styled-components'

export const TradingWindowWrapper = styled.main`
	height: 100%;
	width: 100vw;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5vh 2.5vw;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		flex-direction: row;
	}
`
