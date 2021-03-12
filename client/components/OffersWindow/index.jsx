import React, { useState, useEffect } from 'react'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import { SingleWindowWrapper } from '../../global/globalStyles/SingleWindowStyles'

import WelcomeBox from '../SearchWindow/WelcomeBox'
import IncomingOffers from './IncomingOffers'
import OutgoingOffers from './OutgoingOffers'

import {
	OffersWindowWrapper,
	OffersSection,
	Tab,
	TabNav,
	OfferBoxWrapper,
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
		<SingleWindowWrapper>
			{isLoggedIn === 'connected' ? (
				<OfferBoxWrapper>
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
				</OfferBoxWrapper>
			) : (
				<OffersSection>
					<WelcomeBox />
				</OffersSection>
			)}
		</SingleWindowWrapper>
	)
}

export default OffersWindow
