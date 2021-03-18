import '../global/globalStyles/globals.css'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { UseWalletProvider } from 'use-wallet'
import Banner from '../components/Banner'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'https://api.thegraph.com/subgraphs/name/mauricechristopher/nftyswaps',
})

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
		orange: '#f6851b',
		white: '#f2f2f2',
		primaryGray: '#333333',
		secondaryGray: '#222222',
		tertiaryGray: '#444444',
		linkBlue: '#3399ff',
		pink: '#ff3366',
		blue: '#3399ff',
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
					content='Swap your digital assets in a simple, decentralized, peer to peer manner.'
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
				<ApolloProvider client={client}>
					<ThemeProvider theme={theme}>
						<Banner />
						<Component {...pageProps} />
					</ThemeProvider>
				</ApolloProvider>
			</UseWalletProvider>
		</>
	)
}

export default MyApp
