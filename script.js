let mnemo = '';
let wallets = [];

document.getElementById('generateMnemonic').addEventListener('click', () => {

    mnemo = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
    document.getElementById('mnemonicDisplay').innerText = mnemo;
});

document.getElementById('addWallet').addEventListener('click', () => {
    if (!mnemo) {
        alert('Please generate a mnemo first');
        return;
    }
    const walletindex=wallets.length
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemo);
    const wallet = hdNode.derivePath(`m/44'/60'/0'/0/${walletindex}`);
    wallets.push(wallet)

    document.getElementById("walletList").innerText=""
    
    wallets.forEach((wallet,index)=>{
        const Walletinfo=document.createElement("p")
        Walletinfo.textContent=`wallet${index+1}:  ${wallet.publicKey}`
        document.getElementById('walletList').appendChild(Walletinfo)
        })
});

