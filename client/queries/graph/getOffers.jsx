import gql from 'graphql-tag'

export const GET_INCOMING_OFFERS = gql`
	query incomingOffers($takerAddress: Bytes!) {
		offers(where: { takerAddress: $takerAddress }) {
			id
			makerAddress
			makerContract
			makerID
			takerAddress
			takerContract
			takerID
		}
	}
`

export const GET_OUTGOING_OFFERS = gql`
	query outgoingOffers($makerAddress: Bytes!) {
		offers(where: { makerAddress: $makerAddress }) {
			id
			makerAddress
			makerContract
			makerID
			takerAddress
			takerContract
			takerID
		}
	}
`
