import React from 'react'
import Link from 'next/link'
import {
	HeaderWrapper,
	ListOfTheLinks,
	StyledLink,
	TitleLogo,
	TitleAndLinkFlex,
} from './Styles/HeaderStyles'
import Login from './Login'

const Header = () => (
	<HeaderWrapper>
		<TitleAndLinkFlex>
			<TitleLogo>NftySwaps</TitleLogo>
			<ListOfTheLinks>
				<li>
					<Link href='/accounts'>
						<StyledLink>My Offers</StyledLink>
					</Link>
				</li>
			</ListOfTheLinks>
		</TitleAndLinkFlex>
		<Login />
	</HeaderWrapper>
)

export default Header
