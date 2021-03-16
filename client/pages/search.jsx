import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import MainWrapper from '../global/globalStyles/MainWrapper'
import StartBox from '../components/SearchWindow/index'

const Search = () => {
	return (
		<MainWrapper>
			<Header />

			<StartBox />
		</MainWrapper>
	)
}

export default Search
