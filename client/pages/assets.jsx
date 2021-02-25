import React, { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'
import MainWrapper from '../global/globalStyles/MainWrapper'
import Header from '../components/Header/index'
import fetchCurrentUserAssets from '../queries/opensea/fetchCurrentUserAssets'
import useIsLoggedIn from '../hooks/useIsLoggedIn'
import WelcomeBox from '../components/SearchWindow/WelcomeBox'
import { SingleWindowWrapper } from '../global/globalStyles/SingleWindowStyles'
import AssetBox from '../components/AssetBox/index'

const Assets = () => {
	const wallet = useWallet()
	const userAccount = wallet.account
	const [data, setData] = useState(null)
	const isLoggedIn = useIsLoggedIn()

	if (data == null && isLoggedIn == 'connected') {
		fetchCurrentUserAssets(setData, userAccount)
	}
	
	return (
		<MainWrapper>
			<Header />

			<SingleWindowWrapper>
				{isLoggedIn === 'connected' ? (
					<AssetBox data={data} title='My Assets' />
				) : (
					<WelcomeBox />
				)}
			</SingleWindowWrapper>
		</MainWrapper>
	)
}
export default Assets
