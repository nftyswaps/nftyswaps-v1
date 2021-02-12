import React from 'react'
import {
	SwapBoxBody,
	SwapBoxP,
	SwapBoxTitle,
	SwapBoxWrapper,
	SwapFox,
	LoggedInSwapBoxWrapper,
	LoggedInSwapBoxInput,
	LoggedInSwapBoxP,
	LoggedInSwapBoxSubmit,
} from './Styles/DefaultSwapBoxStyles'
import { useWallet } from 'use-wallet'
import useInputChange from '../../../hooks/useInputChange'

const StartBox = () => {
	const wallet = useWallet()
	const [input, handleInputChange] = useInputChange()

	console.log(input)
	return wallet.status === 'connected' ? (
		<LoggedInSwapBoxWrapper>
			<LoggedInSwapBoxP>
				Enter an address below, or view your current offers
			</LoggedInSwapBoxP>
			<form
				onSubmit={() => {
					alert('submitted' + input.addressToSearch)
				}}
			>
				<LoggedInSwapBoxInput
					onChange={handleInputChange}
					name='addressToSearch'
				/>
				<LoggedInSwapBoxSubmit />
			</form>
		</LoggedInSwapBoxWrapper>
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

export default StartBox
