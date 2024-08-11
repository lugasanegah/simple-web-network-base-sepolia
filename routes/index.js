const express = require('express');
const router = express.Router();
const { Web3 } = require('web3');
const dotenv = require('dotenv');
dotenv.config();
const contractABI = require('../build/contracts/MyToken.json'); // Import ABI dari smart contract
const contractAddress = process.env.CONTRACT_ADDRESS;
const web3 = new Web3('https://sepolia.base.org');

router.get('/', (req, res) => {
    res.render('index');
});


router.post('/mint', async (req, res) => {
    // try {
        const contract = new web3.eth.Contract(contractABI.abi, contractAddress);
        const data = req.body;

        console.log("Received data:", req.body);

        const accounts = data.wallet;
        console.log("Accounts:", accounts);

        if (!accounts[0]) {
            throw new Error("No accounts found. Make sure MetaMask is connected.");
        }

        console.log("Using account:", accounts[0]);

        const receipt = await contract.methods.mint(accounts[0], data.amount).send({ from: accounts[0] });
        console.log("Transaction receipt:", receipt);

        res.json({ success: true, receipt });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, error: error.message });
    // }
});

router.get('/mint721', (req, res) => {
    res.render('mint721');
});

module.exports = router;
