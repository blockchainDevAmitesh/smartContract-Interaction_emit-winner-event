const { ethers } = require("hardhat");
require("dotenv").config();

const main = async () => {
    // prerequisites
    const targetContractAddress = process.env.TARGET_CONTRACT_ADDRESS;
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contractAbi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_targetContractAdd",
              "type": "address"
            }
          ],
          "name": "callAtempt",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
    ];

    // creating contract instance
    const provider = new ethers.AlchemyProvider("sepolia", process.env.API_KEY);
    const wallet = new ethers.Wallet(process.env.TESTNET_PRIVATE_KEY, provider);
    const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

    // interacting with contract
    const tx = await contract.callAtempt(targetContractAddress);
    await tx.wait();
    console.log("Transaction successful:", tx.hash);
};

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });