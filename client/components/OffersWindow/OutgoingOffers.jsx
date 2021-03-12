import React, { useState, useEffect } from 'react'

import { useQuery } from '@apollo/client'
import { useWallet } from 'use-wallet'
import { GET_OUTGOING_OFFERS } from '../../queries/graph/getOffers'
import OfferCard from './OfferCard'
import { OfferCardWrapper } from './Styles/OffersWindowStyles'

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
				offers.map((offer) => (
					<OfferCardWrapper>
						<OfferCard offer={offer} />
					</OfferCardWrapper>
				))
			) : (
				<h1>nothing</h1>
			)}
		</>
	)
}

export default OutgoingOffers
