import React from 'react'
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

	// checks if wallet is set to Rinkeby, then connects if valid
	const handleClick = () => {
		if (wallet.status == 'error')
			wallet.error.name == 'ChainUnsupportedError'
				? alert(
						'Your wallet is not connected to Rinkeby, please switch in Metamask and reload the page.'
				  )
				: alert(wallet.error.message)
		else wallet.connect()
	}

	return wallet.status === 'connected' ? (
		<Dropdown>
			<LoggedInWrapper>
				<Avatar src='https://i.ibb.co/jbkt8HR/wallet.png' />
				<InnerLoggedInWrapper>
					<AddressText>{wallet.account}</AddressText>
				</InnerLoggedInWrapper>
			</LoggedInWrapper>

			<DropdownContent>
				<DropdownLink>
					Balance: {wallet.balance / 1000000000000000000} ETH
				</DropdownLink>
				<Link href='/assets'>
					<DropdownLink>My Assets</DropdownLink>
				</Link>
				<DropdownLink onClick={() => wallet.reset()}>
					Disconnect
				</DropdownLink>
			</DropdownContent>
		</Dropdown>
	) : (
		<LoginWrapper onClick={handleClick}>
			<Fox src='https://i.ibb.co/s6gwjX1/metamask-logo.png' />
			<LoginText>Login with Metamask</LoginText>
		</LoginWrapper>
	)
}

export default Login
