import React from 'react'
import {
	SwapBoxBody,
	SwapBoxP,
	SwapBoxTitle,
	SwapBoxWrapper,
	SwapFox,
} from './Styles/DefaultSwapBoxStyles'
import { useWallet } from 'use-wallet'


const SwapBox = ({ title }) => {
	const wallet = useWallet()

	return wallet.status === 'connected' ? (
		<SwapBoxWrapper>
		</SwapBoxWrapper>

	) : (
		<SwapBoxWrapper>
			<SwapBoxTitle>Welcome</SwapBoxTitle>
			<SwapBoxBody>
				<SwapFox src='https://i.ibb.co/s6gwjX1/metamask-logo.png' />
				<SwapBoxP>Sign in to start swapping!</SwapBoxP>
			</SwapBoxBody>
		</SwapBoxWrapper>
	)

}

export default SwapBox
