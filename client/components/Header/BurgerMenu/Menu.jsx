import React from 'react'
import Link from 'next/link'

import { Overlay } from './BurgerMenuStyles'
import { ListOfTheLinks, StyledLink } from '../Styles/HeaderStyles'
import Login from '../Login'

const Menu = ({ open, isMobile, isActive }) => {
	return (
		<Overlay open={open}>
			<Login />
			<ListOfTheLinks>
				<li>
					<Link href='/offers'>
						<StyledLink>My Offers</StyledLink>
					</Link>
				</li>
			</ListOfTheLinks>
		</Overlay>
	)
}
export default Menu
