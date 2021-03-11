import React, { useState } from 'react'
import useModal from '../../hooks/useModal'
import DefaultModal from '../Modal/DefaultModal'
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
	const [modalAsset, setModalAsset] = useState({})

	const handleClick = ( asset) => {
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
						<AssetWrapper
							key={asset.id}
							onClick={() => handleClick(asset)}
						>
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
			<DefaultModal isOpen={isOpen} hide={toggle} asset={modalAsset} handleUpdateOffer={handleUpdateOffer}/>
		</>
	) : (
		<AssetSwapBoxWrapper>
			<AssetSwapBoxTitle>Loading</AssetSwapBoxTitle>
		</AssetSwapBoxWrapper>
	)
}

export default AssetBox
