import React from 'react'

import { Overlay } from './BurgerMenuStyles'
import Login from '../Login'
import NavLinks from '../NavLinks'

const Menu = ({ open }) => {
	return (
		<Overlay open={open}>
			<NavLinks />
			<Login />
		</Overlay>
	)
}
export default Menu
