import React from 'react'
import TradingSwapBox from './TradingSwapBox'
import { TradingWindowWrapper } from './TradingWindowStyles/TradingWindowStyles'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import WelcomeBox from '../SearchWindow/WelcomeBox'
import { SingleWindowWrapper } from '../../globalStyles/SingleWindowStyles'

const TradingWindow = ({ userOneData, userTwoData, userTwoAddress }) => {
	const isLoggedIn = useIsLoggedIn()

	return isLoggedIn === 'connected' ? (
		<TradingWindowWrapper>
			<TradingSwapBox data={userOneData} title={'My Assets'} />
			<TradingSwapBox data={userTwoData} title={userTwoAddress} />
		</TradingWindowWrapper>
	) : (
		<SingleWindowWrapper>
			<WelcomeBox />
		</SingleWindowWrapper>
	)
}

export default TradingWindow
