import React, { useState, useEffect } from 'react'
import useModal from '../../hooks/useModal'
import AssetModal from '../Modal/AssetModal'
import Asset from './Asset'
import {
	AssetSwapBoxWrapper,
	AssetSwapBoxList,
	AssetSwapBoxTitle,
	AssetSwapBoxTitleWrapper,
} from './Styles/AssetBoxStyles'

const AssetBox = ({
	data,
	title,
	handleUpdateOffer,
	setAssetForSwapModal,
	isLoading,
}) => {
	const { isOpen, toggle } = useModal()
	const [modalAsset, setModalAsset] = useState(null)
	const [isTradingWindow, setIsTradingWindow] = useState()

	const handleClick = (asset) => {
		!handleUpdateOffer
			? setIsTradingWindow(false)
			: setIsTradingWindow(true)
		toggle()
		setModalAsset(asset)
	}

	return !isLoading && data ? (
		<>
			<AssetSwapBoxWrapper>
				<AssetSwapBoxTitleWrapper>
					<AssetSwapBoxTitle>{title}</AssetSwapBoxTitle>
				</AssetSwapBoxTitleWrapper>
				<AssetSwapBoxList>
					{data.assets.map((asset) => (
						<Asset asset={asset} handleClick={handleClick} />
					))}
				</AssetSwapBoxList>
			</AssetSwapBoxWrapper>
			<AssetModal
				isOpen={isOpen}
				hide={toggle}
				asset={modalAsset}
				handleUpdateOffer={handleUpdateOffer}
				setAssetForSwapModal={setAssetForSwapModal}
				isTradingWindow={isTradingWindow}
			/>
		</>
	) : (
		<AssetSwapBoxWrapper>
			<AssetSwapBoxTitle>Loading</AssetSwapBoxTitle>
		</AssetSwapBoxWrapper>
	)
}

export default AssetBox
