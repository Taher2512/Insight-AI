# Getting Sepolia Testnet USDC Tokens

The Sepolia USDC contract address is: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`

## Getting Testnet Tokens

### Step 1: Get Sepolia ETH (for gas fees)

You need Sepolia ETH to pay for transaction gas fees.

**Option A: Alchemy Faucet** ⭐ RECOMMENDED

```
https://sepoliafaucet.com
```

- Sign in with Alchemy account
- Enter your wallet address
- Receive 0.5 Sepolia ETH

**Option B: Google Cloud Faucet**

```
https://cloud.google.com/application/web3/faucet/ethereum/sepolia
```

**Option C: Infura Faucet**

```
https://www.infura.io/faucet/sepolia
```

---

### Step 2: Get Sepolia USDC (for AI analysis payments) ⭐

**Circle's Official USDC Testnet Faucet:**

```
https://faucet.circle.com
```

1. Visit the Circle faucet
2. Select **Ethereum Sepolia** network
3. Enter your wallet address
4. Click "Get Testnet USDC"
5. Receive testnet USDC instantly

---

### Step 3: Check Your Balance

Run the helper script to verify your balances:

```bash
bun run scripts/mint-devnet-usdc.ts <your-wallet-address>

# Example:
bun run scripts/mint-devnet-usdc.ts 0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18
```

Or check directly on Etherscan:

```
https://sepolia.etherscan.io/address/<your-wallet-address>
```

---

## Alternative: Transfer from Another Wallet

If you have another wallet with Sepolia USDC:

```bash
# Using cast (Foundry)
cast send 0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238 \
  "transfer(address,uint256)" \
  <recipient-address> \
  100000000 \
  --rpc-url https://rpc.sepolia.org \
  --private-key <your-private-key>
```

Or use MetaMask:

1. Add Sepolia USDC token: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`
2. Click "Send"
3. Enter recipient address and amount
4. Confirm transaction

---

## Programmatic Transfer (ethers.js)

```typescript
import { ethers } from "ethers";

const SEPOLIA_USDC = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
const ERC20_ABI = [
  "function transfer(address to, uint256 amount) returns (bool)",
  "function balanceOf(address) view returns (uint256)",
];

const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");
const wallet = new ethers.Wallet("<private-key>", provider);
const usdc = new ethers.Contract(SEPOLIA_USDC, ERC20_ABI, wallet);

// Transfer 10 USDC (6 decimals)
const tx = await usdc.transfer("<recipient-address>", 10_000_000n);
await tx.wait();
console.log("Transfer complete:", tx.hash);
```

---

## Minimum Requirements for InsightAI

| Token | Minimum | Purpose                   |
| ----- | ------- | ------------------------- |
| ETH   | 0.005   | Gas fees for transactions |
| USDC  | 0.1     | ~4 AI analysis requests   |

---

## Troubleshooting

### "Insufficient funds for gas"

- You need Sepolia ETH for gas fees
- Get from: https://sepoliafaucet.com

### "Insufficient USDC balance"

- Get USDC from Circle faucet: https://faucet.circle.com
- Select Ethereum Sepolia network

### RPC Issues

- Default RPC: `https://rpc.sepolia.org`
- Set custom RPC: `ETHEREUM_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/<key>`

### Need Help?

- Ask in the ETHGlobal HackMoney Discord
- Check Etherscan for transaction status
