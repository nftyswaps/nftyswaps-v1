const fetchTakerAsset = (setTakerAsset, offer) => {
	fetch(
		// Mainnet
		// `https://api.opensea.io/api/v1/asset/${offer.takerContract}/${offer.takerID}/`,
		// Testnet (Rinkeby)
		`https://rinkeby-api.opensea.io/api/v1/asset/${offer.takerContract}/${offer.takerID}/`,
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			setTakerAsset(data)
		})
		.catch((err) => {
			console.log(err)
		})
}

export default fetchTakerAsset
