import React from 'react'

import { useRouter } from 'next/router'

import ParallaxSection from './ParralaxSection'
import StaticSection from './StaticSection'
import { HomeText } from './HomeText'
import {
	ParallaxSecondaryText,
	OtherParallaxSecondaryText,
	ParallaxTitle,
	ParallaxWrapper,
	TextWrapper,
	GetStartedButton,
	StaticTitle,
	StaticSecondaryText,
	SocialDiv,
	SocialIcon,
} from './Styles/HomeWindowStyles'

const HomeWindow = () => {
	const router = useRouter()

	return (
		<ParallaxWrapper>
			<ParallaxSection pic='https://i.ibb.co/4Z1f47Q/LineArt1.png'>
				<TextWrapper>
					<ParallaxTitle>
						{HomeText.ParallaxSectionOneTitle}
					</ParallaxTitle>
					<ParallaxSecondaryText>
						{HomeText.ParallaxSectionOneSecondary}
					</ParallaxSecondaryText>
				</TextWrapper>
				<GetStartedButton onClick={() => router.push('/search')}>
					Start Swapping
				</GetStartedButton>
			</ParallaxSection>

			<StaticSection>
				<StaticTitle>{HomeText.StaticSectionTwoTitle}</StaticTitle>
				<StaticSecondaryText>
					{HomeText.StaticSectionOneSecondary}
				</StaticSecondaryText>
			</StaticSection>

			<ParallaxSection pic='https://i.ibb.co/gjFNbst/LineArt3.png'>
				<TextWrapper>
					<ParallaxTitle>
						{HomeText.ParallaxSectionTwoTitle}
					</ParallaxTitle>
					<OtherParallaxSecondaryText>
						To start, go to your Metamask wallet and switch your
						provider to Rinkeby. If you don't have some already, you
						can get some free testnet ether here.
					</OtherParallaxSecondaryText>
					<br />
					<OtherParallaxSecondaryText>
						Next click Login with metamask and navigate to the
						Search page. Enter the address of the user you wish to
						swap with and select 'Go'.
					</OtherParallaxSecondaryText>
					<br />

					<OtherParallaxSecondaryText>
						Here in the swap window you can select an asset from
						both sides, building your offer¹. Once you have chosen
						the assets you wish to swap, click 'Preview Swap' and
						confirm your offer. You will be asked to approve the
						contract to send your asset², and once approved you will
						be prompted to send the offer.
					</OtherParallaxSecondaryText>
					<br />

					<OtherParallaxSecondaryText>
						Now on the Offers page, you should see your new offer in
						the outgoing tab. If the receiving party accepts the
						offer on their end, the assets will be swapped!
					</OtherParallaxSecondaryText>
				</TextWrapper>
			</ParallaxSection>

			<StaticSection>
				<StaticTitle>Why NftySwaps.</StaticTitle>
				<StaticSecondaryText>
					{HomeText.StaticSectionTwoSecondary}
				</StaticSecondaryText>
			</StaticSection>

			<ParallaxSection pic='https://i.ibb.co/rmCqsQg/LineArt2.png'>
				<TextWrapper>
					<ParallaxTitle>Join Our Community.</ParallaxTitle>
					<ParallaxSecondaryText>
						{HomeText.ParallaxSectionThreeSecondary}
					</ParallaxSecondaryText>
				</TextWrapper>
				<SocialDiv>
					<SocialIcon src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png' />
					<SocialIcon src='https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png' />
					<SocialIcon src='https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png' />
				</SocialDiv>
			</ParallaxSection>
		</ParallaxWrapper>
	)
}

export default HomeWindow
