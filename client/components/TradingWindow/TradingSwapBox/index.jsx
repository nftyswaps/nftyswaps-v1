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
} from '../../UserAssetsWindow/Styles/AssetSwapBoxStyles'

const TradingSwapBox = ({ data, title }) => {
	const wallet = useWallet()

	return wallet.status === 'connected' && data ? (
		<AssetSwapBoxWrapper>
			<AssetSwapBoxTitleWrapper>
				<AssetSwapBoxTitle>{title}</AssetSwapBoxTitle>
			</AssetSwapBoxTitleWrapper>

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
		<AssetSwapBoxWrapper>
			<AssetSwapBoxTitle>Loading</AssetSwapBoxTitle>
		</AssetSwapBoxWrapper>
	)
}

export default TradingSwapBox
