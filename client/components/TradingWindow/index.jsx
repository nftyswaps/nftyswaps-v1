import React from 'react'
import TradingSwapBox from './TradingSwapBox'
import { TradingWindowWrapper } from './TradingWindowStyles/TradingWindowStyles'

const TradingWindow = ({ userOneData, userTwoData, userTwoAddress }) => {
	return (
		<TradingWindowWrapper>
			<TradingSwapBox data={userOneData} title={'My Assets'} />
			<TradingSwapBox data={userTwoData} title={userTwoAddress} />
		</TradingWindowWrapper>
	)
}

export default TradingWindow
