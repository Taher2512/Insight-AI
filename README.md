<div align="center">

# 🐋 Insight AI

### AI-Powered Ethereum Whale Intelligence

**Autonomous Telegram bot that tracks, analyzes, and predicts whale wallet movements using x402 micropayments, Chainlink oracles, Uniswap v4 Hooks, ENS identity, and LI.FI cross-chain intelligence.**

[![ETHGlobal HackMoney 2026](https://img.shields.io/badge/ETHGlobal-HackMoney%202026-6C5CE7?style=for-the-badge)](https://ethglobal.com/events/hackmoney2026)
[![Built with Bun](https://img.shields.io/badge/Bun-1.2-f9f1e1?style=for-the-badge&logo=bun)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia-627EEA?style=for-the-badge&logo=ethereum)](https://ethereum.org)

</div>

---

## What is Insight AI?

Insight AI is an autonomous crypto intelligence agent delivered through Telegram. When a whale moves large amounts of ETH, the bot:

1. **Detects** the transaction and resolves the wallet's **ENS identity** (name, avatar, social profiles)
2. **Queries Chainlink oracles** on-chain for verified, tamper-proof ETH/USD pricing
3. **Analyzes Uniswap v4 pools** for whale swap patterns and Hook behavior (TWAMM, LimitOrder, Dynamic Fee)
4. **Scans cross-chain activity** across 6 EVM chains via **LI.FI** bridge intelligence
5. Uses **Google Gemini AI** to autonomously decide which premium APIs to purchase
6. **Pays for data via x402 micropayments** (USDC on Ethereum) — no subscriptions, pay-per-insight
7. **Synthesizes** everything into a single actionable report delivered to Telegram

The AI agent operates with full autonomy — it evaluates oracle confidence, calculates cost-benefit ratios, and only spends when the data is worth purchasing.

---

## 📹 Demo Video

[![Watch Demo](https://img.shields.io/badge/▶️_Watch-Demo_Video-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=gxOrc7xftgk)

## 🚀 Try It Now

**Telegram Bot:** [Start Chatting](https://web.telegram.org/a/#8476303612)

---

## Hackathon Tracks

| Track                         | Sponsor            | What We Built                                                                                                                                                               |
| ----------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Agentic Finance**           | Uniswap Foundation | Uniswap v4 Hook-aware whale swap analysis — the agent monitors pool activity, detects Hook usage (TWAMM, LimitOrder, Dynamic Fee), and generates autonomous trading signals |
| **Integrate ENS**             | ENS                | Full ENS identity layer — every whale address is resolved to a human-readable name with avatar, description, Twitter, and URL via mainnet ENS resolution                    |
| **Best AI x LI.FI Smart App** | LI.FI              | Cross-chain whale intelligence — tracks positions across Ethereum, Arbitrum, Optimism, Polygon, Base, and Avalanche using LI.FI bridge data and route recommendations       |

---

## Tech Stack

| Layer           | Technology                         | Purpose                                           |
| --------------- | ---------------------------------- | ------------------------------------------------- |
| **Runtime**     | Bun 1.2 + TypeScript 5.9           | Fast JS runtime with native TS                    |
| **Monorepo**    | Turborepo                          | `apps/backend`, `apps/web`, `packages/*`          |
| **Bot**         | Telegraf v4                        | Telegram Bot API framework                        |
| **AI**          | Google Gemini (`gemini-1.5-flash`) | Context analysis, autonomous decisions            |
| **Blockchain**  | ethers.js v6                       | Ethereum RPC, contract interaction                |
| **Oracle**      | Chainlink Price Feeds              | On-chain ETH/USD, BTC/USD, LINK/USD (Sepolia)     |
| **DEX**         | Uniswap v4                         | Hook-aware pool analysis, whale swap tracking     |
| **Identity**    | ENS                                | Mainnet name resolution + profile metadata        |
| **Cross-Chain** | LI.FI                              | 6-chain position tracking, bridge intelligence    |
| **Payments**    | x402 Protocol                      | USDC micropayments for premium API access         |
| **Database**    | Prisma + PostgreSQL (Neon)         | Users, wallets, alerts, payments, price snapshots |
| **Frontend**    | Next.js                            | Web dashboard (future)                            |

---

## Bot Commands

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `/start`        | Register and create your Ethereum wallet             |
| `/track`        | View tracked whale wallets with ENS names            |
| `/analyze`      | Trigger autonomous AI analysis on latest whale alert |
| `/wallet`       | Check your wallet balance (ETH + USDC)               |
| `/fund`         | Get your wallet address for depositing funds         |
| `/oracle`       | Live Chainlink price feeds — ETH, BTC, LINK          |
| `/asset [name]` | Quick price lookup via Chainlink oracle              |
| `/help`         | Show all available commands                          |

---

## How It Works

```
Whale Alert Detected
        │
        ▼
┌─── ENS Resolution ───┐
│ 0xABC... → vitalik.eth │
│ Avatar, Twitter, Bio    │
└───────────┬─────────────┘
            ▼
┌─── Chainlink Oracle ──┐
│ ETH/USD: $3,842.50     │
│ Confidence: 97.2%      │
│ Nodes: 14 reporting    │
└───────────┬────────────┘
            ▼
┌─── AI Agent (Gemini) ─────────────────────┐
│ "This $12M transfer at high volatility     │
│  warrants full analysis. Purchasing 4 APIs │
│  for 0.0051 USDC total."                  │
└───────────┬───────────────────────────────┘
            ▼
┌─── x402 Micropayments ──┐
│ → Etherscan Analysis API │
│ → Historical Patterns    │
│ → Sentiment Analysis     │
│ → Market Impact          │
│ Total: 0.0051 USDC      │
└───────────┬──────────────┘
            ▼
┌─── Multi-Source Synthesis ─────────────────┐
│ + Uniswap v4 pool health & Hook analysis   │
│ + LI.FI cross-chain positions (6 chains)   │
│ + Etherscan transaction history             │
│ + Chainlink oracle-verified USD impact      │
│ + ENS whale identity                        │
└───────────┬───────────────────────────────┘
            ▼
    📊 Report → Telegram
```

---

## Project Structure

```
insight-ai/
├── apps/
│   ├── backend/               # Core bot + services
│   │   ├── index.ts           # Telegraf bot, commands, whale monitoring
│   │   ├── x402-server.ts     # Express API server (x402 endpoints)
│   │   └── services/
│   │       ├── agent.service.ts      # AI agent orchestrator
│   │       ├── chainlink.service.ts  # Chainlink oracle integration
│   │       ├── ens.service.ts        # ENS name resolution
│   │       ├── uniswap.service.ts    # Uniswap v4 pool analysis
│   │       ├── lifi.service.ts       # LI.FI cross-chain tracking
│   │       ├── wallet.service.ts     # Ethereum wallet management
│   │       └── whale.service.ts      # Whale alert generation
│   ├── web/                   # Next.js frontend (dashboard)
│   └── docs/                  # Additional documentation
├── packages/
│   ├── db/                    # Prisma schema + migrations
│   ├── ui/                    # Shared UI components
│   ├── eslint-config/         # Shared ESLint config
│   └── typescript-config/     # Shared TS config
├── scripts/                   # Utility scripts
├── turbo.json                 # Turborepo pipeline config
└── package.json               # Root workspace config
```

---

## Key Integrations

### Chainlink Oracle (Real On-Chain)

The agent reads **live price feeds** from Chainlink contracts on Sepolia — ETH/USD, BTC/USD, LINK/USD. Every analysis includes oracle confidence scores, node counts, and staleness checks. Prices are cached for 30s and stored as snapshots in the database.

### ENS Identity (Real Resolution)

Whale addresses are resolved against **Ethereum mainnet ENS** using `provider.lookupAddress()` and `resolver.getText()`. The bot retrieves names, avatars, descriptions, Twitter handles, and URLs. A curated mapping of known whales enriches addresses that don't have public ENS names.

### Uniswap v4 Hooks Analysis

The agent monitors Uniswap v4 pools (WETH/USDC, WETH/USDT, WETH/DAI) for whale swap activity. It detects Hook usage patterns — **LimitOrder**, **TWAMM**, and **Dynamic Fee** hooks — and generates pool health assessments and autonomous trading recommendations.

### LI.FI Cross-Chain Intelligence

Tracks whale positions across **Ethereum, Arbitrum, Optimism, Polygon, Base, and Avalanche**. Analyzes bridge preferences (Stargate, Across, Hop, Connext, Celer), cross-chain volume, and movement patterns to generate bullish/bearish/neutral cross-chain signals.

### x402 Micropayments

Premium data APIs are gated behind the **x402 payment protocol**. The AI agent autonomously pays USDC for each data source it decides to query — no subscriptions, no API keys, just verifiable on-chain micropayments.

---

## License

MIT

---

<div align="center">

**Built for [ETHGlobal HackMoney 2026](https://ethglobal.com/events/hackmoney2026)**

</div>
