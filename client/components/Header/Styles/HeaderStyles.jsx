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
	/* overflow: hidden; */
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

// Logged In Button

export const LoggedInWrapper = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 7vh;
	width: 20vw;
	border-radius: 7px;
	background: ${({ theme }) => theme.colors.secondaryGray};
	padding: 0 0.25vw 0 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const InnerLoggedInWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};
	height: 6vh;
	width: 16vw;
	border-radius: 7px;
	padding: 0 1vw 0 1vw;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const Avatar = styled.img`
	height: 5vh;
	width: 5vh;
	margin: 0 auto;
`

export const AddressText = styled.h2`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-size: 24px;
	white-space: nowrap;
	overflow: hidden;

	text-overflow: ellipsis;
`

export const DropdownContent = styled.div`
	display: none;
	position: absolute;

	width: 20vw;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	border-radius: 0 0 7px 7px;
	z-index: 1;
	&:nth-last-child() {
		border-radius: 0 0 7px 7px;
		cursor: pointer;
	}
`
export const Dropdown = styled.div`
	position: relative;
	display: inline-block;
	&:hover ${DropdownContent} {
		display: block;
	}
`

export const DropdownLink = styled.button`
	cursor: pointer;
	display: block;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.secondaryGray};
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	text-decoration: none;
	border: none;
	padding: 14px 16px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryGray};
	}
`
