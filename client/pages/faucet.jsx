import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import MainWrapper from '../global/globalStyles/MainWrapper'
import FaucetWindow from '../components/FaucetWindow/index'

const Faucet = () => {
	return (
		<MainWrapper>
			<Header />

			<FaucetWindow />
		</MainWrapper>
	)
}

export default Faucet
