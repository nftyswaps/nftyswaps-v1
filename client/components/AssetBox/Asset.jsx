import React, { useState } from 'react'
import {
	AssetThumb,
	AssetWrapper,
	AssetTitle,
	AssetArtist,
} from './Styles/AssetBoxStyles'

const Asset = ({ asset, handleClick }) => {
	return !asset.detail ? (
		<AssetWrapper
			key={asset.id}
			onClick={handleClick ? () => handleClick(asset) : null}
		>
			<AssetThumb
				src={
					asset.image_url || 'https://i.ibb.co/kM4htMP/not-found.png'
				}
			/>
			<AssetTitle>{asset.name || asset.token_id}</AssetTitle>
			<AssetArtist>
				{asset.collection.name ||
					asset.creator.user.username ||
					'Unknown'}
			</AssetArtist>
		</AssetWrapper>
	) : (
		<AssetWrapper>{asset.detail}</AssetWrapper>
	)
}

export default Asset
