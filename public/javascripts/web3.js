document.getElementById('connectButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("MetaMask connected");

            // Optional: Show connected account
            const accounts = await web3.eth.getAccounts();
            console.log('Connected accounts:', accounts);
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.log('MetaMask is not installed');
    }
});
