import React, { useState } from 'react'
import { useWallet } from 'use-wallet'
import { SingleWindowWrapper } from '../../globalStyles/SingleWindowStyles'
import WelcomeBox from '../SearchWindow/WelcomeBox'
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

	return (
		<SingleWindowWrapper>
			{wallet.status === 'connected' && data ? (
				<AssetSwapBoxWrapper>
					<AssetSwapBoxTitle>My Assets</AssetSwapBoxTitle>
					<AssetSwapBoxList>
						{data.assets.map((asset) => (
							<AssetWrapper key={asset.id}>
								<AssetThumb src={asset.image_url} />
								<AssetTitle>{asset.name}</AssetTitle>
								<AssetArtist>
									{asset.creator.user.username ||
										asset.collection.name}
								</AssetArtist>
							</AssetWrapper>
						))}
					</AssetSwapBoxList>
				</AssetSwapBoxWrapper>
			) : (
				<WelcomeBox />
			)}
		</SingleWindowWrapper>
	)
}

export default UserAssetsBox
