# Demo currently hosted at [nftyswaps.com](https://nftyswaps.com)

_Now we're swapping NFTs_

# Run Front-End

Go into client repo

```bash
cd client
```

Install dependenices
```bash
yarn
```

Start development server
```bash
yarn run dev
```

# Run Back-End

To install dependencies
```bash
yarn
```

Next compile your contracts
```bash
truffle compile
```
*All abi's end up in the '/build/contracts' repo

Then deploy contracts on a selected network (in this case rinkbey)
```bash
truffle deploy --network rinkeby
```
*note for this part your will need your mneoice phrase from a ethereuem wallet that is conencted to the rinkeby networkd. 
You will also need an ETH node for public test nets, free nodes are aviable at https://infura.io.

Now you're all set!
