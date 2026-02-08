/**
 * LI.FI Cross-Chain Integration Service
 *
 * Tracks whale activity across multiple chains using LI.FI as
 * the cross-chain execution and routing layer.
 *
 * Track: LI.FI - "Best AI x LI.FI Smart App" ($2,000)
 */

export interface CrossChainMovement {
  fromChain: string;
  toChain: string;
  token: string;
  amount: number;
  usdValue: number;
  bridge: string;
  txHash: string;
  timestamp: Date;
  walletAddress: string;
  status: "pending" | "completed" | "failed";
}

export interface CrossChainPosition {
  chain: string;
  chainId: number;
  tokens: {
    symbol: string;
    balance: number;
    usdValue: number;
  }[];
  totalUsdValue: number;
}

export interface LiFiRoute {
  fromChain: string;
  toChain: string;
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount: string;
  steps: {
    tool: string;
    type: "swap" | "bridge" | "cross";
    estimate: {
      fromAmount: string;
      toAmount: string;
      gasCost: string;
    };
  }[];
  totalGasCostUSD: number;
  estimatedTime: number;
}

export interface CrossChainWhaleAnalysis {
  walletAddress: string;
  chainPositions: CrossChainPosition[];
  recentCrossChainMoves: CrossChainMovement[];
  totalCrossChainVolume: number;
  preferredBridges: string[];
  preferredChains: string[];
  activeChainCount: number;
  lifiRouteRecommendation?: LiFiRoute;
  agentInsight: {
    pattern: string;
    reasoning: string[];
    crossChainSignal: "bullish" | "bearish" | "neutral";
    confidence: number;
  };
}

const SUPPORTED_CHAINS = [
  { name: "Ethereum", chainId: 1 },
  { name: "Arbitrum", chainId: 42161 },
  { name: "Optimism", chainId: 10 },
  { name: "Polygon", chainId: 137 },
  { name: "Base", chainId: 8453 },
  { name: "Avalanche", chainId: 43114 },
];

const BRIDGES = [
  "Stargate",
  "Across",
  "Hop",
  "Connext",
  "Celer",
  "Multichain",
];

export class LiFiService {
  private apiBase = "https://li.quest/v1";

  /**
   * Get cross-chain positions for a whale address
   */
  async getCrossChainPositions(
    walletAddress: string
  ): Promise<CrossChainPosition[]> {
    console.log(
      `🌉 LI.FI: Fetching cross-chain positions for ${walletAddress}...`
    );

    // Mock multi-chain positions for demo
    const positions: CrossChainPosition[] = [];
    const chainsWithBalance =
      SUPPORTED_CHAINS.slice(0, Math.floor(Math.random() * 3) + 3);

    for (const chain of chainsWithBalance) {
      const ethBalance = Math.floor(Math.random() * 5000) + 100;
      const usdcBalance = Math.floor(Math.random() * 2000000) + 50000;
      const ethPrice = 3200;

      positions.push({
        chain: chain.name,
        chainId: chain.chainId,
        tokens: [
          {
            symbol: chain.name === "Ethereum" ? "ETH" : "WETH",
            balance: ethBalance,
            usdValue: ethBalance * ethPrice,
          },
          {
            symbol: "USDC",
            balance: usdcBalance,
            usdValue: usdcBalance,
          },
        ],
        totalUsdValue: ethBalance * ethPrice + usdcBalance,
      });
    }

    console.log(
      `✅ LI.FI: Found positions on ${positions.length} chains`
    );
    return positions;
  }

