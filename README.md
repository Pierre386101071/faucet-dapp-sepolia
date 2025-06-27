# Ethereum Faucet DApp (Sepolia)

A basic faucet smart contract on Ethereum (Sepolia testnet) with a frontend in HTML/JS. Users can claim 0.01 ETH once every 24h. The contract is connected to MetaMask using ethers.js.

# Tech Stack
- Solidity (smart contract)
- Remix IDE
- ethers.js (frontend)
- Sepolia testnet
- HTML + JS

# Features
- Claim 0.01 ETH every 24h (max 1 ETH per user)
- Owner-only funding and withdrawals
- Emit event `Claimed(address, timestamp)`
- Frontend integrated with MetaMask

# Live 
You can test the dApp locally by opening `index.html` via Live Server.

# Contract address (Sepolia)
0xf49fc27b1a9299d2f7ef88b8034eca88a908f520 


# ABI

[
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

# Author
Pierre Cassagnettes – faucet for learning Web3 & DAOs
