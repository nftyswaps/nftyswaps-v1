const NftSwap = artifacts.require('NftSwap')
const TokenOneMinter = artifacts.require('TokenOneMinter')
const TokenTwoMinter = artifacts.require('TokenTwoMinter')
const KyleCoin = artifacts.require('Erc20Minter')

const { expect } = require('chai')

let nftOne
let nftTwo
let nftSwap
let accounts
let owner
let maker
let taker
let lister

let kyleCoin
let kyleCoinAddress

const makerID = 1
const takerID = 2

describe('Test Swap', () => {
	before(async () => {
		accounts = await web3.eth.getAccounts()

		owner = accounts[0]
		maker = accounts[1]
		taker = accounts[2]
		lister = accounts[3]
	})

	it("Deploy NFT's, Kyle Coin, and swap contract", async () => {
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
		await nftOne.mint(lister, 714);

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

describe('Test Erc-20 to NFT Swap', () => {
	before(async () => {
		accounts = await web3.eth.getAccounts()

		buyer = accounts[0]
		lister = accounts[3]
	})

	it("Deploys Correctly", async () => {
		nft = await TokenOneMinter.new();
		nftSwap = await NftSwap.new();
		kyleCoin = await KyleCoin.new();
	})

	it("Mint Lister NFT contract", async () => {
		await nft.mint(lister, 714);

		expect(await nft.ownerOf(714)).to.be.equal(lister)
	})

	it("Mints KyleCoins (ERC20) ", async () => {
		let totalCoins;

		//Since buyer lanuched, it holds the contract the intial total supply of KC (Kyle Coin);
		totalCoins = await kyleCoin.balanceOf(buyer);
		console.log("Total Kyle Coins: " + totalCoins);
		console.log(totalCoins.ToNumber());

		expect(await kyleCoin.balanceOf(buyer)).to.be.equal(714000)
	})

	it('Creates Erc20 for Nft Order', async () => {
		let res;
		res = await nftSwap.makeNftToERC20(
			lister,
			nft.address,
			714,
			kyleCoin.address,
			1470,
			{ from: buyer }
		);
		console.log(res);
	})

	// function takeNftToERC20(
	//     address Erc20Token,
	//     address NftAddress,
	//     address _to,
	//     uint256 NftId,
	//     uint256 Erc20Amount
	// ) public {

	it('Transfers the Swap', async () => {
		let res;
		res = await nftSwap.takeNftToERC20(
			kyleCoin.address,
			nft.address,
			buyer,
			714,
			1470,
			{ from: lister }
		);
		console.log(res);
	})

})
