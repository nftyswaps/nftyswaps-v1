import React, { useState } from 'react'
import { useWallet } from 'use-wallet'
import {
	AssetSwapBoxBody,
	AssetSwapBoxWrapper,
	AssetThumb,
	AssetSwapBoxList,
	AssetSwapBoxTitle,
	AssetSwapBoxTitleWrapper,
	AssetWrapper,
	AssetTitle,
	AssetArtist,
} from '../../MainWindow/AssetSwapBox/Styles/AssetSwapBoxStyles'
import fetchCurrentUserAssets from '../../../queries/opensea/fetchCurrentUserAssets'
import AssetSwapboxListTemp from './AssetSwapboxListTMP'

const ActiveAssetSwapBox = ({ data, title }) => {
	const wallet = useWallet()
	return wallet.status === 'connected' && data ? (
		<>
			<AssetSwapBoxWrapper>
				<AssetSwapBoxTitleWrapper>
					<AssetSwapBoxTitle>{title}</AssetSwapBoxTitle>
				</AssetSwapBoxTitleWrapper>
				<AssetSwapboxListTemp data={data} />
			</AssetSwapBoxWrapper>
		</>
	) : (
		<AssetSwapBoxWrapper>
			<AssetSwapBoxTitle>Loading</AssetSwapBoxTitle>
		</AssetSwapBoxWrapper>
	)
}

export default ActiveAssetSwapBox
