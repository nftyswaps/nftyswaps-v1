module.exports = {
	networks: {
		development: {
			host: 'localhost',
			port: 8545,
			network_id: '*', // Match any network id
		},
		rinkeby: {
			host: 'localhost', // Connect to geth on the specified
			port: 8545,
			from: '0x0085f8e72391Ce4BB5ce47541C846d059399fA6c', // default address to use for any transaction Truffle makes during migrations
			network_id: 4,
			gas: 4612388, // Gas limit used for deploys
		},
	},
	solc: {
		version: '0.5.16',
		// Turns on the Solidity optimizer. For development the optimizer's
		// quite helpful, just remember to be careful, and potentially turn it
		// off, for live deployment and/or audit time. For more information,
		// see the Truffle 4.0.0 release notes.
		//
		// https://github.com/trufflesuite/truffle/releases/tag/v4.0.0
		optimizer: {
			enabled: true,
			runs: 200,
		},
	},
}
