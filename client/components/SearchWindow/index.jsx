import React from 'react'

import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import WelcomeBox from './WelcomeBox'
import SearchBox from './SearchBox'
import { SingleWindowWrapper } from '../../globalStyles/SingleWindowStyles'

const StartBox = () => {
	const isLoggedIn = useIsLoggedIn()

	return (
		<SingleWindowWrapper>
			{isLoggedIn === 'connected' ? <SearchBox /> : <WelcomeBox />}
		</SingleWindowWrapper>
	)
}

export default StartBox
