import React, { useState } from 'react'
import { useWallet } from 'use-wallet'
import { useRouter } from 'next/router'
import MainWrapper from '../../globalStyles/MainWrapper'
import TradingWindow from '../../components/TradingWindow'
import Header from '../../components/Header'

import fetchAssetsFromAddress from '../../queries/opensea/fetchAssetsFromAddress'
import fetchCurrentUserAssets from '../../queries/opensea/fetchCurrentUserAssets'
import fetchUserOneAssets from '../../queries/opensea/fetchUserOneAssets'

const Swap = () => {
	const router = useRouter()
	const { address } = router.query

	const wallet = useWallet()
	const userOneAddress = wallet.account

	const [userOneData, setUserOneData] = useState(null)
	const [userTwoData, setUserTwoData] = useState(null)

	if (!userOneData && userOneAddress) {
		fetchUserOneAssets(setUserOneData, userOneAddress)
	}

	if (!userTwoData && address != undefined) {
		fetchAssetsFromAddress(setUserTwoData, address)
	}
	return !userOneData || !userTwoData ? (
		<MainWrapper>
			<Header />

			<TradingWindow userOneData={null} userTwoData={null} />
		</MainWrapper>
	) : (
		<MainWrapper>
			<Header />

			<TradingWindow
				userOneData={userOneData}
				userTwoData={userTwoData}
				userTwoAddress={address}
			/>
		</MainWrapper>
	)
}

export default Swap
