const contractAddress = "0xf49fc27b1a9299d2f7ef88b8034eca88a908f520";
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "Claimed",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "claimEth",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
] 

const connectBtn = document.getElementById("connect");
const claimBtn = document.getElementById("claim");
const status = document.getElementById("status");

let signer;
let contract;

connectBtn.onclick = async () => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    status.innerText = "Wallet connected!";
  } else {
    alert("Install Metamask");
  }
};

claimBtn.onclick = async () => {
  if (!contract) return;
  try {
    const tx = await contract.claimEth();
    await tx.wait();
    status.innerText = "Claimed successfully!";
  } catch (err) {
    console.error(err);
    status.innerText = err.message;
  }
};
