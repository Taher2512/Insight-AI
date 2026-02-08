#!/usr/bin/env bun
/**
 * Get Sepolia Testnet USDC
 *
 * This script helps you get testnet USDC on Ethereum Sepolia for testing
 * the Insight-AI whale tracker bot.
 *
 * Usage:
 *   bun run scripts/mint-devnet-usdc.ts <your-wallet-address> [amount]
 *
 * Example:
 *   bun run scripts/mint-devnet-usdc.ts 0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18 100
 */

import { ethers } from "ethers";

// Circle's Sepolia USDC contract
const SEPOLIA_USDC_CONTRACT = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

// Minimal ERC-20 ABI for minting (testnet USDC may have a faucet function)
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function transfer(address to, uint256 amount) returns (bool)",
];

async function getSepoliaUSDC() {
  const recipientAddress = process.argv[2];
  const amount = parseFloat(process.argv[3] || "10");

  if (!recipientAddress) {
    console.error("❌ Error: Please provide a recipient wallet address");
    console.log("");
    console.log("Usage:");
    console.log(
      "  bun run scripts/mint-devnet-usdc.ts <wallet-address> [amount]",
    );
    console.log("");
    console.log("Example:");
    console.log(
      "  bun run scripts/mint-devnet-usdc.ts 0x742d35Cc...f2bD18 100",
    );
    process.exit(1);
  }

  // Validate Ethereum address
  if (!ethers.isAddress(recipientAddress)) {
    console.error("❌ Error: Invalid Ethereum address");
    process.exit(1);
  }

  console.log("🚀 Sepolia USDC Token Helper\n");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");
  console.log(
    "ℹ️  Ethereum Sepolia testnet USDC is available via Circle's faucet.",
  );
  console.log(
    "    This script checks your balance and provides faucet instructions.",
  );
  console.log("");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");

  try {
    const rpcUrl = process.env.ETHEREUM_RPC_URL || "https://rpc.sepolia.org";
    const provider = new ethers.JsonRpcProvider(rpcUrl);

    console.log("🌐 Connecting to Ethereum Sepolia...");
    const network = await provider.getNetwork();
    console.log(`   Network: ${network.name} (chainId: ${network.chainId})`);
    console.log("");

    // Check ETH balance
    console.log("💰 Checking ETH balance...");
    const ethBalance = await provider.getBalance(recipientAddress);
    console.log(`   ETH Balance: ${ethers.formatEther(ethBalance)} ETH`);
    console.log("");

    // Check USDC balance
    console.log("💵 Checking USDC balance...");
    const usdc = new ethers.Contract(
      SEPOLIA_USDC_CONTRACT,
      ERC20_ABI,
      provider,
    );
    const usdcBalance = await usdc.balanceOf(recipientAddress);
    const decimals = await usdc.decimals();
    console.log(
      `   USDC Balance: ${ethers.formatUnits(usdcBalance, decimals)} USDC`,
    );
    console.log("");

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("");
    console.log("📊 Summary:");
    console.log(`   Address: ${recipientAddress}`);
    console.log(`   Network: Ethereum Sepolia`);
    console.log(`   ETH: ${ethers.formatEther(ethBalance)}`);
    console.log(`   USDC: ${ethers.formatUnits(usdcBalance, decimals)}`);
    console.log(`   USDC Contract: ${SEPOLIA_USDC_CONTRACT}`);
    console.log("");
    console.log("🔗 View on Etherscan:");
    console.log(`   https://sepolia.etherscan.io/address/${recipientAddress}`);
    console.log("");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("");

    if (ethBalance === 0n) {
      console.log("⚠️  You need Sepolia ETH for gas fees!");
      console.log("    Get from: https://sepoliafaucet.com");
      console.log("");
    }

    if (usdcBalance === 0n) {
      console.log("⚠️  You need Sepolia USDC for AI analysis!");
      console.log("    Get from: https://faucet.circle.com");
      console.log("");
    }
  } catch (error) {
    console.error("");
    console.error("❌ Error:", error);
    console.error("");
    console.error("💡 Common issues:");
    console.error("   - Invalid wallet address");
    console.error("   - Sepolia RPC connection issues");
    console.error("   - Set ETHEREUM_RPC_URL env var for custom RPC");
    process.exit(1);
  }
}

function showHelp() {
  console.log("");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");
  console.log("🌐 How to Get Sepolia Testnet Tokens:");
  console.log("");
  console.log("1. Sepolia ETH (for gas fees):");
  console.log("   - Alchemy Faucet: https://sepoliafaucet.com");
  console.log(
    "   - Google Cloud Faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia",
  );
  console.log("   - Infura Faucet: https://www.infura.io/faucet/sepolia");
  console.log("");
  console.log("2. Sepolia USDC (for AI analysis payments):");
  console.log("   - Circle Faucet: https://faucet.circle.com");
  console.log("   - Select 'Ethereum Sepolia' network");
  console.log("   - Enter your wallet address");
  console.log("   - Receive testnet USDC instantly");
  console.log("");
  console.log("3. Transfer from Another Wallet:");
  console.log("   - If you have another wallet with Sepolia USDC");
  console.log("   - Use MetaMask or any Ethereum wallet to transfer");
  console.log("");
  console.log("4. Ask in Hackathon Discord:");
  console.log("   - ETHGlobal HackMoney Discord");
  console.log("   - Request testnet tokens in #faucet channel");
  console.log("");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");
}

// Run the script
if (process.argv[2] === "--help" || process.argv[2] === "-h") {
  showHelp();
} else {
  getSepoliaUSDC().then(() => {
    console.log("✅ Done!");
    process.exit(0);
  });
}
