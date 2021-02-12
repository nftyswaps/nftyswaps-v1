import React, { useState } from 'react'
import { useWallet } from 'use-wallet'
import { MainWindowWrapper } from '../MainWindowStyles/MainWindowStyles'
import {
	AssetSwapBoxBody,
	AssetSwapBoxWrapper,
	AssetThumb,
	AssetSwapBoxList,
	AssetSwapBoxTitle,
	AssetWrapper,
	AssetTitle,
	AssetArtist,
} from './Styles/AssetSwapBoxStyles'
import fetchCurrentUserAssets from '../../../queries/opensea/fetchCurrentUserAssets'

const AssetSwapBox = () => {
	const wallet = useWallet()
	const userAccount = wallet.account
	const [data, setData] = useState(null)

	if (data == null) {
		fetchCurrentUserAssets(setData, userAccount)
	}

	console.log(data)
	return wallet.status === 'connected' && data ? (
		<MainWindowWrapper>
			<AssetSwapBoxWrapper>
				<AssetSwapBoxTitle>My Assets</AssetSwapBoxTitle>
				<AssetSwapBoxList>
					{data.assets.map((asset) => (
						<AssetWrapper>
							<AssetThumb src={asset.image_url} />
							<AssetTitle>{asset.name}</AssetTitle>
							<AssetArtist>
								{asset.creator.user.username}
							</AssetArtist>
						</AssetWrapper>
					))}
					{/* ----------------TEST ITEMS--------------------- */}
					<AssetWrapper>
						<AssetThumb src={data.assets[0].image_url} />
						<AssetTitle>{data.assets[0].name}</AssetTitle>
						<AssetArtist>
							{data.assets[0].creator.user.username}
						</AssetArtist>
					</AssetWrapper>
					<AssetWrapper>
						<AssetThumb src={data.assets[0].image_url} />
						<AssetTitle>{data.assets[0].name}</AssetTitle>
						<AssetArtist>
							{data.assets[0].creator.user.username}
						</AssetArtist>
					</AssetWrapper>{' '}
					<AssetWrapper>
						<AssetThumb src={data.assets[0].image_url} />
						<AssetTitle>{data.assets[0].name}</AssetTitle>
						<AssetArtist>
							{data.assets[0].creator.user.username}
						</AssetArtist>
					</AssetWrapper>{' '}
					<AssetWrapper>
						<AssetThumb src={data.assets[0].image_url} />
						<AssetTitle>{data.assets[0].name}</AssetTitle>
						<AssetArtist>
							{data.assets[0].creator.user.username}
						</AssetArtist>
					</AssetWrapper>
				</AssetSwapBoxList>
			</AssetSwapBoxWrapper>
		</MainWindowWrapper>
	) : (
		<MainWindowWrapper>
			<AssetSwapBoxWrapper>
				<AssetSwapBoxTitle>Loading</AssetSwapBoxTitle>
			</AssetSwapBoxWrapper>
		</MainWindowWrapper>
	)
}

export default AssetSwapBox
