import '../globalStyles/globals.css'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { UseWalletProvider } from 'use-wallet'
import Banner from '../components/Banner'

const theme = {
	device: {
		mobileS: '320px',
		mobileM: '375px',
		mobileL: '425px',
		tablet: '768px',
		laptop: '1025px',
		laptopL: '1440px',
		desktop: '2560px',
	},
	colors: {
		orange: '#F6851B',
		white: '#F2F2F2',
		primaryGray: '#333333',
		secondaryGray: '#222222',
		tertiaryGray: '#444444',
		linkBlue: '#3399FF',
	},
	fonts: {
		raleway: 'Raleway, sans-serif',
		montserrat: 'Montserrat, sans-serif',
	},
}

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>NftySwaps</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
				/>
				<meta
					name='description'
					content='An open source, decentralized platform for trading digital assets.'
				></meta>
				<link
					rel='shortcut icon'
					href='https://i.ibb.co/2hw3KpR/swap-icon-png-0.png'
				/>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:wght@300&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<UseWalletProvider chainId={4}>
				<ThemeProvider theme={theme}>
					<Banner />
					<Component {...pageProps} />
				</ThemeProvider>
			</UseWalletProvider>
		</>
	)
}

export default MyApp
