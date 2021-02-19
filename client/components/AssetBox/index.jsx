import React, { useState } from 'react'
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
} from './Styles/AssetBoxStyles'

const AssetBox = ({ data, title }) => {
	return data ? (
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
							{asset.collection.name ||
								asset.creator.user.username ||
								'Unknown'}
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

export default AssetBox
