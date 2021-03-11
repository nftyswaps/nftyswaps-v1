const fetchMakerAsset = (setMakerAsset, offer) => {
	fetch(
		// Mainnet
		// `https://api.opensea.io/api/v1/asset/${offer.makerContract}/${offer.makerID}/`,
		// Testnet (Rinkeby)
		`https://rinkeby-api.opensea.io/api/v1/asset/${offer.makerContract}/${offer.makerID}/`,
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			setMakerAsset(data)
		})
		.catch((err) => {
			console.log(err)
		})
}

export default fetchMakerAsset
