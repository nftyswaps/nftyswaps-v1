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
	RinkebyHereLink,
	SocialDiv,
	SocialIcon,
	SocialLink,
} from './Styles/HomeWindowStyles'

import Test from '../AbiWindow_Example';

const HomeWindow = () => {
	const router = useRouter()

	return (
		<ParallaxWrapper>
			<Test />
			<ParallaxSection pic='https://i.ibb.co/FJc27rv/LineArt1.png'>
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
				<StaticTitle>{HomeText.StaticSectionOneTitle}</StaticTitle>
				<StaticSecondaryText>
					{HomeText.StaticSectionOneSecondary}
				</StaticSecondaryText>
			</StaticSection>

			<ParallaxSection pic='https://i.ibb.co/tqvwqPy/LineArt2.png'>
				<TextWrapper>
					<ParallaxTitle>
						{HomeText.ParallaxSectionTwoTitle}
					</ParallaxTitle>
					<OtherParallaxSecondaryText>
						Go to your Metamask wallet and switch your provider to
						Rinkeby. If you don't have some already, you can get
						some free testnet ether{' '}
						<RinkebyHereLink
							target='_blank'
							href={'https://faucet.rinkeby.io/'}
							rel='noopener noreferrer'
						>
							here.
						</RinkebyHereLink>
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

			<ParallaxSection pic='https://i.ibb.co/jvSh03b/LineArt3.png'>
				<TextWrapper>
					<ParallaxTitle>Join Our Community.</ParallaxTitle>
					<ParallaxSecondaryText>
						{HomeText.ParallaxSectionThreeSecondary}
					</ParallaxSecondaryText>
				</TextWrapper>
				<SocialDiv>
					{/* Telegram */}
					<SocialLink
						href='https://t.me/nftyswaps'
						target='_blank'
						rel='noopener noreferrer'
					>
						<SocialIcon src='https://i.ibb.co/XFYk4ky/Telegram.png' />
					</SocialLink>
					{/* Discord */}
					<SocialLink
						href='https://discord.gg/TyKzuZe7sm'
						target='_blank'
						rel='noopener noreferrer'
					>
						<SocialIcon src='https://i.ibb.co/zP1CV0k/Discord.png' />
					</SocialLink>
					{/* Twitter */}
					<SocialLink
						href='https://twitter.com/NftySwaps'
						target='_blank'
						rel='noopener noreferrer'
					>
						<SocialIcon src='https://i.ibb.co/n7zGTws/Twitter.png' />
					</SocialLink>
				</SocialDiv>
			</ParallaxSection>
		</ParallaxWrapper>
	)
}

export default HomeWindow
