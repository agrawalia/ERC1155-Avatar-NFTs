
# Avatar NFT - An ERC1155 token standard

Contract deployed on Polygon Mumbai Testnet [0x432E40A747633e672fB48DC0C7450998d525FfBF](https://mumbai.polygonscan.com/address/0x432e40a747633e672fb48dc0c7450998d525ffbf)

Minted NFTs are deployed on [Opensea Testnet](https://testnets.opensea.io/collection/unidentified-contract-fveu3ezdrb) 
## Features

- ERC1155 smart contract to mint and transfer Avatar NFTs in Polygon Mumbai Testnet.
- Used ethers.js library to interact with smart contracts.
- Used IPFS to upload images and metadata to upload JSON file ino IPFS.


## Installation

Clone this repository

```bash
  git clone https://github.com/agrawalia/ERC1155-Avatar-NFTs.git
  cd ERC1155-Avatar-NFTs
```
Install all dependencies

```bash
    npm install
```
Compile contracts
```bash
    npx hardhat compile
```
Deploy on Polygon Mumbai testnet
```bash
    npx hardhat run scripts/01-deploy-avatar.js --network matic
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POLYGON_URL`

`PRIVATE_KEY`

`POLYGONSCAN_API_KEY`

