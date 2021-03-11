import React, { useState } from 'react'
import {
	AssetThumb,
	AssetWrapper,
	AssetTitle,
	AssetArtist,
} from './Styles/AssetBoxStyles'

const Asset = ({ asset, handleClick }) => {
	return (
		<AssetWrapper
			key={asset.id}
			onClick={handleClick ? () => handleClick(asset) : null}
		>
			<AssetThumb src={asset.image_url} />
			<AssetTitle>{asset.name || asset.token_id}</AssetTitle>
			<AssetArtist>
				{asset.collection.name ||
					asset.creator.user.username ||
					'Unknown'}
			</AssetArtist>
		</AssetWrapper>
	)
}

export default Asset
