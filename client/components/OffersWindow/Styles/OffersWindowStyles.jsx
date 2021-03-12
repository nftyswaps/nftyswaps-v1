import styled from 'styled-components'

export const OffersWindowWrapper = styled.main`
	height: 100%;
	width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`
export const OffersBoxWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};

	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;

	/* overflow-y: scroll !important; */

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

export const TabNav = styled.div`
	width: fit-content;
	height: 5vh;
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 7px;
	overflow: hidden;
	box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
	margin-bottom: 2rem;
`

export const Tab = styled.button`
	cursor: pointer;
	height: 5vh;
	font-size: 16px;
	border: none;
	/* height: 8vh; */
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

export const OffersSection = styled.div`
	height: 100%;
	width: 100%;
	padding: 2.5vh 2.5vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
`

export const OfferCardWrapper = styled.div`
	width: 100%;
	height: 4000px !important;
	padding: 2rem;

	overflow: hidden;

	background: ${({ theme }) => theme.colors.tertiaryGray};
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);

	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 2rem;
`

export const ViewOfferButton = styled.button`
	cursor: pointer;
	height: 5vh;
	width: auto;
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

	padding: 1rem;
`

export const OfferFrom = styled.p`
	text-shadow: 5px 5px 0.5rem #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	letter-spacing: 3px;
	text-align: center;
	font-size: 16px;
	width: 70%;
	text-overflow: ellipsis;
	overflow: hidden;
	wrap: nowrap;
	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 24px;
	}
`
