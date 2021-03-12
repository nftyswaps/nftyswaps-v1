import React, { useState, useEffect } from 'react'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import { SingleWindowWrapper } from '../../global/globalStyles/SingleWindowStyles'

import WelcomeBox from '../SearchWindow/WelcomeBox'
import IncomingOffers from './IncomingOffers'
import OutgoingOffers from './OutgoingOffers'

import {
	OffersWindowWrapper,
	OffersBoxWrapper,
	OffersSection,
	Tab,
	TabNav,
	TabSeperator,
} from './Styles/OffersWindowStyles'

const tabs = {
	incoming: <IncomingOffers />,
	outgoing: <OutgoingOffers />,
	// 'completed': <Contact />
}

const OffersWindow = () => {
	const isLoggedIn = useIsLoggedIn()
	const [selectedTab, setSelectedTab] = useState('incoming')
	const [isActive, setIsActive] = useState({
		incoming: true,
		outgoing: false,
	})

	const handleClick = () => {
		if (isActive.incoming) {
			setIsActive({
				incoming: false,
				outgoing: true,
			})
			setSelectedTab('outgoing')
		} else {
			setIsActive({
				incoming: true,
				outgoing: false,
			})
			setSelectedTab('incoming')
		}
	}

	return (
		<SingleWindowWrapper id='MainWindow'>
			{isLoggedIn === 'connected' ? (
				<OffersBoxWrapper>
					<TabNav>
						<Tab onClick={handleClick} isActive={isActive.incoming}>
							Incoming
						</Tab>
						<TabSeperator />
						<Tab onClick={handleClick} isActive={isActive.outgoing}>
							Outgoing
						</Tab>
					</TabNav>
					<OffersSection>{tabs[selectedTab]}</OffersSection>
				</OffersBoxWrapper>
			) : (
				<WelcomeBox />
			)}
		</SingleWindowWrapper>
	)
}

export default OffersWindow
