const fetchAssetsFromAddress = (setUserTwoData, address) => {
	fetch(
		// Mainnet
		// `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${address}`,
		// Testnet (Rinkeby)
		`https://rinkeby-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${address}`,
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			setUserTwoData(data)
		})
		.catch((err) => {
			console.log(err)
		})
}

export default fetchAssetsFromAddress
