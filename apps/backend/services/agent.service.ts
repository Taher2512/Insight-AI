import { GoogleGenAI } from "@google/genai";
import { ethers } from "ethers";
import { prismaClient as prisma } from "db/client";
import { decryptPrivateKey } from "../utils/crypto.js";
import { getWalletFromPrivateKey, transferUSDC } from "../utils/ethereum.js";
import { getChainlinkService } from "./chainlink.service.js";
import type { OraclePriceData } from "./chainlink.service.js";
import { getENSService } from "./ens.service.js";
import { getUniswapV4Service } from "./uniswap.service.js";
import { getLiFiService } from "./lifi.service.js";
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY || "";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-1.5-flash";
const ETHEREUM_RPC =
  process.env.ETHEREUM_RPC_URL || "https://sepolia.infura.io/v3/demo";
const X402_API_BASE = `http://localhost:${process.env.X402_API_PORT || 3001}/api/x402`;
const AGENT_SERVICE_FEE = parseFloat(process.env.AGENT_SERVICE_FEE || "0.02");
const SECRET_KEY = process.env.SECRET_KEY || "";
const USDC_CONTRACT =
  process.env.USDC_CONTRACT_ADDRESS ||
  "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"; // Sepolia USDC

interface APIOption {
  endpoint: string;
  price: number;
  description: string;
  value: "high" | "medium" | "low";
}

interface AnalysisReport {
  executiveSummary: string;
  etherscanAnalysis?: any;
  patterns?: any;
  sentiment?: any;
  marketImpact?: any;
  uniswapAnalysis?: any;
  crossChainAnalysis?: any;
  ensProfile?: any;
  recommendations: string[];
  riskScore: number;
  confidenceScore: number;
  tradingSignals: string[];
  oracleData?: {
    asset: string;
    price: number;
    confidence: number;
    oracleCount: number;
    usdImpact: number;
    timestamp: Date;
  };
  costBreakdown: {
    apisUsed: string[];
    costPerAPI: { [key: string]: number };
    totalAPIcost: number;
    agentFee: number;
    totalCharged: number;
  };
}

export class WhaleAnalysisAgent {
  private ai: GoogleGenAI;
  private userId: string;
  private userWallet: any;
  private whaleAlert: any;
  private provider: ethers.JsonRpcProvider;
  private logs: string[] = [];
  private chainlink = getChainlinkService();
  private ens = getENSService();
  private uniswap = getUniswapV4Service();
  private lifi = getLiFiService();
  private oraclePrice: OraclePriceData | null = null;

  constructor(userId: string, userWallet: any, whaleAlert: any) {
    if (!GEMINI_API_KEY) {
      throw new Error("GOOGLE_GEMINI_API_KEY not set");
    }

    this.ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    this.userId = userId;
    this.userWallet = userWallet;
    this.whaleAlert = whaleAlert;
    this.provider = new ethers.JsonRpcProvider(ETHEREUM_RPC);
  }

  private log(message: string) {
    console.log(`🤖 Agent: ${message}`);
    this.logs.push(message);
  }

