import React from 'react'
import SwapBox from '../SwapBox'
import { MainWindowSingleSwapbox } from './Styles/MainWindowStyles'
import useIsEthEnabled from '../../hooks/useIsEthereumEnabled'

const SingleSwapBox = () => {
	// const isEthEnabled = useIsEthEnabled()
	// console.log(isEthEnabled)
	return (
		<MainWindowSingleSwapbox>
			<SwapBox></SwapBox>
		</MainWindowSingleSwapbox>
	)
}

export default SingleSwapBox
