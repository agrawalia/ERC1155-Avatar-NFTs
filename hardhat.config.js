require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: process.env.POLYGON_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    rinkeby:{
      url: "https://rinkeby.infura.io/v3/33ce689272a34018b30a3681613849e8",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
