const Web3 = require('web3');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contractAddress = '0x632fd52A6E6783c5947705692E5D269cA55b8984'; // replace with your contract address
const abi=[{"constant":true,"inputs":[],"name":"totalVotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0d15fd77"},{"constant":true,"inputs":[],"name":"merkleRoot","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2eb4a7ab"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidates","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"party","type":"string"},{"name":"vote","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3477ee2e"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"voters","outputs":[{"name":"hashedPassword","type":"bytes32"},{"name":"voted","type":"bool"},{"name":"delegate","type":"address"},{"name":"candidateIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x37f91f23"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voterIds","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x812bb1c3"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"constant":true,"inputs":[],"name":"votingOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa95824b4"},{"constant":true,"inputs":[],"name":"candidateCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa9a981a3"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"usedNonces","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xfeb61724"},{"inputs":[{"name":"_names","type":"string[]"},{"name":"_parties","type":"string[]"},{"name":"_voterIds","type":"bytes32[]"},{"name":"_merkleRoot","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_voterId","type":"bytes32"},{"name":"_candidateIndex","type":"uint256"},{"name":"_proof","type":"bytes32[]"},{"name":"_nonce","type":"bytes32"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x75296de8"},{"constant":false,"inputs":[],"name":"startVoting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x1ec6b60a"},{"constant":false,"inputs":[],"name":"closeVoting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc631b292"},{"constant":true,"inputs":[],"name":"displayResult","outputs":[{"name":"","type":"string[]"},{"name":"","type":"uint256[]"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x648bcae2"}]

async function main() {
    try {
      const web3 = new Web3('HTTP://127.0.0.1:7545');
      web3.eth.net.isListening().then(() => console.log('Web3 connection established'))
        .catch(e => console.log('Web3 connection failed:', e));
      const accounts = await web3.eth.getAccounts();
    //   console.log(accounts); // prints all accounts connected to Ganache
      const contract = new web3.eth.Contract(abi, contractAddress);
      
    } catch (e) {
      console.error(e);
    }
    let voterid
    rl.question('Enter Your VoterId ', (vID) => {
        voterid = vID
        rl.close();
    });
    console.log(voterid);
      
  }
  
  main();

// Check balance


// Call contract function


