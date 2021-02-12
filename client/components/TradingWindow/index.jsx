import React from 'react'
import ActiveAssetSwapBox from './ActiveAssetSwapBox'
import { TradingWindowWrapper } from './TradingWindowStyles/TradingWindowStyles'

const TradingWindow = ({ userOneData, userTwoData, userTwoAddress }) => {
	console.log(userTwoData)
	return (
		<TradingWindowWrapper>
			<ActiveAssetSwapBox data={userOneData} title={'My Assets'} />
			<ActiveAssetSwapBox data={userTwoData} title={userTwoAddress} />
		</TradingWindowWrapper>
	)
}

export default TradingWindow
