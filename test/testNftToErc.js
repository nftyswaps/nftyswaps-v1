// const NftToErcSwap = artifacts.require('NftToErcSwap')
// const TokenOneMinter = artifacts.require('TokenOneMinter')
// const KyleCoin = artifacts.require('Erc20Minter')

// const { expect } = require('chai')

// let nftSwap
// let accounts
// let lister
// let buyer
// let nft

// let kyleCoin

// describe('Test Erc-20 to NFT Swap', () => {
//     before(async () => {
//         accounts = await web3.eth.getAccounts()

//         buyer = accounts[0]
//         lister = accounts[3]
//     })

//     it("Deploys Correctly", async () => {
//         nft = await TokenOneMinter.new();
//         nftSwap = await NftToErcSwap.new();
//         kyleCoin = await KyleCoin.new();
//     })

//     it("Mint Lister NFT contract", async () => {
//         await nft.mint(lister, 714);

//         expect(await nft.ownerOf(714)).to.be.equal(lister)
//     })

//     it("Mints KyleCoins (ERC20) ", async () => {
//         let totalCoins;

//         //Since buyer lanuched, it holds the contract the intial total supply of KC (Kyle Coin);
//         totalCoins = await kyleCoin.balanceOf(buyer);
//         console.log("Total Kyle Coins: " + totalCoins);

//         // expect(await kyleCoin.balanceOf(buyer)).to.be.equal(714000)
//     })


//     it('Lister approves swap contract', async () => {
//         await nft.approve(nftSwap.address, 714, { from: lister })
//     })

//     it('Buyer approves ERC20 transfer amoont', async () => {
//         await kyleCoin.approve(nftSwap.address, 2000);

//     })

//     it('Creates Erc20 for Nft Order', async () => {
//         let res;
//         res = await nftSwap.makeNftToERC20(
//             lister,
//             nft.address,
//             714,
//             kyleCoin.address,
//             1470,
//             { from: buyer }
//         );
//     })

//     it('Transfers the Swap', async () => {
//         let res;
//         res = await nftSwap.takeNftToERC20(
//             kyleCoin.address,
//             nft.address,
//             buyer,
//             714,
//             170,
//             { from: lister }
//         );
//         console.log(res);
//     })

// })
