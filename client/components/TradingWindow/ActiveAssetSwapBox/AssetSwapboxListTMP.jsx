import React, { useState } from 'react'
import {
	AssetSwapBoxBody,
	AssetSwapBoxWrapper,
	AssetThumb,
	AssetSwapBoxList,
	AssetSwapBoxTitle,
	AssetWrapper,
	AssetTitle,
	AssetArtist,
} from '../../MainWindow/AssetSwapBox/Styles/AssetSwapBoxStyles'

const AssetSwapboxListTemp = ({ data }) => (
	<AssetSwapBoxList>
		{/* ---------------- Real Code --------------------- */}
		{data.assets.map((asset) => (
			<AssetWrapper>
				<AssetThumb src={asset.image_url} />
				<AssetTitle>{asset.name}</AssetTitle>
				<AssetArtist>{asset.creator.user.username}</AssetArtist>
			</AssetWrapper>
		))}
		{/* ---------------- TEST ITEMS --------------------- */}
		{/* <AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper>
		<AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper>{' '}
		<AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper>{' '}
		<AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper>
		<AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper>
		<AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper>{' '}
		<AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper>{' '}
		<AssetWrapper>
			<AssetThumb src={data.assets[0].image_url} />
			<AssetTitle>{data.assets[0].name}</AssetTitle>
			<AssetArtist>{data.assets[0].creator.user.username}</AssetArtist>
		</AssetWrapper> */}
	</AssetSwapBoxList>
)

export default AssetSwapboxListTemp
