import React, { useState } from 'react'
import useModal from '../../hooks/useModal'
import AssetModal from '../Modal/AssetModal'
import Asset from './Asset'
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

const AssetBox = ({ data, title, handleUpdateOffer }) => {
	const { isOpen, toggle } = useModal()
	// console.log(data)
	const [modalAsset, setModalAsset] = useState(null)

	const handleClick = (asset) => {
		toggle()
		setModalAsset(asset)
	}

	return data ? (
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
			/>
		</>
	) : (
		<AssetSwapBoxWrapper>
			<AssetSwapBoxTitle>Loading</AssetSwapBoxTitle>
		</AssetSwapBoxWrapper>
	)
}

export default AssetBox