  async gatherContext(): Promise<string> {
    this.log(
      "Phase 1: Querying Chainlink oracle, ENS, Uniswap v4 & LI.FI data...",
    );

    // Resolve ENS name for whale
    const ensProfile = await this.ens.resolveAddress(
      this.whaleAlert.walletAddress,
    );
    if (ensProfile.ensName) {
      this.log(`🏷️ ENS Identity: ${ensProfile.ensName}`);
    }

    try {
      this.oraclePrice = await this.chainlink.getEthPrice();
      const usdImpact = this.whaleAlert.amount * this.oraclePrice.price;

      this.log(
        `📊 Chainlink Oracle: ETH = $${this.oraclePrice.price.toFixed(2)} ` +
          `(confidence: ${this.oraclePrice.confidence.toFixed(1)}%, oracles: ${this.oraclePrice.oracleCount})`,
      );
      this.log(`💰 Whale movement USD value: $${usdImpact.toLocaleString()}`);

      await this.chainlink.savePriceSnapshot(this.oraclePrice);
    } catch (error) {
      this.log(`⚠️ Oracle query failed: ${error}, using fallback`);
    }

    // Get Uniswap v4 activity
    let uniswapContext = "";
    try {
      const uniswapData = await this.uniswap.getWhaleSwaps(
        this.whaleAlert.walletAddress,
        3,
      );
      if (uniswapData.length > 0) {
        const hooksUsed = uniswapData.filter((s) => s.hookName);
        uniswapContext = `\nUniswap v4 Activity: ${uniswapData.length} recent swaps found. ${hooksUsed.length > 0 ? `Using v4 Hooks: ${hooksUsed.map((s) => s.hookName).join(", ")}` : "No v4 Hooks detected."}`;
        this.log(
          `🦄 Uniswap v4: ${uniswapData.length} swaps, ${hooksUsed.length} with Hooks`,
        );
      }
    } catch (error) {
      this.log(`⚠️ Uniswap v4 data unavailable: ${error}`);
    }

    // Get cross-chain positions via LI.FI
    let crossChainContext = "";
    try {
      const positions = await this.lifi.getCrossChainPositions(
        this.whaleAlert.walletAddress,
      );
      const totalValue = positions.reduce((sum, p) => sum + p.totalUsdValue, 0);
      crossChainContext = `\nCross-Chain (LI.FI): Active on ${positions.length} chains, total value $${(totalValue / 1_000_000).toFixed(1)}M`;
      this.log(
        `🌉 LI.FI: Active on ${positions.length} chains, $${(totalValue / 1_000_000).toFixed(1)}M total`,
      );
    } catch (error) {
      this.log(`⚠️ LI.FI cross-chain data unavailable: ${error}`);
    }

    const volatility = await this.chainlink.getVolatility("ETH_USD");
    const priority =
      volatility > 5 ? "HIGH PRIORITY" : volatility > 2 ? "MEDIUM" : "ROUTINE";

    this.log(
      `📈 ETH volatility: ${volatility.toFixed(2)}% - Marked as ${priority}`,
    );

    const prompt = `You are a crypto whale analyst with access to real-time oracle data, ENS identity, Uniswap v4 activity, and cross-chain data. Analyze this whale movement:
    
Whale Address: ${this.whaleAlert.walletAddress}
${ensProfile.ensName ? `ENS Identity: ${ensProfile.ensName}` : "ENS: No name registered"}
Action: ${this.whaleAlert.actionType}
Amount: ${this.whaleAlert.amount} ETH
Exchange: ${this.whaleAlert.exchange}
Time: ${this.whaleAlert.timestamp}

ORACLE DATA (Chainlink, ${this.oraclePrice?.oracleCount || 0} nodes):
- Current ETH Price: $${this.oraclePrice?.price.toFixed(2) || "N/A"}
- Oracle Confidence: ${this.oraclePrice?.confidence.toFixed(1) || "N/A"}%
- USD Impact: $${this.oraclePrice ? (this.whaleAlert.amount * this.oraclePrice.price).toLocaleString() : "N/A"}
- Price Volatility: ${volatility.toFixed(2)}%
- Analysis Priority: ${priority}
${uniswapContext}
${crossChainContext}

Provide in 2-3 sentences:
1. Significance of this movement (use oracle-verified USD value)
2. What this signals based on current volatility, Uniswap v4 activity, and cross-chain positions
3. Key risks/opportunities

Keep it factual and reference oracle data for credibility.`;

    try {
      const result = await this.ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
      });
      const context = result.text || "";

