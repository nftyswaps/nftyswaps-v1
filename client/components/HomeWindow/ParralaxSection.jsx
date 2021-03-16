import { StyledParallaxSection } from './Styles/HomeWindowStyles'
import React from 'react'

const ParallaxSection = (props) => {
	return (
		<StyledParallaxSection pic={props.pic}>
			{props.children}
		</StyledParallaxSection>
	)
}

export default ParallaxSection
