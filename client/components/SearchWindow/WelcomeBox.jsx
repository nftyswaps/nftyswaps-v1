import React from 'react'
import {
	WelcomeBoxBody,
	WelcomeBoxP,
	WelcomeBoxTitle,
	WelcomeBoxWrapper,
	SwapFox,
} from './Styles/WelcomeBoxStyles'

const WelcomeBox = () => (
	<WelcomeBoxWrapper>
		<WelcomeBoxTitle>Welcome</WelcomeBoxTitle>
		<WelcomeBoxBody>
			<SwapFox src='https://i.ibb.co/s6gwjX1/metamask-logo.png' />
			<WelcomeBoxP>Sign in to start swapping!</WelcomeBoxP>
		</WelcomeBoxBody>
	</WelcomeBoxWrapper>
)

export default WelcomeBox
