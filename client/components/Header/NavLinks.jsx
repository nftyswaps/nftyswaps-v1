import Link from 'next/link'

import { StyledNavLinkList, NavLink } from './Styles/HeaderStyles'

const NavList = [
	{
		route: '/search',
		title: 'search',
	},
	{
		route: '/offers',
		title: 'offers',
	},
	{
		route: '/faucet',
		title: 'faucet',
	},
	// {
	// 	route: '/faq',
	// 	title: 'faq',
	// },
]

const NavLinks = () => {
	// const checkIfActive = ({ route }) => (isActive === route ? true : false)
	return (
		<StyledNavLinkList>
			{NavList.map((NavItem) => (
				<li key={NavItem.title}>
					<Link href={NavItem.route} as={NavItem.route} passHref>
						<NavLink href={NavItem.route}>{NavItem.title}</NavLink>
					</Link>
				</li>
			))}
		</StyledNavLinkList>
	)
}

export default NavLinks
