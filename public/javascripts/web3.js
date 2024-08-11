var account_wallet;


document.getElementById('connectButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("MetaMask connected");

            // Show connected account
            const accounts = await web3.eth.getAccounts();
            console.log('Connected accounts:', accounts);
            account_wallet = accounts;

            // Enable the adminMintButton now that a wallet is connected
            document.getElementById('adminMintButton').disabled = false;
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.log('MetaMask is not installed');
    }
});


document.getElementById('adminMintButton').addEventListener('click', async () => {
    const wallet = account_wallet; // Ganti dengan address yang dituju
    const amount = 1000; // Ganti dengan jumlah yang diinginkan

    console.log("to", wallet[0]);
    console.log("Sending data:", JSON.stringify({ "wallet": wallet, "amount": amount }));


    // try {
        const response = await fetch('/mint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "wallet": wallet, "amount": amount })
        });
        const result = await response.json();
        console.log(result)
        // if (result.success) {
        //     console.log('Token minted successfully:', result.receipt);
        // } else {
        //     console.error('Minting failed:', result.error);
        // }
    // } catch (error) {
    //     console.error('Error in minting:', error);
    // }
});