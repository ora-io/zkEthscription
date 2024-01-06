# [zkEthscription](): Ethscription Indexer with ZK

A Ethscription indexer to access and preview Ethscription token from Ethereum.

Built using [HyperOracle](https://www.hyperoracle.io), a programmable zkOracle protocol.

## Getting Start

Test zkEthscription locally by these steps:

### 1. Set up environment

```sh
npm install
cp zkgraph.config.example.js zkgraph.config.js
vim zkgraph.config.js # fill private key
```

### 2. Compile & execute with specified block height

```sh
npm run compile && npm run exec -- 4940316
```

### 3. Preview output as image

```sh
npm run collectImage -- '00bc614e...'
```

Then the images in the event of zkEthscription are saved to the `build` directory.

## Technical Details

### Project Layout

- src - Core logic of zkEthscriptions.
- builds - Compiled WASM Binary file and Images.
- scripts - Scripts for handling events, converting contentURL to hexadecimal and saving it as an image.

### Use Cases

- Index Ethscription assets with verifiable zk proof
- Map Ethscriptions assets to other networks trustlessly
