import React from 'react'
import { StyledStaticSection } from './Styles/HomeWindowStyles'

const StaticSection = (props) => (
	<StyledStaticSection className={props.className}>
		{props.children}
	</StyledStaticSection>
)

export default StaticSection
