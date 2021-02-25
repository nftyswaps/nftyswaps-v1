import React from 'react'
import {
	TradingWindowWrapper,
	MobileAssetBoxWrapper,
} from './TradingWindowStyles/TradingWindowStyles'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import WelcomeBox from '../SearchWindow/WelcomeBox'
import { SingleWindowWrapper } from '../../global/globalStyles/SingleWindowStyles'
import AssetBox from '../AssetBox/index'

const TradingWindow = ({ userOneData, userTwoData, userTwoAddress }) => {
	const isLoggedIn = useIsLoggedIn()

	// pull usernames from opensea if they exist
	// if (userOneData) userOneUsername = userOneData.assets[0].owner.user.username

	// if (userTwoData)
	// 	const userTwoUsername = userTwoData.assets[0].owner.user.username

	return isLoggedIn === 'connected' ? (
		<TradingWindowWrapper>
			<MobileAssetBoxWrapper>
				<AssetBox data={userOneData} title={'My Assets'} />
			</MobileAssetBoxWrapper>
			<MobileAssetBoxWrapper>
				<AssetBox data={userTwoData} title={userTwoAddress} />
			</MobileAssetBoxWrapper>
		</TradingWindowWrapper>
	) : (
		<SingleWindowWrapper>
			<WelcomeBox />
		</SingleWindowWrapper>
	)
}

export default TradingWindow
