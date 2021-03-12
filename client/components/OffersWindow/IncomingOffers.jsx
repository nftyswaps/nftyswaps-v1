import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useWallet } from 'use-wallet'
import { GET_INCOMING_OFFERS } from '../../queries/graph/getOffers'
import { AssetSwapBoxWrapper } from '../AssetBox/Styles/AssetBoxStyles'
import { OfferBoxWrapper } from './Styles/OffersWindowStyles'

const IncomingOffers = () => {
	const wallet = useWallet()

	const [isLoading, setIsLoading] = useState()
	const [isError, setIsError] = useState()
	let offers = []

	const { loading, error, data } = useQuery(GET_INCOMING_OFFERS, {
		variables: {
			takerAddress: wallet.account,
		},
	})

	useEffect(() => {
		if (data) {
			setIsLoading(loading)
			setIsError(error)
		}
	}, [loading, error])

	if (data) offers = data.offers
	// console.log(offers)
	return (
		<>
			{!isLoading && isLoading !== undefined && offers.length > 0 ? (
				offers.map((offer) => (
					<div>
						<p>{offer.id}</p>
					</div>
				))
			) : (
				<h1>nothing</h1>
			)}
		</>
	)
}

export default IncomingOffers
