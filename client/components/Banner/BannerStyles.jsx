import styled from 'styled-components'
import { Close } from '@styled-icons/evil/Close'

export const BannerWrapper = styled.div`
	width: 100%;
	background-color: #f6851b;
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1em;
	transition: all 0.42s ease-in;
	transform: ${({ isHidden }) =>
		isHidden ? 'translateY(-5vh); height: 0;' : 'translateY(0)'};
`

export const BannerWords = styled.h2`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.primaryGray};
	text-overflow: wrap;
	text-align: center;
	width: 70%;
	font-size: 8px;
	position: fixed;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 16px;
	}
`

export const BannerClose = styled(Close)`
	height: 24px;
	width: 24px;
	margin-left: auto;

	cursor: pointer;
`
