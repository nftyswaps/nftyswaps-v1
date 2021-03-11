import { useState } from 'react'

const useCreateSwapOffer = () => {
	const [offer, setOffer] = useState({
		makerContract: null,
		makerID: null,
		takerContract: null,
		takerID: null,
	})

	const handleOfferUpdate = (offerUpdate) =>
		setOffer({
			...offer,
			...offerUpdate,
		})

	return [offer, handleOfferUpdate]
}

export default useCreateSwapOffer
