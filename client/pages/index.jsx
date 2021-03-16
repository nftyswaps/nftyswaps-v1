import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import MainWrapper from '../global/globalStyles/MainWrapper'
import StartBox from '../components/SearchWindow/index'
import HomeWindow from '../components/HomeWindow'

const Index = () => {
	return (
		<MainWrapper>
			<Header />

			<HomeWindow />
		</MainWrapper>
	)
}

export default Index
