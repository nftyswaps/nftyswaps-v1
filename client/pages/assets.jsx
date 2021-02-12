import React, { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'
import MainWrapper from '../globalStyles/MainWrapper'
import Header from '../components/Header/index'
import AssetSwapBox from '../components/MainWindow/AssetSwapBox'

const Assets = () => {
	return (
		<MainWrapper>
			<Header />

			<AssetSwapBox />
		</MainWrapper>
	)
}
export default Assets
