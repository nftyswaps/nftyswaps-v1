import React from 'react'
import { BurgerIcon } from './BurgerMenuStyles'

const Burger = ({ open, setOpen }) => {
	return (
		<BurgerIcon open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</BurgerIcon>
	)
}
export default Burger
