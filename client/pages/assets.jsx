import React, { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'
import MainWrapper from '../globalStyles/MainWrapper'
import Header from '../components/Header/index'
import UserAssetsBox from '../components/UserAssetsWindow'
import fetchCurrentUserAssets from '../queries/opensea/fetchCurrentUserAssets'

const Assets = () => {
	const wallet = useWallet()
	const userAccount = wallet.account
	const [data, setData] = useState(null)

	if (data == null && wallet.status == 'connected') {
		fetchCurrentUserAssets(setData, userAccount)
	}

	return (
		<MainWrapper>
			<Header />

			<UserAssetsBox data={data} />
		</MainWrapper>
	)
}
export default Assets
