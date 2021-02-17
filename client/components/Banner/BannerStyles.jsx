import styled from 'styled-components'

export const BannerWrapper = styled.div`
	width: 100%;
	background-color: #f6851b;
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const BannerWords = styled.h1`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.primaryGray};
	font-size: 16px;
`
