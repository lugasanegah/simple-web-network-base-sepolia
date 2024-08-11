const Web3 = require('web3');
const dotenv = require('dotenv');
dotenv.config();


async function mint(req, res) {
  try {
    const { to, amount } = req.body;
    const accounts = await web3.eth.getAccounts();
    const receipt = await contract.methods.mint(to, amount).send({ from: accounts[0] });
    
    // Simpan hasil ke database jika diperlukan
    // await saveToDatabase(receipt);

    res.json({ success: true, receipt });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = {
    mint
};

