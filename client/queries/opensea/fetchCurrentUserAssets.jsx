import { useWallet } from 'use-wallet'

const fetchCurrentUserAssets = (setData, userAccount) => {
	fetch(
		// Mainnet
		// `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${userAccount}`,
		// Testnet (Rinkeby)
		`https://rinkeby-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${userAccount}`,
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
