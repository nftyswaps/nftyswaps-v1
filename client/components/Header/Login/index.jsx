import React from 'React'
import {
	Avatar,
	Fox,
	LoginText,
	LoginWrapper,
	LoggedInWrapper,
	InnerLoggedInWrapper,
	AddressText,
	Dropdown,
	DropdownContent,
	DropdownLink,
} from '../Styles/HeaderStyles'
import { useWallet } from 'use-wallet'
import Link from 'next/link'

const Login = () => {
	const wallet = useWallet()

	return wallet.status === 'connected' ? (
		<Dropdown>
			<LoggedInWrapper>
				<Avatar src='https://i.ibb.co/jbkt8HR/wallet.png' />
				<InnerLoggedInWrapper>
					<AddressText>{wallet.account}</AddressText>
				</InnerLoggedInWrapper>
			</LoggedInWrapper>
			<DropdownContent>
				<DropdownLink>Balance: {wallet.balance}</DropdownLink>
				<Link href='/assets'>
					<DropdownLink>My Assets</DropdownLink>
				</Link>
				<DropdownLink onClick={() => wallet.reset()}>
					Disconnect
				</DropdownLink>
			</DropdownContent>
		</Dropdown>
	) : (
		<LoginWrapper onClick={() => wallet.connect()}>
			<Fox src='https://i.ibb.co/s6gwjX1/metamask-logo.png' />
			<LoginText>Login with Metamask</LoginText>
		</LoginWrapper>
	)
}

export default Login
