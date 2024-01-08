require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    localhost: {
      url: process.env.LOCAL_ENDPOINT,
      accounts: [
        process.env.KEY,
      ],
    },
    sepolia: {
      url: process.env.SEPOLIA_ENDPOINT,
      accounts: [process.env.KEY],
    },
    mainnet: {
      url: process.env.MAINNET_ENDPOINT,
      accounts: [process.env.MAINNET_KEY],
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN,
    },
  },
};
