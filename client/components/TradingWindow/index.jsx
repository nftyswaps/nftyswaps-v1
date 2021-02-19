import React from 'react'
import { TradingWindowWrapper } from './TradingWindowStyles/TradingWindowStyles'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import WelcomeBox from '../SearchWindow/WelcomeBox'
import { SingleWindowWrapper } from '../../globalStyles/SingleWindowStyles'
import AssetBox from '../AssetBox/index'

const TradingWindow = ({ userOneData, userTwoData, userTwoAddress }) => {
	const isLoggedIn = useIsLoggedIn()

	return isLoggedIn === 'connected' ? (
		<TradingWindowWrapper>
			<AssetBox data={userOneData} title={'My Assets'} />
			<AssetBox data={userTwoData} title={userTwoAddress} />
		</TradingWindowWrapper>
	) : (
		<SingleWindowWrapper>
			<WelcomeBox />
		</SingleWindowWrapper>
	)
}

export default TradingWindow
