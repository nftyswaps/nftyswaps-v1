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
	padding: 0 5vw 0 5vw;
`

// Title
export const TitleLogo = styled.h1`
	font-family: ${({ theme }) => theme.fonts.raleway};
	color: ${({ theme }) => theme.colors.orange};
	cursor: pointer;
	font-size: 32px;
	line-height: 32px;
	letter-spacing: 7px;
	z-index: 99999999;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 48px;
		line-height: 48px;
	}
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 64px;
		line-height: 64px;
		margin-right: 5vw;
	}
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
	padding-inline-start: unset;
`

export const StyledLinkWrapper = styled.li``

export const StyledLink = styled.a`
	cursor: pointer;

	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.montserrat};
	font-size: 16px;

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 24px;
	}
`

// Login Button

export const LoginWrapper = styled.div`
	background: ${({ theme }) => theme.colors.secondaryGray};
	cursor: pointer;
	overflow: hidden;
	height: 7vh;
	border-radius: 7px;
	padding: 0 2.5vw;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	width: 75vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: auto;
	}

	:nth-last-child() {
		justify-content: center;
	}
`

export const Fox = styled.img`
	height: 4vh;
	width: 4vh;

	margin-right: 10vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		margin-right: 10px;
	}
`

export const LoginText = styled.h2`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	font-variant: small-caps;
	white-space: nowrap;
	font-size: 16px;

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 24px;
	}
`

// Logged In Button

export const LoggedInWrapper = styled.div`
	cursor: pointer;
	overflow: hidden;
	height: 7vh;
	/* width: 20vw; */
	border-radius: 7px;
	background: ${({ theme }) => theme.colors.secondaryGray};
	padding: 0 0.25vw 0 0.5vw;
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 75vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: auto;
	}
`

export const InnerLoggedInWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primaryGray};
	height: 6vh;
	border-radius: 7px;
	padding: 0 1vw 0 1vw;
	margin-left: 0.5vw;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 60vw;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		width: 18vw;
	}
`

export const Avatar = styled.img`
	height: 5vh;
	width: 5vh;
	margin: 0 auto;
`

export const AddressText = styled.h2`
	font-family: ${({ theme }) => theme.fonts.montserrat};
	color: ${({ theme }) => theme.colors.white};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 16px;
	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 24px;
	}
`

export const DropdownContent = styled.div`
	display: none;
	position: absolute;

	width: 100%;
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
