import React, { useState, useEffect } from 'react'

import { useQuery } from '@apollo/client'
import { useWallet } from 'use-wallet'
import { GET_OUTGOING_OFFERS } from '../../queries/graph/getOffers'
import { OfferBoxWrapper } from './Styles/OffersWindowStyles'

const OutgoingOffers = () => {
	const wallet = useWallet()

	const [isLoading, setIsLoading] = useState()
	const [isError, setIsError] = useState()
	let offers = []

	const { loading, error, data } = useQuery(GET_OUTGOING_OFFERS, {
		variables: {
			makerAddress: wallet.account,
		},
	})

	useEffect(() => {
		if (data) {
			setIsLoading(loading)
			setIsError(error)
		}
	}, [loading, error])

	if (data) offers = data.offers

	return (
		<>
			{!isLoading && isLoading !== undefined && offers.length > 0 ? (
				offers.map((offer) => {
					console.log(offer)
					return (
						<div>
							<p>{offer.id}</p>
						</div>
					)
				})
			) : (
				<h1>nothing</h1>
			)}
		</>
	)
}

export default OutgoingOffers
