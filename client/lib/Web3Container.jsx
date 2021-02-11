import React, { useState, useEffect, useRef } from 'react'
import getWeb3 from './getWeb3'
import getContract from './getContract'
import contractDefinition from './contracts/SimpleStorage.json'

export default class Web3Container extends React.Component {
	state = { web3: null, accounts: null, contract: null }

	async componentDidMount() {
		try {
			const web3 = await getWeb3()
			const accounts = await web3.eth.getAccounts()
			const contract = await getContract(web3, contractDefinition)
			this.setState({ web3, accounts, contract })
		} catch (error) {
			alert(
				`Failed to load web3, accounts, or contract. Check console for details.`
			)
			console.log(error)
		}
	}
	render() {
		const { web3, accounts, contract } = this.state
		return web3 && accounts
			? this.props.render({ web3, accounts, contract })
			: this.props.renderLoading()
	}
}

// const Web3Container = () => {
// 	const [web3, setWeb3] = useState(null)
// 	const [accounts, setAccounts] = useState(null)
// 	const [contract, setContract] = useState(null)

// 	const getWeb3async = async () => {
// 		return await getWeb3()
// 	}

// 	const getAccountsAsync = async (web3) => {
// 		return await web3.eth.getAccounts()
// 	}

// 	const getContractAsync = async (web3, contractDefinition) => {
// 		return await getContract(web3, contractDefinition)
// 	}

// 	async function getWeb3Infos() {
// 		try {
// 			const web3tmp = await getWeb3()
// 			console.log(web3tmp)
// 			// if (web3) {
// 			// 	setAccounts(getAccountsAsync(web3))
// 			// 	setContract(getContractAsync(web3, contractDefinition))
// 			// }
// 		} catch (error) {
// 			alert(
// 				`Failed to load web3, accounts, or contract. Check console for details.`
// 			)
// 			console.log(error)
// 		}
// 	}

// 	if (web3 == null) {
// 		getWeb3Infos()
// 	}

// 	// console.log(web3)
// 	// console.log(accounts)
// 	return (
// 		<Web3Container web3={web3} accounts={accounts}>
// 			<Component web3={web3} accounts={accounts} />
// 		</Web3Container>
// 	)
// }
// export default Web3Container
