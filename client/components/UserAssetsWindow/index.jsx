import React, { useState } from 'react'
import { useWallet } from 'use-wallet'
import { MainWindowWrapper } from '../MainWindow/MainWindowStyles/MainWindowStyles'
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

const UserAssetsBox = ({ data }) => {
	const wallet = useWallet()

	return wallet.status === 'connected' && data ? (
		<MainWindowWrapper>
			<AssetSwapBoxWrapper>
				<AssetSwapBoxTitle>My Assets</AssetSwapBoxTitle>
				<AssetSwapBoxList>
					{data.assets.map((asset) => (
						<AssetWrapper key={asset.id}>
							<AssetThumb src={asset.image_url} />
							<AssetTitle>{asset.name}</AssetTitle>
							<AssetArtist>
								{asset.creator.user.username}
							</AssetArtist>
						</AssetWrapper>
					))}
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

export default UserAssetsBox
