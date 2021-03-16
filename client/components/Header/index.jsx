import React, { useState } from 'react'
import Link from 'next/link'
import {
	HeaderWrapper,
	TitleLogo,
	TitleAndLinkFlex,
} from './Styles/HeaderStyles'
import Login from './Login'
import { DesktopBreakpoint, PhoneBreakpoint } from '../../global/MediaQueries'
import Burger from './BurgerMenu/Burger'
import Menu from './BurgerMenu/Menu'
import NavLinks from './NavLinks'

const Header = () => {
	const [open, setOpen] = useState(false)
	return (
		<HeaderWrapper>
			<PhoneBreakpoint>
				<Link href='/'>
					<TitleLogo>NftySwaps</TitleLogo>
				</Link>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</PhoneBreakpoint>

			<DesktopBreakpoint>
				<TitleAndLinkFlex>
					<Link href='/'>
						<TitleLogo href='/'>NftySwaps</TitleLogo>
					</Link>
					<NavLinks />
				</TitleAndLinkFlex>
				<Login />
			</DesktopBreakpoint>
		</HeaderWrapper>
	)
}

export default Header
