# [zkEthscription](): EthScription Collector

A zkGraph for saving ethscription into file.

Built using [HyperOracle](https://www.hyperoracle.io), a programmable zkOracle protocol.

# Getting Start

Test EthScription locally by these steps.

### 1. Set up environment

```sh
npm install
cp zkgraph.config.example.js zkgraph.config.js
vim zkgraph.config.js # fill private key
```

### 2. Compile && Run with specified block height

```sh
npm run compile && npm run exec -- 4940316
```

### 3. Save output as image file 

```sh
npm run collectImage -- '00bc614e...'
```

Then the images in the event are saved to the build directory.

# Technical Details

### Project Layout

- src - Core logic of zkEthscriptions.
- builds - Compiled WASM Binary file and Images.
- scripts - Some scripts for handling events, converting contentURL to hexadecimal and saving it as an image.
