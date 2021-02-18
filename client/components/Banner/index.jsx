import React, { useState } from 'react'
import { BannerWrapper, BannerWords, BannerClose } from './BannerStyles'

const Banner = () => {
	const [isHidden, setIsHidden] = useState(false)

	const handleClick = () => {
		setIsHidden(true)
	}
	
	return (
		<BannerWrapper isHidden={isHidden}>
			<BannerWords>
				Project under construction, please use with caution. Connect
				with Metamask via the Rinkeby testnet
			</BannerWords>
			<BannerClose onClick={() => handleClick()} />
		</BannerWrapper>
	)
}

export default Banner
