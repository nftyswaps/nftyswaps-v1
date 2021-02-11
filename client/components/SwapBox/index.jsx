import React from 'react'
import {
	SwapBoxBody,
	SwapBoxP,
	SwapBoxTitle,
	SwapBoxWrapper,
	SwapFox,
} from './Styles/DefaultSwapBoxStyles'

const SwapBox = ({ title }) => (
	<SwapBoxWrapper>
		<SwapBoxTitle>Welcome</SwapBoxTitle>
		<SwapBoxBody>
			<SwapFox src='https://i.ibb.co/s6gwjX1/metamask-logo.png' />
			<SwapBoxP>Sign in to start swapping!</SwapBoxP>
		</SwapBoxBody>
	</SwapBoxWrapper>
)

export default SwapBox
