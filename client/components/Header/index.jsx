import React, { useState } from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import {
	HeaderWrapper,
	ListOfTheLinks,
	StyledLink,
	TitleLogo,
	TitleAndLinkFlex,
} from './Styles/HeaderStyles'
import Login from './Login'
import { DesktopBreakpoint, PhoneBreakpoint } from '../../global/MediaQueries'
import Burger from './BurgerMenu/Burger'
import Menu from './BurgerMenu/Menu'

const Header = () => {
	const [open, setOpen] = useState(false)
	const isMobile = useMediaQuery({ maxWidth: 1024 })
	return (
		<HeaderWrapper>
			<PhoneBreakpoint>
				<Link href='/'>
					<TitleLogo>NftySwaps</TitleLogo>
				</Link>
				<Burger open={open} setOpen={setOpen} />
				<Menu isMobile={isMobile} open={open} setOpen={setOpen} />
			</PhoneBreakpoint>

			<DesktopBreakpoint>
				<TitleAndLinkFlex>
					<Link href='/'>
						<TitleLogo>NftySwaps</TitleLogo>
					</Link>
					<ListOfTheLinks>
						<li>
							<Link href='/offers'>
								<StyledLink>My Offers</StyledLink>
							</Link>
						</li>
					</ListOfTheLinks>
				</TitleAndLinkFlex>
				<Login />
			</DesktopBreakpoint>
		</HeaderWrapper>
	)
}

export default Header
