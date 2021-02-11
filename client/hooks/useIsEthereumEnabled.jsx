import Web3 from 'web3'
import { useState } from 'react'

const useIsEthEnabled = async () => {
	let { web3 } = window
	const [isEthEnabled, setIsEthEnabled] = useState(false)

	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum)
		window.ethereum.enable()
		setIsEthEnabled(true)
	}
	return isEthEnabled
}

export default useIsEthEnabled