      this.log(
        `✅ Analysis context ready (with Chainlink + ENS + Uniswap v4 + LI.FI)`,
      );
      return context;
    } catch (error) {
      this.log(`⚠️ Error gathering context: ${error}`);
      return "Unable to gather real-time context. Proceeding with historical data.";
    }
  }

  async decideAPIsToCall(
    context: string,
    userBalance: number,
  ): Promise<APIOption[]> {
    this.log(
      "Phase 2: Oracle-informed cost-benefit analysis for API purchases...",
    );

    const availableAPIs: APIOption[] = [
      {
        endpoint: "etherscan-analysis",
        price: 0.0014,
        description: "Complete Ethereum history analysis via Etherscan",
        value: "high",
      },
      {
        endpoint: "historical-patterns",
        price: 0.0013,
        description: "Historical whale behavior patterns and outcomes",
        value: "high",
      },
      {
        endpoint: "sentiment-analysis",
        price: 0.0012,
        description: "Social sentiment from Twitter, Reddit, crypto forums",
        value: "medium",
      },
      {
        endpoint: "market-impact",
        price: 0.0012,
        description: "Liquidity analysis and execution impact",
        value: "medium",
      },
    ];

    const usdImpact = this.oraclePrice
      ? this.whaleAlert.amount * this.oraclePrice.price
      : 0;

    const volatility = await this.chainlink.getVolatility("ETH_USD");
    const oracleReliable = this.oraclePrice
      ? this.chainlink.isDataReliable(this.oraclePrice).reliable
      : false;

    this.log(`💰 User balance: ${userBalance.toFixed(4)} USDC`);
    this.log(
      `📊 Oracle-verified impact: $${usdImpact.toLocaleString()} ` +
        `(confidence: ${this.oraclePrice?.confidence.toFixed(1) || "N/A"}%)`,
    );

    const prompt = `You are an autonomous AI agent with FINANCIAL DECISION-MAKING power. You must decide which premium data APIs to purchase using USDC.

ORACLE-VERIFIED DATA (Chainlink, ${this.oraclePrice?.oracleCount || 0} nodes):
- ETH Price: $${this.oraclePrice?.price.toFixed(2) || "N/A"}
- Oracle Confidence: ${this.oraclePrice?.confidence.toFixed(1) || "N/A"}%
- Oracle Reliable: ${oracleReliable ? "YES" : "NO"}
- USD Impact: $${usdImpact.toLocaleString()}
- Price Volatility: ${volatility.toFixed(2)}%

Whale Action: ${this.whaleAlert.actionType} ${this.whaleAlert.amount} ETH on ${this.whaleAlert.exchange}

Context: ${context}

Available Budget: ${userBalance.toFixed(4)} USDC (must keep 0.1 USDC for tx fees)

Available APIs:
1. etherscan-analysis (0.0014 USDC) - Complete Ethereum history analysis via Etherscan [HIGH VALUE - RECOMMENDED]
2. historical-patterns (0.0013 USDC) - Past whale behavior & outcomes
3. sentiment-analysis (0.0012 USDC) - Social sentiment data  
4. market-impact (0.0012 USDC) - Liquidity & execution analysis

DECISION GUIDELINES (based on oracle data):
- USD Impact > $1M + Volatility > 5%: Consider all 4 APIs (high stakes)
- USD Impact > $500K: At least 2-3 APIs recommended, MUST include etherscan-analysis
- USD Impact < $100K: 1-2 APIs sufficient (etherscan-analysis + one other)
- Oracle Confidence < 90%: Be conservative, prioritize etherscan-analysis + historical-patterns
- High Volatility (>5%): etherscan-analysis + sentiment-analysis + market-impact more valuable
- Low Volatility (<2%): etherscan-analysis sufficient (most comprehensive)
- ALWAYS prioritize etherscan-analysis - it provides the most comprehensive historical context

RULES:
- You can purchase 0, 1, 2, 3, or all 4 APIs
- Total cost must be <= ${(userBalance - 0.1).toFixed(4)} USDC
- Choose based on VALUE for this specific whale action
- USE ORACLE DATA to justify spending more/less USDC
- Explain how oracle confidence influenced your decision
- STRONGLY PREFER etherscan-analysis as it provides the best historical context

Respond with JSON only:
{
  "apis": ["endpoint1", "endpoint2"],
  "reasoning": "Brief explanation of why you chose these specific APIs",
  "totalCost": 1.1
}`;

    try {
      const result = await this.ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
      });
      const response = result.text || "";

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        this.log(
          "⚠️ Agent decision unclear, using default: etherscan-analysis only",
        );
        return [availableAPIs[0]!];
      }

      const decision = JSON.parse(jsonMatch[0]);
      const selectedAPIs = availableAPIs.filter((api) =>
        decision.apis.includes(api.endpoint),
      );

      this.log(`🧠 Agent Decision: ${decision.reasoning}`);
      this.log(
        `📊 Selected APIs: ${selectedAPIs.map((api) => api.endpoint).join(", ")}`,
      );
      this.log(`💵 Total Cost: ${decision.totalCost} USDC`);

      return selectedAPIs;
    } catch (error) {
      this.log(
        `⚠️ Decision error: ${error}. Defaulting to etherscan-analysis.`,
      );
      return [availableAPIs[0]!];
    }
  }

  async purchaseAPI(api: APIOption): Promise<any> {
    this.log(`Phase 3: Purchasing ${api.endpoint} for ${api.price} USDC...`);

    try {
      const privateKey = decryptPrivateKey(
        this.userWallet.encryptedPrivateKey,
        SECRET_KEY,
      );

      this.log(`💸 Processing USDC payment of ${api.price} USDC...`);

      const recipientWallet = process.env.X402_RECIPIENT_WALLET;
      if (!recipientWallet) {
        throw new Error("X402_RECIPIENT_WALLET not configured");
      }

      // Transfer USDC on Ethereum
      const signature = await transferUSDC(
        privateKey,
        recipientWallet,
        api.price,
      );

      this.log(`💸 USDC payment sent: ${signature}`);
      this.log(`✅ Payment confirmed on Ethereum!`);

      this.log(`📞 Calling ${api.endpoint}...`);
      const queryParams = new URLSearchParams({
        address: this.whaleAlert.walletAddress,
        action: this.whaleAlert.actionType,
        token: this.whaleAlert.token || "ETH",
      });
      const url = `${X402_API_BASE}/${api.endpoint}?${queryParams}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });

      if (!response.ok) {
        throw new Error(
          `API returned ${response.status}: ${response.statusText}`,
        );
      }

      const data = await response.json();
      this.log(`✅ Received data from ${api.endpoint}`);

      await prisma.x402Payment.create({
        data: {
          userId: this.userId,
          endpoint: api.endpoint,
          amount: api.price,
          signature: signature,
          status: "verified",
          metadata: {
            description: api.description,
            whaleAlertId: this.whaleAlert.id,
            paymentMethod: "x402-usdc",
            currency: "USDC",
            network: "ethereum",
          },
          chainlinkPrice: this.oraclePrice?.price,
          chainlinkConfidence: this.oraclePrice?.confidence,
          priceTimestamp: this.oraclePrice?.timestamp,
        },
      });

      return data;
    } catch (error) {
      this.log(`❌ Error purchasing ${api.endpoint}: ${error}`);
      throw error;
    }
  }

  async synthesizeReport(
    context: string,
    apiData: { [key: string]: any },
    selectedAPIs: APIOption[],
  ): Promise<AnalysisReport> {
    this.log("Phase 4: Synthesizing oracle-verified analysis report...");

    const totalAPIcost = selectedAPIs.reduce((sum, api) => sum + api.price, 0);
    const totalCharged = totalAPIcost + AGENT_SERVICE_FEE;

    const usdImpact = this.oraclePrice
      ? this.whaleAlert.amount * this.oraclePrice.price
      : 0;

    // Get Uniswap v4 analysis
    let uniswapAnalysis = null;
    try {
      uniswapAnalysis = await this.uniswap.analyzeWhaleUniswapActivity(
        this.whaleAlert.walletAddress,
        this.oraclePrice?.price || 3200,
      );
      this.log(
        `🦄 Uniswap v4 analysis complete: ${uniswapAnalysis.poolHealth} pool health`,
      );
    } catch (error) {
      this.log(`⚠️ Uniswap v4 analysis failed: ${error}`);
    }

    // Get cross-chain analysis via LI.FI
    let crossChainAnalysis = null;
    try {
      crossChainAnalysis = await this.lifi.analyzeCrossChainActivity(
        this.whaleAlert.walletAddress,
        this.oraclePrice?.price || 3200,
      );
      this.log(
        `🌉 LI.FI cross-chain analysis: ${crossChainAnalysis.agentInsight.crossChainSignal}`,
      );
    } catch (error) {
      this.log(`⚠️ LI.FI analysis failed: ${error}`);
    }

    // Get ENS profile
    const ensProfile = await this.ens.resolveAddress(
      this.whaleAlert.walletAddress,
    );

    const prompt = `You are an expert crypto analyst with access to ORACLE-VERIFIED DATA, Uniswap v4 pool data, and cross-chain intelligence. Synthesize a comprehensive whale transaction analysis.

WHALE TRANSACTION:
- Address: ${this.whaleAlert.walletAddress}
${ensProfile.ensName ? `- ENS: ${ensProfile.ensName}` : "- ENS: Not registered"}
- Action: ${this.whaleAlert.actionType}
- Amount: ${this.whaleAlert.amount} ETH
- Exchange: ${this.whaleAlert.exchange}
- Time: ${this.whaleAlert.timestamp}

CHAINLINK ORACLE DATA (Decentralized, Verified):
- ETH Price: $${this.oraclePrice?.price.toFixed(2) || "N/A"}
- Oracle Confidence: ${this.oraclePrice?.confidence.toFixed(1) || "N/A"}%
- Oracle Nodes: ${this.oraclePrice?.oracleCount || 0}
- USD Impact: $${usdImpact.toLocaleString()}
- Data Age: ${this.oraclePrice?.staleness || 0}s
- Status: ${this.oraclePrice ? "✅ VERIFIED ON-CHAIN" : "⚠️ UNVERIFIED"}

PUBLIC CONTEXT:
${context}

PREMIUM DATA PURCHASED:
${JSON.stringify(apiData, null, 2)}

${
  apiData["etherscan-analysis"]
    ? `
ETHERSCAN HISTORICAL ANALYSIS (Complete Ethereum History):
This whale has performed ${apiData["etherscan-analysis"].data.patterns.totalOccurrences} similar transactions historically.
Pattern accuracy: ${apiData["etherscan-analysis"].data.patterns.patternAccuracy}%
Average impact: ${apiData["etherscan-analysis"].data.patterns.averagePriceImpact}
Social sentiment: ${apiData["etherscan-analysis"].data.sentiment.overall} (${apiData["etherscan-analysis"].data.sentiment.score}%)
`
    : ""
}

${
  uniswapAnalysis
    ? `
UNISWAP V4 ANALYSIS:
- Pool Health: ${uniswapAnalysis.poolHealth}
- Recent Swaps: ${uniswapAnalysis.recentWhaleSwaps.length}
- Hooks Used: ${uniswapAnalysis.hookAnalysis ? uniswapAnalysis.hookAnalysis.hookType : "None"}
- Agent Recommendation: ${uniswapAnalysis.agentRecommendation.action}
`
    : ""
}

${
  crossChainAnalysis
    ? `
CROSS-CHAIN ANALYSIS (LI.FI):
- Active on ${crossChainAnalysis.activeChainCount} chains
- Cross-chain volume: $${(crossChainAnalysis.totalCrossChainVolume / 1_000_000).toFixed(1)}M
- Signal: ${crossChainAnalysis.agentInsight.crossChainSignal}
- Pattern: ${crossChainAnalysis.agentInsight.pattern}
`
    : ""
}

Provide a JSON analysis with:
{
  "executiveSummary": "2-3 sentence overview referencing oracle-verified USD impact, Uniswap v4 activity, cross-chain patterns, and sentiment data",
  "recommendations": ["Action 1", "Action 2", "Action 3"],
  "riskScore": 0-10,
  "confidenceScore": 0-100,
  "tradingSignals": ["SIGNAL 1", "SIGNAL 2"]
}

IMPORTANT: Reference the Chainlink oracle data, Uniswap v4 pool activity, and LI.FI cross-chain intelligence to show data is trustworthy and multi-dimensional.`;

    try {
      const result = await this.ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
      });
      const response = result.text || "";

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("Invalid response format");
      }

      const analysis = JSON.parse(jsonMatch[0]);

      const report: AnalysisReport = {
        ...analysis,
        etherscanAnalysis: apiData["etherscan-analysis"]?.data,
        patterns: apiData["historical-patterns"]?.data,
        sentiment: apiData["sentiment-analysis"]?.data,
        marketImpact: apiData["market-impact"]?.data,
        uniswapAnalysis: uniswapAnalysis || undefined,
        crossChainAnalysis: crossChainAnalysis || undefined,
        ensProfile: ensProfile.ensName ? ensProfile : undefined,
        oracleData: this.oraclePrice
          ? {
              asset: this.oraclePrice.asset,
              price: this.oraclePrice.price,
              confidence: this.oraclePrice.confidence,
              oracleCount: this.oraclePrice.oracleCount,
              usdImpact: this.whaleAlert.amount * this.oraclePrice.price,
              timestamp: this.oraclePrice.timestamp,
            }
          : undefined,
        costBreakdown: {
          apisUsed: selectedAPIs.map((api) => api.endpoint),
          costPerAPI: Object.fromEntries(
            selectedAPIs.map((api) => [api.endpoint, api.price]),
          ),
          totalAPIcost,
          agentFee: AGENT_SERVICE_FEE,
          totalCharged,
        },
      };

      this.log(
        "✅ Analysis complete with Chainlink + Uniswap v4 + LI.FI verification!",
      );
      return report;
    } catch (error: any) {
      const isQuotaError =
        error?.message?.includes("quota") ||
        error?.message?.includes("RESOURCE_EXHAUSTED");

      if (isQuotaError) {
        this.log(`⚠️ Gemini API quota exceeded. Using fallback analysis.`);
      } else {
        this.log(`⚠️ Synthesis error: ${error}. Generating basic report.`);
      }

      return {
        executiveSummary: `Whale ${this.whaleAlert.actionType} of ${this.whaleAlert.amount} ETH (${this.oraclePrice ? `$${(this.whaleAlert.amount * this.oraclePrice.price).toLocaleString()} USD verified by Chainlink oracle` : "USD value unavailable"}) detected on Ethereum. ${uniswapAnalysis ? `Uniswap v4 pool health: ${uniswapAnalysis.poolHealth}.` : ""} ${crossChainAnalysis ? `Active on ${crossChainAnalysis.activeChainCount} chains via LI.FI.` : ""} Analysis suggests ${this.whaleAlert.actionType === "deposit" ? "potential bullish" : "potential bearish"} signal.${isQuotaError ? " [AI analysis temporarily unavailable due to API quota limits]" : ""}`,
        uniswapAnalysis: uniswapAnalysis || undefined,
        crossChainAnalysis: crossChainAnalysis || undefined,
        ensProfile: ensProfile.ensName ? ensProfile : undefined,
        recommendations: [
          "Monitor Uniswap v4 pool activity for follow-up whale swaps",
          "Check LI.FI cross-chain movements for exit signals",
          "Set appropriate stop losses based on Chainlink price feed",
        ],
        riskScore: 6,
        confidenceScore: 65,
        tradingSignals: ["WATCH", "WAIT_FOR_CONFIRMATION"],
        oracleData: this.oraclePrice
          ? {
              asset: this.oraclePrice.asset,
              price: this.oraclePrice.price,
              confidence: this.oraclePrice.confidence,
              oracleCount: this.oraclePrice.oracleCount,
              usdImpact: this.whaleAlert.amount * this.oraclePrice.price,
              timestamp: this.oraclePrice.timestamp,
            }
          : undefined,
        costBreakdown: {
          apisUsed: selectedAPIs.map((api) => api.endpoint),
          costPerAPI: Object.fromEntries(
            selectedAPIs.map((api) => [api.endpoint, api.price]),
          ),
          totalAPIcost,
          agentFee: AGENT_SERVICE_FEE,
          totalCharged,
        },
      };
    }
  }

  async analyze(): Promise<{ report: AnalysisReport; logs: string[] }> {
    try {
      this.log(
        "🚀 Starting autonomous whale analysis (Ethereum + Uniswap v4 + LI.FI)...",
      );

      const context = await this.gatherContext();

      const userBalance = this.userWallet.balance;
      const selectedAPIs = await this.decideAPIsToCall(context, userBalance);

      if (selectedAPIs.length === 0) {
        this.log("⚠️ No APIs selected (insufficient balance or low value)");
      }

      const apiData: { [key: string]: any } = {};
      for (const api of selectedAPIs) {
        try {
          const data = await this.purchaseAPI(api);
          apiData[api.endpoint] = data;
        } catch (error) {
          this.log(
            `⚠️ Failed to purchase ${api.endpoint}, continuing without it`,
          );
        }
      }

      const report = await this.synthesizeReport(
        context,
        apiData,
        selectedAPIs,
      );

      this.log(
        `💰 Total spent: ${report.costBreakdown.totalAPIcost.toFixed(4)} USDC`,
      );
      this.log(
        `💵 Agent fee: ${report.costBreakdown.agentFee.toFixed(4)} USDC`,
      );
      this.log(
        `💸 Total charged: ${report.costBreakdown.totalCharged.toFixed(4)} USDC`,
      );
      this.log("🎉 Analysis complete!");

      return { report, logs: this.logs };
    } catch (error) {
      this.log(`❌ Critical error: ${error}`);
      throw error;
    }
  }
}
