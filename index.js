// const { Connection, PublicKey } = solanaWeb3;

// function submitForm() {
//   let solanaPublicKey = document.getElementById("inputText").value;
//   let airdropAmount = document.getElementById("airdropAmount").value;
//   let lamports = airdropAmount * 1e9;

//   const connection = new Connection("https://api.devnet.solana.com");

//   var publicKeyObject = new PublicKey(solanaPublicKey);

//   const fn = async () => {
//     let txhash = await connection.requestAirdrop(publicKeyObject, lamports);
//     console.log(`txhash: ${txhash}`);

//     const inputText = document.getElementById("inputText").value;
//     alert( "You transferred: " + airdropAmount + " SOL to this wallet " + inputText);
//   };

//   fn();
// }



