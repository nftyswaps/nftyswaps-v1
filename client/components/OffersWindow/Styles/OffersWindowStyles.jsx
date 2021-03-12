import styled from 'styled-components'

export const OffersWindowWrapper = styled.main`
	height: 100%;
	width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`

export const OffersSection = styled.div`
	height: 100%;
	width: 100%;
	padding: 2.5vh 2.5vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const TabNav = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 7px;
	overflow: hidden;
	box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
`

export const Tab = styled.button`
	cursor: pointer;
	height: 5vh;
	font-size: 16px;
	border: none;
	/* border-radius: 7px; */

	background: ${({ theme, isActive }) =>
		isActive ? theme.colors.orange : theme.colors.tertiaryGray};
	color: ${({ theme }) => theme.colors.white};

	width: 35vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: 20vw;
	}

	&:focus {
		outline: none;
	}
`

export const TabSeperator = styled.div`
	height: 100%;
	width: 2px;
	background: ${({ theme }) => theme.colors.orange};
`

export const OfferBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: scroll;
	overflow-x: hidden;

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
