# InsightAI — Ethereum Whale Tracker

> AI-powered Telegram bot that tracks whale transactions on Ethereum and delivers real-time analysis using Uniswap v4, Chainlink, ENS, and LI.FI.

Built for **ETHGlobal HackMoney 2026**.

## Hackathon Tracks

| Track | Prize | Integration |
|-------|-------|-------------|
| **Uniswap Foundation — Agentic Finance** | $5,000 | AI agent monitors Uniswap v4 pool whale swaps, analyzes Hook activity (LimitOrder, TWAMM, DynamicFee) |
| **ENS — Integrate ENS** | $3,500 pool | Resolves whale addresses to ENS names, displays identity info (avatar, Twitter, description) |
| **LI.FI — Best AI x LI.FI Smart App** | $2,000 | Cross-chain whale tracking across 6 EVM chains with route recommendations |

## Architecture

```
apps/
  backend/         Telegram bot + x402 API server (Bun + TypeScript)
  web/             Next.js dashboard (coming soon)
  docs/            Documentation

packages/
  db/              Prisma ORM + PostgreSQL schema
  ui/              Shared React components
  eslint-config/   Shared ESLint config
  typescript-config/ Shared tsconfig

scripts/
  mint-devnet-usdc.ts   Sepolia USDC balance checker
```

## Tech Stack

- **Runtime**: Bun + TypeScript
- **Monorepo**: Turborepo
- **Bot**: Telegraf (Telegram Bot API)
- **AI**: Google Gemini (gemini-1.5-flash)
- **Blockchain**: ethers.js on Ethereum Sepolia
- **Oracle**: Chainlink price feeds (ETH/USD, BTC/USD, LINK/USD)
- **DEX**: Uniswap v4 whale swap monitoring + Hooks analysis
- **Identity**: ENS name resolution + profile metadata
- **Cross-chain**: LI.FI multi-chain whale tracking
- **Payments**: x402 micropayment protocol (USDC)
- **Database**: Prisma + PostgreSQL

## Quick Start

```bash
# Install dependencies
bun install

# Set up environment variables
cp apps/backend/.env.example apps/backend/.env
# Fill in: TELEGRAM_BOT_TOKEN, DATABASE_URL, GEMINI_API_KEY, ETHEREUM_RPC_URL

# Run database migrations
cd packages/db && bunx prisma migrate dev && cd ../..

# Start the bot
cd apps/backend && bun run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `TELEGRAM_BOT_TOKEN` | Telegram Bot API token from @BotFather |
| `DATABASE_URL` | PostgreSQL connection string |
| `GEMINI_API_KEY` | Google Gemini API key |
| `ETHEREUM_RPC_URL` | Ethereum Sepolia RPC URL (e.g., Alchemy, Infura) |
| `WALLET_ENCRYPTION_KEY` | AES-256 key for wallet encryption |
| `SEPOLIA_USDC_CONTRACT` | USDC contract on Sepolia (default: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`) |

## Bot Commands

| Command | Description |
|---------|-------------|
| `/start` | Welcome message + setup instructions |
| `/wallet` | Create or view Ethereum wallet |
| `/balance` | Check ETH and USDC balance |
| `/deposit` | Get deposit instructions |
| `/track` | View 10 tracked whale addresses |
| `/alerts` | See recent whale transaction alerts |
| `/oracle` | View Chainlink oracle prices |
| `/asset` | View tracked assets with live prices |
| `/agent` | View AI agent performance dashboard |
| `/help` | Show available commands |

## How It Works

1. **Whale Monitoring**: Tracks 10 major Ethereum whale addresses for large transactions
2. **Real-time Alerts**: Sends Telegram alerts when whales move funds
3. **AI Analysis**: Click "Get AI Analysis" on any alert — the agent:
   - Fetches Chainlink oracle prices (ETH/USD)
   - Queries Uniswap v4 pool activity and Hook interactions
   - Resolves whale identity via ENS
   - Tracks cross-chain positions via LI.FI
   - Purchases premium data APIs via x402 micropayments
   - Synthesizes a comprehensive analysis report using Google Gemini

## License

MIT
