import React, { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'
import MainWrapper from '../globalStyles/MainWrapper'
import Header from '../components/Header/index'
import UserAssetsBox from '../components/UserAssetsWindow'
import fetchCurrentUserAssets from '../queries/opensea/fetchCurrentUserAssets'
import useIsLoggedIn from '../hooks/useIsLoggedIn'
import WelcomeBox from '../components/SearchWindow/WelcomeBox'
import { SingleWindowWrapper } from '../globalStyles/SingleWindowStyles'

const Assets = () => {
	const wallet = useWallet()
	const userAccount = wallet.account
	const [data, setData] = useState(null)
	const isLoggedIn = useIsLoggedIn()
	console.log(isLoggedIn)

	if (data == null && isLoggedIn == 'connected') {
		fetchCurrentUserAssets(setData, userAccount)
	}
	console.log(data)
	return (
		<MainWrapper>
			<Header />

			<SingleWindowWrapper>
				{isLoggedIn === 'connected' ? (
					<UserAssetsBox data={data} />
				) : (
					<WelcomeBox />
				)}
			</SingleWindowWrapper>
		</MainWrapper>
	)
}
export default Assets
