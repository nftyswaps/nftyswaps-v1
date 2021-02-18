# Demo currently hosted at [nftyswaps.com](https://nftyswaps.com)

_Now we're swapping NFTs_

To install dependencies
```bash
yarn
```
In another terminal window set up your truffle environment
```bash
truffle develop
```
Next compile your contracts and migrate them to the build folder
```bash
compile | migrate
```

In a different terminal window 
```bash
cd client | yarn link-contracts | yarn dev
```

Now you're all set!
