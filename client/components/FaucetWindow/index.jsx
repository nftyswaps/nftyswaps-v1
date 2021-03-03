import React from 'react'

import useIsLoggedIn from '../../hooks/useIsLoggedIn'
import { SingleWindowWrapper } from '../../global/globalStyles/SingleWindowStyles'
import {
	FaucetWrapper,
	InnerFaucetWrapper,
	MintButton,
	FaucetTitle,
	InputWithButtonWrapper,
	FaucetInput,
} from './Styles/FaucetWindowStyles'
import WelcomeBox from '../SearchWindow/WelcomeBox'
import { useWallet } from 'use-wallet'
import getContracts from '../../hooks/getContracts'
import useInputChange from '../../hooks/useInputChange'

const FaucetWindow = () => {
	const wallet = useWallet()
	const isLoggedIn = useIsLoggedIn()
	const contracts = getContracts()
	const [input, handleInputChange] = useInputChange()

	console.log(contracts)
	const mintTokenA = async () => {
		const aResult = await contracts.TokenOneMinter.methods
			.mint(wallet.account, input.TokenOneMinter)
			.send({ from: wallet.account })

		if (aResult.transactionHash)
			alert('your transaction hash is: ' + aResult.transactionHash)
		else alert(aResult.message)
	}
	const mintTokenB = async () => {
		console.log(
			await contracts.TokenTwoMinter.methods
				.mint(wallet.account, input.TokenTwoMinter)
				.send({ from: wallet.account })
		)
	}

	return (
		<SingleWindowWrapper>
			{isLoggedIn === 'connected' ? (
				<FaucetWrapper>
					<FaucetTitle>Faucet</FaucetTitle>
					<InnerFaucetWrapper>
						<InputWithButtonWrapper>
							<FaucetInput
								onChange={handleInputChange}
								name='TokenOneMinter'
							/>
							<MintButton onClick={mintTokenA}>
								Mint Token A
							</MintButton>
						</InputWithButtonWrapper>

						<InputWithButtonWrapper>
							<FaucetInput
								onChange={handleInputChange}
								name='TokenTwoMinter'
							/>
							<MintButton onClick={mintTokenB}>
								Mint Token B
							</MintButton>
						</InputWithButtonWrapper>
					</InnerFaucetWrapper>

					{/* <Checks /> */}
				</FaucetWrapper>
			) : (
				<WelcomeBox />
			)}
		</SingleWindowWrapper>
	)
}

export default FaucetWindow

// const Checks = async () => {
// 	const numberOfTokens = await contracts.TokenTwoMinter.methods.balanceOf(
// 		wallet.account
// 	)
// 	console.log(numberOfTokens)
// 	return (
// 		<div>
// 			{numberOfTokens.map(async (token) => (
// 				<h1>
// 					{
// 						await contracts.TokenTwoMinter.methods.tokenOfOwnerByIndex(
// 							wallet.account,
// 							i
// 						)
// 					}
// 				</h1>
// 			))}
// 		</div>
// 	)
// console.log(tokens)
// console.log(
// 	await contracts.TokenTwoMinter.methods
// 		.tokenOfOwnerByIndex(wallet.account, 0)
// 		.call()
// )
// }