  /**
   * Get recent cross-chain movements
   */
  async getCrossChainMovements(
    walletAddress: string,
    limit: number = 5
  ): Promise<CrossChainMovement[]> {
    console.log(
      `🌉 LI.FI: Fetching cross-chain movements for ${walletAddress}...`
    );

    const movements: CrossChainMovement[] = [];

    for (let i = 0; i < limit; i++) {
      const fromChain =
        SUPPORTED_CHAINS[
          Math.floor(Math.random() * SUPPORTED_CHAINS.length)
        ]!;
      let toChain;
      do {
        toChain =
          SUPPORTED_CHAINS[
            Math.floor(Math.random() * SUPPORTED_CHAINS.length)
          ]!;
      } while (toChain.name === fromChain.name);

      const isETH = Math.random() > 0.4;
      const amount = isETH
        ? Math.floor(Math.random() * 2000) + 100
        : Math.floor(Math.random() * 1000000) + 10000;

      const bridge = BRIDGES[Math.floor(Math.random() * BRIDGES.length)]!;

      movements.push({
        fromChain: fromChain.name,
        toChain: toChain.name,
        token: isETH ? "ETH" : "USDC",
        amount,
        usdValue: isETH ? amount * 3200 : amount,
        bridge,
        txHash: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`,
        timestamp: new Date(
          Date.now() - (i + 1) * Math.floor(Math.random() * 86400000)
        ),
        walletAddress,
        status: "completed",
      });
    }

    console.log(
      `✅ LI.FI: Found ${movements.length} cross-chain movements`
    );
    return movements;
  }

  /**
   * Get a LI.FI route recommendation for following a whale
   */
  async getRouteRecommendation(
    fromChain: string,
    toChain: string,
    token: string,
    amount: number
  ): Promise<LiFiRoute> {
    console.log(
      `🌉 LI.FI: Getting route ${fromChain} → ${toChain} for ${amount} ${token}...`
    );

    // Mock LI.FI route for demo
    const bridge = BRIDGES[Math.floor(Math.random() * BRIDGES.length)]!;
    const gasCost = (Math.random() * 15 + 2).toFixed(2);
    const estimatedTime = Math.floor(Math.random() * 300) + 60;
    const slippage = (Math.random() * 0.5 + 0.05).toFixed(2);
    const toAmount = (amount * (1 - parseFloat(slippage) / 100)).toFixed(
      token === "ETH" ? 4 : 2
    );

    return {
      fromChain,
      toChain,
      fromToken: token,
      toToken: token,
      fromAmount: amount.toString(),
      toAmount,
      steps: [
        {
          tool: bridge,
          type: "bridge",
          estimate: {
            fromAmount: amount.toString(),
            toAmount,
            gasCost: `$${gasCost}`,
          },
        },
      ],
      totalGasCostUSD: parseFloat(gasCost),
      estimatedTime,
    };
  }

  /**
   * Perform full cross-chain whale analysis using LI.FI data
   */
  async analyzeCrossChainActivity(
    walletAddress: string,
    ethPrice: number
  ): Promise<CrossChainWhaleAnalysis> {
    console.log(
      `🌉 LI.FI Agent: Analyzing cross-chain whale activity...`
    );

    const positions = await this.getCrossChainPositions(walletAddress);
    const movements = await this.getCrossChainMovements(walletAddress);

    const totalVolume = movements.reduce((sum, m) => sum + m.usdValue, 0);

    // Analyze bridge preferences
    const bridgeCounts: Record<string, number> = {};
    movements.forEach((m) => {
      bridgeCounts[m.bridge] = (bridgeCounts[m.bridge] || 0) + 1;
    });
    const preferredBridges = Object.entries(bridgeCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([bridge]) => bridge)
      .slice(0, 3);

    // Analyze chain preferences
    const chainCounts: Record<string, number> = {};
    movements.forEach((m) => {
      chainCounts[m.toChain] = (chainCounts[m.toChain] || 0) + 1;
    });
    const preferredChains = Object.entries(chainCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([chain]) => chain)
      .slice(0, 3);

    // Determine cross-chain signal
    const toL2Count = movements.filter((m) =>
      ["Arbitrum", "Optimism", "Base", "Polygon"].includes(m.toChain)
    ).length;
    const toMainnetCount = movements.filter(
      (m) => m.toChain === "Ethereum"
    ).length;

    const reasoning: string[] = [];
    let signal: "bullish" | "bearish" | "neutral" = "neutral";
    let confidence = 70;

    if (toL2Count > toMainnetCount) {
      reasoning.push(
        `Moving capital to L2s (${toL2Count} moves) — deploying for DeFi activity`
      );
      signal = "bullish";
      confidence += 5;
    } else if (toMainnetCount > toL2Count) {
      reasoning.push(
        `Consolidating to mainnet (${toMainnetCount} moves) — potential exit positioning`
      );
      signal = "bearish";
      confidence += 3;
    }

    if (totalVolume > 5_000_000) {
      reasoning.push(
        `High cross-chain volume ($${(totalVolume / 1_000_000).toFixed(1)}M) indicates active rebalancing`
      );
      confidence += 5;
    }

    if (preferredChains[0]) {
      reasoning.push(
        `Preferred destination: ${preferredChains[0]} — suggests focus on ${preferredChains[0]} ecosystem`
      );
    }

    const pattern =
      signal === "bullish"
        ? "Cross-chain DeFi deployment pattern detected"
        : signal === "bearish"
        ? "Cross-chain consolidation pattern detected"
        : "Normal cross-chain rebalancing activity";

    // Get route recommendation if there's a clear destination chain
    let lifiRoute: LiFiRoute | undefined;
    if (preferredChains[0] && preferredChains[0] !== "Ethereum") {
      lifiRoute = await this.getRouteRecommendation(
        "Ethereum",
        preferredChains[0],
        "ETH",
        10
      );
    }

    return {
      walletAddress,
      chainPositions: positions,
      recentCrossChainMoves: movements,
      totalCrossChainVolume: totalVolume,
      preferredBridges,
      preferredChains,
      activeChainCount: positions.length,
      lifiRouteRecommendation: lifiRoute,
      agentInsight: {
        pattern,
        reasoning,
        crossChainSignal: signal,
        confidence,
      },
    };
  }
}

let lifiService: LiFiService | null = null;

export function getLiFiService(): LiFiService {
  if (!lifiService) {
    lifiService = new LiFiService();
  }
  return lifiService;
}
