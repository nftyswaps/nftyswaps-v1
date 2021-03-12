import React, { useState } from 'react'
import fetchTakerAsset from '../../queries/opensea/fetchTakerAsset'
import fetchMakerAsset from '../../queries/opensea/fetchMakerAsset'
import useModal from '../../hooks/useModal'
import TakerSwapModal from '../Modal/TakerSwapModal'
import {
	OfferCardWrapper,
	ViewOfferButton,
	OfferFrom,
} from './Styles/OffersWindowStyles'

const OfferCard = ({ offer, incoming }) => {
	const [makerAsset, setMakerAsset] = useState(null)
	const [takerAsset, setTakerAsset] = useState(null)

	const { isOpen, toggle } = useModal()

	const handleViewOffer = () => {
		fetchMakerAsset(setMakerAsset, offer)
		fetchTakerAsset(setTakerAsset, offer)
		toggle()
	}

	return (
		<>
			<OfferFrom>{offer.makerAddress}</OfferFrom>
			<ViewOfferButton onClick={handleViewOffer}>
				View Offer
			</ViewOfferButton>
			{incoming ? (

			<TakerSwapModal
				isOpen={isOpen}
				hide={toggle}
				offer={offer}
				makerAsset={makerAsset}
				takerAsset={takerAsset}
			/>
			) : null}
		</>
	)
}

export default OfferCard
