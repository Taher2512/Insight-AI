# Hackathon Track Integration Guide

> Personal reference doc — explains exactly how each ETHGlobal HackMoney 2026 track is integrated, what's real vs mock, and where to find every piece of code.

---

## Table of Contents

1. [Track 1: Uniswap Foundation — Agentic Finance ($5K)](#track-1-uniswap-foundation--agentic-finance-5k)
2. [Track 2: ENS — Integrate ENS ($3.5K)](#track-2-ens--integrate-ens-35k)
3. [Track 3: LI.FI — Best AI x LI.FI Smart App ($2K)](#track-3-lifi--best-ai-x-lifi-smart-app-2k)
4. [How All Three Tracks Connect](#how-all-three-tracks-connect)
5. [Data Flow Diagram](#data-flow-diagram)

---

## Track 1: Uniswap Foundation — Agentic Finance ($5K)

**Prize**: [Agentic Finance](https://ethglobal.com/events/hackmoney2026/prizes/uniswap-foundation) — Build an AI agent that interacts with Uniswap v4.

### What We Built

An AI agent that monitors Uniswap v4 pools for whale swap activity, detects which v4 Hooks are being used (LimitOrder, TWAMM, Dynamic Fee), analyzes pool health, and generates autonomous trading recommendations — all fed into the agent's decision-making loop.

### Implementation Status: **Mock Data**

The service generates realistic mock data for whale swaps, liquidity events, and Hook usage. It does NOT make real Uniswap v4 contract calls. The data structures and analysis pipeline are real — only the data source is simulated.

### Files & Code Locations

#### Primary Service: `apps/backend/services/uniswap.service.ts` (282 lines)

**Interfaces** (lines 1-45):

- `UniswapPoolData` — Pool address, token pair, fee tier, TVL, volume, Hook address/type
- `UniswapWhaleSwap` — Tx hash, pool, trader, amounts, Hook used, timestamp
- `UniswapLiquidityEvent` — LP address, pool, type (add/remove), amounts
- `UniswapAgentAnalysis` — Full analysis output: pool health, Hook analysis, swaps, recommendations

**Constants** (lines 47-75):

- `MONITORED_POOLS` — 3 pools being tracked:
  - WETH/USDC (0.3% fee, LimitOrder Hook)
  - WETH/USDT (0.05% fee, TWAMM Hook)
  - WETH/DAI (0.3% fee, DynamicFee Hook)

**Class: `UniswapV4Service`** (lines 77-270):

- `getWhaleSwaps(address, limit)` — Generates mock whale swap data with random amounts, Hook detection, and price impact calculation
- `getLiquidityEvents(poolAddress, limit)` — Generates mock LP events (add/remove)
- `analyzeWhaleUniswapActivity(address, ethPrice)` — The main analysis method:
  - Fetches whale swaps + liquidity events
  - Calculates pool health score ("excellent" / "good" / "moderate" / "poor")
  - Analyzes Hook usage patterns
  - Generates agent recommendation: `{ action: "buy" | "sell" | "hold", confidence, reasoning }`

**Singleton** (line 274-280):

- `getUniswapV4Service()` — Exported factory function

#### Where It's Used

**1. Agent Orchestrator — `apps/backend/services/agent.service.ts`**

- **Import** (line 13): `import { getUniswapV4Service } from "./uniswap.service.js"`
- **Constructor** (line ~60): `this.uniswap = getUniswapV4Service()`
- **`gatherContext()`** (lines ~120-135): Calls `uniswap.getWhaleSwaps()` to get recent whale swaps on Uniswap v4. Includes swap data + Hook info in the Gemini AI prompt for context gathering.
- **`synthesizeReport()`** (lines ~430-445): Calls `uniswap.analyzeWhaleUniswapActivity()` to get full pool health + Hook analysis. Includes `uniswapAnalysis.poolHealth`, `uniswapAnalysis.hookAnalysis`, and `uniswapAnalysis.agentRecommendation` in the final Gemini synthesis prompt.
- **Report object** (lines ~570-580): `uniswapAnalysis` is a top-level field in the `AnalysisReport` interface.

**2. Fallback Report** (lines ~610-625):
If Gemini API fails, the fallback report still references: `"Monitor Uniswap v4 pool activity for follow-up whale swaps"` and includes `uniswapAnalysis` data.

### What Judges Will See

- The `/analyze` command response mentions Uniswap v4 pool health, Hook types detected, and trading signals
- The agent logs show: `"🦄 Uniswap v4 analysis complete: excellent pool health"`
- The final analysis report includes Uniswap v4 data alongside other sources

---

## Track 2: ENS — Integrate ENS ($3.5K)

**Prize**: [Integrate ENS](https://ethglobal.com/events/hackmoney2026/prizes/ens) — Use ENS names and profiles in your application.

### What We Built

A full ENS identity layer. Every whale address throughout the entire app is resolved to a human-readable ENS name with profile metadata (avatar, description, Twitter, URL). This provides identity context for whale analysis.

### Implementation Status: **Hybrid (Mock Mapping + Real ENS Resolution)**

- **Mock part**: `KNOWN_WHALE_ENS` — a hardcoded mapping of 10 whale addresses to custom `.eth` names (e.g., `zaincollier.eth`). These are NOT real ENS registrations, just display names.
- **Real part**: If an address is NOT in the known mapping, the service makes **real ENS resolution calls** against Ethereum mainnet via `provider.lookupAddress()` + `resolver.getText()`. This is live on-chain reverse resolution.

### Files & Code Locations

#### Primary Service: `apps/backend/services/ens.service.ts` (165 lines)

**Interface** (lines 1-10):

- `ENSProfile` — `{ address, ensName, avatar, description, twitter, url }`

**Constants** (lines 12-35):

- `KNOWN_WHALE_ENS` — Map of 10 addresses → custom ENS names:
  ```
  0x28C6c0... → zaincollier.eth
  0x21a31E... → rogeliodudley.eth
  0xDFd588... → zain-whale.eth
  ... (7 more)
  ```
- `CACHE_DURATION` — 5 minutes (300,000ms)

**Class: `ENSService`** (lines 37-155):

- **Constructor**: Creates an ethers.js `JsonRpcProvider` connected to **Ethereum mainnet** for real ENS resolution
- `resolveAddress(address)` — The main method:
  1. Checks cache first
  2. Checks `KNOWN_WHALE_ENS` mapping → returns custom profile
  3. Falls back to **real ENS**: `provider.lookupAddress(address)` for reverse resolution
  4. If ENS name found, gets resolver and calls `resolver.getText("avatar")`, `resolver.getText("description")`, `resolver.getText("com.twitter")`, `resolver.getText("url")`
  5. Caches result for 5 minutes
- `resolveENSName(ensName)` — Forward resolution: ENS name → address via `provider.resolveName()`
- `formatAddressWithENS(address)` — Returns `"ensName (0xABC...1234)"` or just truncated address
- `getWhaleIdentity(address)` — Returns formatted identity string with ENS name + profile details

**Singleton** (line 157-163):

- `getENSService()` — Exported factory function

#### Where It's Used (This Track Has the MOST Integration Points)

**1. Telegram Bot — `apps/backend/index.ts`**

- **Import** (line 19): `import { getENSService } from "./services/ens.service.js"`
- **`/track` command** (lines ~350-400): For each of the 10 tracked whale addresses, calls `ensService.resolveAddress(address)` to display whales with their ENS names:
  ```
  🐋 1. zaincollier.eth
     └ 0x28C6...c06C
  ```
- **Whale alert handler** (in `startWhaleMonitoring()`, lines ~700-750): When a whale alert fires, resolves the whale's ENS name before sending the alert to users:
  ```
  🐋 WHALE ALERT!
  Wallet: zaincollier.eth (0x28C6...c06C)
  ```

**2. Agent Orchestrator — `apps/backend/services/agent.service.ts`**

- **Import** (line 11): `import { getENSService } from "./ens.service.js"`
- **Constructor** (line ~55): `this.ens = getENSService()`
- **`gatherContext()`** (lines ~98-102): First thing the agent does — resolves ENS identity for the whale address. Includes ENS name in the Gemini prompt.
- **`synthesizeReport()`** (lines ~460-462): Resolves ENS profile again and includes it in the final prompt:
  ```
  WHALE TRANSACTION:
  - Address: 0x28C6...
  - ENS: zaincollier.eth
  ```
- **Report object** (line ~575): `ensProfile` is a top-level field: `ensProfile: ensProfile.ensName ? ensProfile : undefined`

**3. x402 API Server — `apps/backend/x402-server.ts`**

- **Import** (line ~8): `import { getENSService } from "./services/ens.service.js"`
- **`/api/x402/etherscan-analysis` endpoint** (lines ~50-100): Resolves ENS identity for the queried address and includes it in the API response. The `handleEtherscanAnalysis` function calls `ensService.resolveAddress(address)`.

### What Judges Will See

- Every whale address in the bot shows an ENS name (either from the custom mapping or real resolution)
- The `/track` command displays all 10 whales with `.eth` names
- Whale alerts include the ENS identity
- The AI analysis report references the whale's ENS name
- The x402 API response includes ENS profile data

---

## Track 3: LI.FI — Best AI x LI.FI Smart App ($2K)

**Prize**: [Best AI x LI.FI Smart App](https://ethglobal.com/events/hackmoney2026/prizes/li-fi) — Build an AI app that uses LI.FI for cross-chain intelligence.

### What We Built

Cross-chain whale intelligence. The AI agent tracks whale positions across 6 EVM chains, analyzes bridge usage preferences, monitors cross-chain fund flows, and generates bullish/bearish/neutral signals based on where whales are moving capital.

### Implementation Status: **Mock Data**

The service has the LI.FI API base URL (`https://li.quest/v1`) configured but generates mock data for positions, movements, and route recommendations. The analysis pipeline, chain/bridge definitions, and signal generation logic are all real.

### Files & Code Locations

#### Primary Service: `apps/backend/services/lifi.service.ts` (357 lines)

**Interfaces** (lines 1-50):

- `CrossChainMovement` — Source/dest chain, bridge, amount, token, timestamp, status
- `CrossChainPosition` — Chain name/id, token balance arrays, total value
- `LiFiRoute` — From/to chain, bridge, estimated time, fee, token, amount
- `CrossChainWhaleAnalysis` — Full output: active chains, total volume, positions, movements, agent insight

**Constants** (lines 52-85):

- `SUPPORTED_CHAINS` — 6 EVM chains: Ethereum (1), Arbitrum (42161), Optimism (10), Polygon (137), Base (8453), Avalanche (43114)
- `BRIDGES` — 6 bridges: Stargate, Across, Hop, Connext, Celer, Multichain

**Class: `LiFiService`** (lines 87-345):

- `apiBase` — Set to `"https://li.quest/v1"` (for future real API integration)
- `getCrossChainPositions(address)` — Generates mock positions on 3-6 random chains with token balances (ETH, USDC, USDT, WBTC, DAI, LINK, UNI, AAVE)
- `getCrossChainMovements(address, limit)` — Generates mock bridge movements between random chains using random bridges
- `getRouteRecommendation(fromChain, toChain, amount, token)` — Generates mock LI.FI route recommendation with estimated time, fee, and bridge selection
- `analyzeCrossChainActivity(address, ethPrice)` — The main analysis method:
  - Fetches positions + movements
  - Calculates total cross-chain volume
  - Determines preferred bridges and chains
  - Generates `agentInsight`:
    - `crossChainSignal`: "bullish" / "bearish" / "neutral"
    - `pattern`: e.g., "Accumulating on L2s — bullish long-term signal"
    - `reasoning`: Detailed explanation
    - `preferredBridges` / `preferredChains`: Top picks

**Singleton** (line 349-355):

- `getLiFiService()` — Exported factory function

#### Where It's Used

**1. Agent Orchestrator — `apps/backend/services/agent.service.ts`**

- **Import** (line 14): `import { getLiFiService } from "./lifi.service.js"`
- **Constructor** (line ~62): `this.lifi = getLiFiService()`
- **`gatherContext()`** (lines ~137-150): Calls `lifi.getCrossChainPositions()` to see which chains the whale is active on, and `lifi.getCrossChainMovements()` for recent bridge activity. Includes this in the Gemini context prompt.
- **`synthesizeReport()`** (lines ~448-458): Calls `lifi.analyzeCrossChainActivity()` for full cross-chain analysis. Includes in the Gemini synthesis prompt:
  ```
  CROSS-CHAIN ANALYSIS (LI.FI):
  - Active on 5 chains
  - Cross-chain volume: $12.4M
  - Signal: bullish
  - Pattern: Accumulating on L2s
  ```
- **Report object** (lines ~577-578): `crossChainAnalysis` is a top-level field in the `AnalysisReport`.

**2. Fallback Report** (lines ~615-620):
If Gemini fails: `"Check LI.FI cross-chain movements for exit signals"` and includes `crossChainAnalysis` data.

### What Judges Will See

- The agent analysis report includes cross-chain intelligence (which chains, bridge usage, volume)
- Cross-chain signals (bullish/bearish/neutral) with reasoning
- The agent logs show: `"🌉 LI.FI cross-chain analysis: bullish"`
- LI.FI data is used alongside Uniswap and ENS data in the synthesis prompt

---

## How All Three Tracks Connect

All three tracks converge in `apps/backend/services/agent.service.ts` — the AI agent orchestrator. Here's the exact flow:

### 1. `analyze()` — Entry Point (line ~640)

```typescript
async analyze(): Promise<{ report: AnalysisReport; logs: string[] }>
```

Called when a user clicks "Get AI Analysis" on a whale alert.

### 2. `gatherContext()` — Multi-Source Intelligence (lines ~95-155)

This is where all three tracks are queried:

```
Step 1: ENS Resolution
  └─ ens.resolveAddress(whaleAddress)
  └─ Gets: ensName, avatar, twitter, description, url

Step 2: Chainlink Oracle (supporting infra, not a track)
  └─ chainlink.getEthPrice()
  └─ Gets: price, confidence, oracleCount, staleness

Step 3: Uniswap v4 Analysis
  └─ uniswap.getWhaleSwaps(whaleAddress)
  └─ Gets: recent swaps, Hook types used, price impacts

Step 4: LI.FI Cross-Chain
  └─ lifi.getCrossChainPositions(whaleAddress)
  └─ lifi.getCrossChainMovements(whaleAddress)
  └─ Gets: chain positions, bridge movements, volumes

Step 5: Build Gemini Prompt
  └─ Combines all data into a single context string
```

### 3. `decideAPIsToCall()` — Oracle-Informed AI Decision (lines ~200-320)

The agent sends the gathered context (including all track data) to Gemini and asks: **"Which premium x402 APIs should I purchase?"** The AI evaluates the whale activity seen on Uniswap, the cross-chain movements from LI.FI, and the ENS identity to decide.

### 4. `purchaseAPI()` — x402 Micropayments (lines ~330-410)

For each API the agent decides to buy, it sends USDC on Ethereum via `transferUSDC()` and calls the x402 API server.

### 5. `synthesizeReport()` — Final Synthesis (lines ~415-635)

All three tracks are queried AGAIN for the final report:

```
Re-query: uniswap.analyzeWhaleUniswapActivity()  → poolHealth, hookAnalysis, agentRecommendation
Re-query: lifi.analyzeCrossChainActivity()        → crossChainSignal, pattern, preferredBridges
Re-query: ens.resolveAddress()                    → ensProfile for the report

All fed into final Gemini prompt → AnalysisReport
```

### The AnalysisReport Object

```typescript
interface AnalysisReport {
  executiveSummary: string;         // References all 3 tracks
  recommendations: string[];
  riskScore: number;
  confidenceScore: number;
  tradingSignals: string[];

  // Track data (all optional — included when available)
  uniswapAnalysis?: UniswapAgentAnalysis;   // Track 1
  ensProfile?: ENSProfile;                   // Track 2
  crossChainAnalysis?: CrossChainWhaleAnalysis; // Track 3

  // Supporting data
  oracleData?: { ... };             // Chainlink
  etherscanAnalysis?: { ... };      // x402 purchased
  costBreakdown: { ... };           // x402 payment receipts
}
```

---

## Data Flow Diagram

```
User clicks "Get AI Analysis"
           │
           ▼
    ┌─── analyze() ───┐
    │                  │
    ▼                  │
gatherContext()        │
    │                  │
    ├─► ENS ──────────►│  "zaincollier.eth"
    ├─► Chainlink ────►│  "$3,842 @ 97% confidence"
    ├─► Uniswap v4 ──►│  "3 whale swaps, LimitOrder Hook"
    ├─► LI.FI ────────►│  "Active on 5 chains, $12M volume"
    │                  │
    ▼                  │
decideAPIsToCall()     │  ← Gemini decides which APIs to buy
    │                  │
    ▼                  │
purchaseAPI() x N      │  ← USDC payments on Ethereum
    │                  │
    ▼                  │
synthesizeReport()     │
    │                  │
    ├─► Uniswap v4 ──►│  Pool health + Hook analysis + recommendation
    ├─► LI.FI ────────►│  Cross-chain signal + bridge preferences
    ├─► ENS ──────────►│  Whale identity for report
    ├─► Gemini AI ────►│  Final synthesis
    │                  │
    ▼                  │
 AnalysisReport ◄──────┘
    │
    ▼
 Telegram Message
```

---

## Summary Table

| Track      | Service File                    | Lines | Status                                  | Used In                                          | Key Methods                                               |
| ---------- | ------------------------------- | ----- | --------------------------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| Uniswap v4 | `services/uniswap.service.ts`   | 282   | Mock                                    | `agent.service.ts`                               | `getWhaleSwaps()`, `analyzeWhaleUniswapActivity()`        |
| ENS        | `services/ens.service.ts`       | 165   | Hybrid (mock mapping + real resolution) | `index.ts`, `agent.service.ts`, `x402-server.ts` | `resolveAddress()`, `formatAddressWithENS()`              |
| LI.FI      | `services/lifi.service.ts`      | 357   | Mock                                    | `agent.service.ts`                               | `getCrossChainPositions()`, `analyzeCrossChainActivity()` |
| Chainlink  | `services/chainlink.service.ts` | 256   | **Real on-chain**                       | `index.ts`, `agent.service.ts`, `x402-server.ts` | `getEthPrice()`, `getAllPrices()`                         |
