import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const ETHEREUM_RPC_URL =
  process.env.ETHEREUM_RPC_URL || "https://sepolia.infura.io/v3/demo";
const USDC_CONTRACT =
  process.env.USDC_CONTRACT_ADDRESS ||
  "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"; // Sepolia USDC

const USDC_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
];

export function getProvider(): ethers.JsonRpcProvider {
  return new ethers.JsonRpcProvider(ETHEREUM_RPC_URL);
}

export function generateWallet(): { publicKey: string; privateKey: string } {
  const wallet = ethers.Wallet.createRandom();

  return {
    publicKey: wallet.address,
    privateKey: wallet.privateKey,
  };
}

export async function getBalance(address: string): Promise<number> {
  try {
    const provider = getProvider();
    const balance = await provider.getBalance(address);
    return parseFloat(ethers.formatEther(balance));
  } catch (error) {
    console.error("Error getting balance:", error);
    throw new Error("Failed to get wallet balance");
  }
}

export async function getUSDCBalance(address: string): Promise<number> {
  try {
    const provider = getProvider();
    const usdcContract = new ethers.Contract(USDC_CONTRACT, USDC_ABI, provider);
    const balance = await usdcContract.balanceOf!(address);
    return parseFloat(ethers.formatUnits(balance, 6));
  } catch (error) {
    console.error("Error getting USDC balance:", error);
    return 0;
  }
}

export function getWalletFromPrivateKey(privateKey: string): ethers.Wallet {
  try {
    const provider = getProvider();
    return new ethers.Wallet(privateKey, provider);
  } catch (error) {
    console.error("Error creating wallet from private key:", error);
    throw new Error("Invalid private key");
  }
}

export function formatAddress(address: string): string {
  if (address.length < 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function getEtherscanUrl(address: string): string {
  const network = process.env.ETHEREUM_NETWORK || "sepolia";
  const subdomain = network === "mainnet" ? "" : `${network}.`;
  return `https://${subdomain}etherscan.io/address/${address}`;
}

export async function transferUSDC(
  senderPrivateKey: string,
  recipientAddress: string,
  amount: number,
): Promise<string> {
  try {
    const provider = getProvider();
    const wallet = new ethers.Wallet(senderPrivateKey, provider);
    const usdcContract = new ethers.Contract(USDC_CONTRACT, USDC_ABI, wallet);

    const usdcAmount = ethers.parseUnits(amount.toString(), 6);
    const tx = await usdcContract.transfer!(recipientAddress, usdcAmount);
    const receipt = await tx.wait();

    return receipt.hash;
  } catch (error) {
    console.error("Error transferring USDC:", error);
    throw new Error("Failed to transfer USDC");
  }
}
