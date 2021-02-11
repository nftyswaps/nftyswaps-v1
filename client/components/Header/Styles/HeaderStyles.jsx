import Link from 'next/link'
import styled from 'styled-components'

// NavBar Container
export const HeaderWrapper = styled.nav`
	width: 100vw;
	height: 12vh;
	background: ${({ theme }) => theme.colors.primaryGray};
	top: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	padding: 0 5vw 0 5vw;
`

// Title
export const TitleLogo = styled.h1`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.orange};
	cursor: pointer;
	letter-spacing: 7px;
	font-size: 64px;
	margin-right: 2.5vw;
`

export const TitleAndLinkFlex = styled.div`
	display: flex;
	align-items: center;
`

// Links
export const ListOfTheLinks = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
`

export const StyledLinkWrapper = styled.li``

export const StyledLink = styled.a`
	cursor: pointer;

	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.montserrat};
	font-size: 24px;
`

// Login Button

export const LoginWrapper = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 7vh;
	width: 20vw;
	border-radius: 7px;
	padding: 0 60px 0 20px;
	background: ${({ theme }) => theme.colors.secondaryGray};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	:nth-last-child() {
		justify-content: center;
	}
`

export const Fox = styled.img`
	height: 4vh;
	width: 4vh;
	margin-right: 10px;
`

export const LoginText = styled.h2`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-size: 24px;
	font-variant: small-caps;
	white-space: nowrap;
`
