import React from 'react'
import {
	TradingWindowWrapper,
	AssetsSection,
	MobileAssetBoxWrapper,
	SwapButton,
} from './TradingWindowStyles/TradingWindowStyles'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import WelcomeBox from '../SearchWindow/WelcomeBox'
import { SingleWindowWrapper } from '../../global/globalStyles/SingleWindowStyles'
import AssetBox from '../AssetBox/index'
import useCreateSwapOffer from '../../hooks/useCreateSwapOffer'

const TradingWindow = ({ userOneData, userTwoData, userTwoAddress }) => {
	const isLoggedIn = useIsLoggedIn()
	const [offer, handleUpdateOffer] = useCreateSwapOffer()

	console.log(offer)

	// pull usernames from opensea if they exist
	// if (userOneData) userOneUsername = userOneData.assets[0].owner.user.username

	// if (userTwoData)
	// 	const userTwoUsername = userTwoData.assets[0].owner.user.username

	return isLoggedIn === 'connected' ? (
		<TradingWindowWrapper id='MainWindow'>
			<SwapButton>Preview Swap</SwapButton>
			<AssetsSection>
				<MobileAssetBoxWrapper>
					<AssetBox
						data={userOneData}
						title={'My Assets'}
						handleUpdateOffer={handleUpdateOffer}
					/>
				</MobileAssetBoxWrapper>
				<MobileAssetBoxWrapper>
					<AssetBox
						data={userTwoData}
						title={userTwoAddress}
						handleUpdateOffer={handleUpdateOffer}
					/>
				</MobileAssetBoxWrapper>
			</AssetsSection>
		</TradingWindowWrapper>
	) : (
		<SingleWindowWrapper>
			<WelcomeBox />
		</SingleWindowWrapper>
	)
}

export default TradingWindow
