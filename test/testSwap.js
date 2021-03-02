const NftSwap = artifacts.require('NftSwap')
const TokenOneMinter = artifacts.require('TokenOneMinter')
const TokenTwoMinter = artifacts.require('TokenTwoMinter')

const { expect } = require('chai')

let nftOne
let nftTwo
let nftSwap
let accounts
let owner
let maker
let taker

const makerID = 1
const takerID = 2

describe('Test Swap', () => {
	before(async () => {
		accounts = await web3.eth.getAccounts()

		owner = accounts[0]
		maker = accounts[1]
		taker = accounts[2]
	})

	it("Deploy NFT's and swap contract", async () => {
		nftSwap = await NftSwap.new()
		nftOne = await TokenOneMinter.new()
		nftTwo = await TokenTwoMinter.new()

		expect(nftSwap.address).not.to.be.null
		expect(nftOne.address).not.to.be.null
		expect(nftTwo.address).not.to.be.null
	})

	it("Mint NFT's in both NFT contracts", async () => {
		await nftOne.mint(maker, makerID)
		await nftTwo.mint(taker, takerID)

		expect(await nftOne.ownerOf(makerID)).to.be.equal(maker)
		expect(await nftTwo.ownerOf(takerID)).to.be.equal(taker)
	})

	it('Maker approves swap contract', async () => {
		await nftOne.approve(nftSwap.address, makerID, { from: maker })

		expect(await nftOne.getApproved(makerID)).to.be.equal(nftSwap.address)
	})

	it('Maker creates Order', async () => {
		await nftSwap.makeOrder(
			nftOne.address,
			makerID,
			nftTwo.address,
			takerID,
			{ from: maker }
		)

		expect(
			await nftSwap.validRecipient(
				nftOne.address,
				makerID,
				nftTwo.address,
				takerID
			)
		).to.be.true
	})

	it('Taker approves swap contract', async () => {
		await nftTwo.approve(nftSwap.address, takerID, { from: taker })

		expect(await nftTwo.getApproved(takerID)).to.be.equal(nftSwap.address)
	})

	it('Taker swaps', async () => {
		expect(await nftOne.ownerOf(makerID)).to.be.equal(maker)
		expect(await nftTwo.ownerOf(takerID)).to.be.equal(taker)

		await nftSwap.takeOrder(
			nftOne.address,
			makerID,
			nftTwo.address,
			takerID,
			{ from: taker }
		)

		expect(await nftOne.ownerOf(makerID)).to.be.equal(taker)
		expect(await nftTwo.ownerOf(takerID)).to.be.equal(maker)
	})

	it('Cannot reswap an already taken swap', async () => {
		expect(await nftOne.ownerOf(makerID)).to.be.equal(taker)
		expect(await nftTwo.ownerOf(takerID)).to.be.equal(maker)

		await nftSwap.takeOrder(
			nftOne.address,
			makerID,
			nftTwo.address,
			takerID,
			{ from: taker }
		)
	})
})
