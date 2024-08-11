const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    networks: {
        baseSepolia: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://sepolia.base.org`),
            network_id: 84532,
            gas: 4500000,
            gasPrice: 10000000000,
        },
    },
    compilers: {
        solc: {
            version: "^0.8.0"
        }
    }
};
