import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import MainWrapper from '../globalStyles/MainWrapper'
import HomeBox from '../components/MainWindow/HomeBox'

const Index = () => {
	return (
		<MainWrapper>
			<Header />

			<HomeBox />
		</MainWrapper>
	)
}

export default Index
