const hre = require("hardhat");

async function main() {
  const [sender] = await hre.ethers.getSigners();
  
  // Replace with your MetaMask address
  const receiverAddress = "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097";
  
  // Amount to send (in ether)
  const amountInEther = "1000";

  const tx = await sender.sendTransaction({
    to: receiverAddress,
    value: hre.ethers.utils.parseEther(amountInEther)
  });

  console.log(`Transferred ${amountInEther} ETH to ${receiverAddress}`);
  console.log(`Transaction hash: ${tx.hash}`);

  await tx.wait();
  console.log("Transaction confirmed");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
