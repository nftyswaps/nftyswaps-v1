import { useWallet } from 'use-wallet'

const fetchUserOneAssets = (setUserOneData, userOneAddress) => {
	fetch(
		`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${userOneAddress}`,
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data)
			setUserOneData(data)
		})
		.catch((err) => {
			console.log(err)
		})
}

export default fetchUserOneAssets
