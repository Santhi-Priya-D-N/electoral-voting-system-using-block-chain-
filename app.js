async function app() {
  const web3 = new Web3(Web3.givenProvider);
  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const contractABI = YOUR_CONTRACT_ABI;

  // Instantiate the contract object
  const contract = new web3.eth.Contract(contractABI, contractAddress);

  // Call a read-only function of the contract
  const result = await contract.methods.getSomeValue().call();
  console.log("Result:", result);

  // Send a transaction to the contract
  const accounts = await web3.eth.getAccounts();
  const tx = await contract.methods.setSomeValue(newValue).send({ from: accounts[0] });
  console.log("Transaction hash:", tx.transactionHash);
}