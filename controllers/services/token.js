const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();
const contractABI = require('../build/contract/MyToken.json'); // Import ABI dari smart contract
const contractAddress = process.env.CONTRACT_ADDRESS;

// Koneksi ke Sepolia Network melalui Infura
const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.base.org`));

// Membuat instance contract
const contract = new web3.eth.Contract(contractABI, contractAddress);


