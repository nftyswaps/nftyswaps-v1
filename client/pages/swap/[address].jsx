import React, { useState } from 'react'
import { useWallet } from 'use-wallet'
import { useRouter } from 'next/router'
import TradingWindow from '../../components/TradingWindow'
import Header from '../../components/Header'

import fetchAssetsFromAddress from '../../queries/opensea/fetchAssetsFromAddress'
import fetchUserOneAssets from '../../queries/opensea/fetchUserOneAssets'
import { TradingMainWrapper } from '../../components/TradingWindow/TradingWindowStyles/TradingWindowStyles'

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
		<TradingMainWrapper>
			<Header />

			<TradingWindow userOneData={null} userTwoData={null} />
		</TradingMainWrapper>
	) : (
		<TradingMainWrapper>
			<Header />

			<TradingWindow
				userOneData={userOneData}
				userTwoData={userTwoData}
				userTwoAddress={address}
			/>
		</TradingMainWrapper>
	)
}

export default Swap
