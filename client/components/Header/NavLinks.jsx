import styled from 'styled-components'
import Link from 'next/link'

const NavList = [
	{
		route: '/offers',
		title: 'offers',
	},
	{
		route: '/faucet',
		title: 'faucet',
	},
	// {
	// 	route: '/about',
	// 	title: 'about',
	// },
	// {
	// 	route: '/faq',
	// 	title: 'faq',
	// },
]

const StyledNavLinkList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	height: 100%;
	width: 100%;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		flex-direction: row;
	}
`

export const NavLink = styled.a`
	cursor: pointer;
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.montserrat};

	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 4px;

	text-decoration: none;
	padding: 0;

	margin: 2vh 0;
	font-size: 24px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 16px;
		margin: 0 2vw;
	}

	@media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 24px;
	}
`

const NavLinks = () => {
	// const checkIfActive = ({ route }) => (isActive === route ? true : false)
	return (
		<StyledNavLinkList>
			{NavList.map((NavItem) => (
				<li>
					<Link href={NavItem.route}>
						<NavLink>{NavItem.title}</NavLink>
					</Link>
				</li>
			))}
		</StyledNavLinkList>
	)
}

export default NavLinks
