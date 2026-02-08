# InsightAI Backend

Telegram bot + x402 API server for the Ethereum Whale Tracker.

## Services

| Service | File | Description |
|---------|------|-------------|
| **Whale Tracking** | `whale.service.ts` | Monitors 10 Ethereum whale addresses, generates mock alerts |
| **AI Agent** | `agent.service.ts` | Autonomous agent that gathers context, purchases APIs, synthesizes reports |
| **Chainlink Oracle** | `chainlink.service.ts` | Fetches ETH/USD, BTC/USD, LINK/USD prices via Chainlink price feeds |
| **ENS Resolution** | `ens.service.ts` | Resolves whale addresses to ENS names + profile metadata |
| **Uniswap v4** | `uniswap.service.ts` | Monitors whale swaps on Uniswap v4 pools with Hook analysis |
| **LI.FI Cross-chain** | `lifi.service.ts` | Multi-chain whale position tracking across 6 EVM chains |
| **Wallet** | `wallet.service.ts` | Ethereum wallet creation, balance checks, USDC transfers |
| **Etherscan History** | `etherscan.service.ts` | Historical transaction analysis via Etherscan API |
| **x402 Server** | `x402-server.ts` | Express API server with x402 micropayment endpoints |

## Running

```bash
bun install
bun run dev     # Watch mode
bun run start   # Production
```

## Stack

- Bun + TypeScript
- Telegraf (Telegram)
- ethers.js (Ethereum)
- Google Gemini AI
- Express.js (x402 API)
- Prisma (database)
