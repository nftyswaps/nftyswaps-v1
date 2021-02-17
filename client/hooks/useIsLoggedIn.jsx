import { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'

const useIsLoggedIn = () => {
	const wallet = useWallet()

	const [isLoggedIn, setIsLoggedIn] = useState(wallet.status)

	useEffect(() => {
		setIsLoggedIn(wallet.status)
	}, [wallet])

	return isLoggedIn
}

export default useIsLoggedIn
