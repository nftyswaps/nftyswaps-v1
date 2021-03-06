import React, { useState, useEffect } from 'react'
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
import useModal from '../../hooks/useModal'
import SwapModal from '../Modal/SwapModal'

const TradingWindow = ({ userOneData, userTwoData, userTwoAddress }) => {
	const isLoggedIn = useIsLoggedIn()
	const { isOpen, toggle } = useModal()

	const [offer, handleUpdateOffer] = useCreateSwapOffer()
	const [isLoading, setIsLoading] = useState(true)

	const [makerAsset, setMakerAsset] = useState(null)
	const [takerAsset, setTakerAsset] = useState(null)

	useEffect(() => {
		if (userOneData == null || userTwoData == null) setIsLoading(true)
		else setIsLoading(false)
	}, [userOneData, userTwoData])


	// pull usernames from opensea if they exist
	// if (userOneData) userOneUsername = userOneData.assets[0].owner.user.username

	// if (userTwoData)
	// 	const userTwoUsername = userTwoData.assets[0].owner.user.username

	return isLoggedIn === 'connected' ? (
		<>
			<TradingWindowWrapper id='MainWindow'>
				<SwapButton onClick={toggle}>Preview Swap</SwapButton>
				<AssetsSection>
					<MobileAssetBoxWrapper>
						<AssetBox
							isLoading={isLoading}
							data={userOneData}
							title={'My Assets'}
							handleUpdateOffer={handleUpdateOffer}
							setAssetForSwapModal={setMakerAsset}
						/>
					</MobileAssetBoxWrapper>
					<MobileAssetBoxWrapper>
						<AssetBox
							isLoading={isLoading}
							data={userTwoData}
							title={userTwoAddress}
							handleUpdateOffer={handleUpdateOffer}
							setAssetForSwapModal={setTakerAsset}
						/>
					</MobileAssetBoxWrapper>
				</AssetsSection>
			</TradingWindowWrapper>
			<SwapModal
				isOpen={isOpen}
				hide={toggle}
				offer={offer}
				makerAsset={makerAsset}
				takerAsset={takerAsset}
			/>
		</>
	) : (
		<SingleWindowWrapper>
			<WelcomeBox />
		</SingleWindowWrapper>
	)
}

export default TradingWindow
