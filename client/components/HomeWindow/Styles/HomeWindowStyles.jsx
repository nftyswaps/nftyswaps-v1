import styled from 'styled-components'

export const ParallaxWrapper = styled.div`
	/* The height needs to be set to a fixed value for the effect to work.
* 100vh is the full height of the viewport. */
	height: 100%;
	width: 100vw;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	/* This is essentailly the simulated distance from the viewport
to transformed objects.*/
	perspective: 2px;
`

export const StyledStaticSection = styled.section`
	/* Needed for children to be absolutely positioned relative to the parent. */
	position: relative;
	/* The height of the container.
    Must be set, but it doesn't really matter what the value is. */
	height: 50vh;

	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-image: linear-gradient(to bottom right, #f6851b, #ff3366);
	box-shadow: 0 5px 20px black, 0 -5px 20px black;
`

export const StyledParallaxSection = styled.section`
	position: relative;
	height: 100%;
	margin: 0;
	padding: 0;
	overflow-y: hidden;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	&:after {
		/* Display and position the pseudo-element */
		content: ' ';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		/* Force the background image to fill the whole element. */
		background-size: cover;
		background-position: center;

		transform: translateZ(-1px) scale(1.5);
		/* background-attachment: fixed; */
		/* Keep the image from overlapping sibling elements. */
		z-index: -1;
		background-image: ${({ pic }) => `url('${pic}')`};
		/* background-color: ${({ theme }) => theme.colors.orange}; */
		/* background-image: radial-gradient(#333333, #111111); */
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: fit-content;
	width: 95%;

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		width: 80%;
	}
	/* @media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 56px;
		line-height: 56px;
		margin-right: 3vw;
	} */
`

export const ParallaxTitle = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	text-shadow: 0 0 5px #000;
	font-family: ${({ theme }) => theme.fonts.raleway};
	text-align: center;
	width: 100%;

	margin: 0 0 3vh 0;
	font-size: 30px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 48px;
		line-height: 48px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 96px;
		line-height: 96px;
	}
	/* @media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 56px;
		line-height: 56px;
		margin-right: 3vw;
	} */
`

export const ParallaxSecondaryText = styled.p`
	color: ${({ theme }) => theme.colors.white};
	text-shadow: 0 0 5px #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	text-align: center;
	width: 95%;
	margin: 0;
	font-size: 12px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 16px;
		line-height: 16px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 30px;
		line-height: 30px;
	}
	/* @media (min-width: ${({ theme }) => theme.device.laptopL}) {
		font-size: 56px;
		line-height: 56px;
		margin-right: 3vw;
	} */
`

export const RinkebyHereLink = styled.a`
	color: ${({ theme }) => theme.colors.blue};
	text-shadow: 0 0 5px #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	font-size: 12px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 16px;
		line-height: 16px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 24px;

		line-height: 24px;
	}
`

export const OtherParallaxSecondaryText = styled.p`
	color: ${({ theme }) => theme.colors.white};
	text-shadow: 0 0 5px #000;
	font-family: ${({ theme }) => theme.fonts.montserrat};
	text-align: left;
	width: 80%;
	margin: 0;

	font-size: 12px;
	line-height: 16px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 16px;
		line-height: 20px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 24px;
		line-height: 28px;
	}
`

export const GetStartedButton = styled.button`
	cursor: pointer;
	height: 5vh;
	font-size: 16px;
	border: none;
	border-radius: 7px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	background: ${({ theme }) => theme.colors.orange};
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.montserrat};

	width: auto;
	padding: 1rem;
`

export const StaticTitle = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	text-shadow: 0 0 1px #000;
	font-family: ${({ theme }) => theme.fonts.raleway};
	text-align: center;
	width: 70%;
	margin: 0 0 3vh 0;

	font-size: 30px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 36px;
		line-height: 36px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 48px;
		line-height: 48px;
	}
`

export const StaticSecondaryText = styled.p`
	color: ${({ theme }) => theme.colors.primaryGray};
	font-family: ${({ theme }) => theme.fonts.montserrat};
	text-align: center;
	width: 80%;
	margin: 0;

	font-size: 12px;

	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		font-size: 16px;
		line-height: 16px;
	}

	@media (min-width: ${({ theme }) => theme.device.laptop}) {
		font-size: 24px;

		line-height: 24px;
	}
`

export const SocialDiv = styled.div`
	width: 100vw;
	padding: 0 10vw;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 10vh;
	@media (min-width: ${({ theme }) => theme.device.tablet}) {
		height: 20vh;
	}
`

export const SocialIcon = styled.img`
	width: auto;
	height: 100%;
`
