const fetchCurrentUserAssets = (setData, addressToQuery) => {
	fetch(
		// `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=${userAccount}`,

		`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=${addressToQuery}`,
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			setData(data)
		})
		.catch((err) => {
			console.log(err)
		})
}

export default fetchCurrentUserAssets
