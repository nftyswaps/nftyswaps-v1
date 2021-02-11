import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import MainWrapper from '../globalStyles/MainWrapper'
import SingleSwapBox from '../components/MainWindow/SingleSwapBox'
import SwapBox from '../components/SwapBox'

const Index = () => {
	return (
		<MainWrapper>
			<Header />

			<SingleSwapBox>
				<SwapBox></SwapBox>
			</SingleSwapBox>
		</MainWrapper>
	)
}

export default Index
