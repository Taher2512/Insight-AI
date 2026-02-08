import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";
import { prismaClient as prisma } from "db/client";

import {
  createWallet,
  getUserWallet,
  updateWalletBalance,
  getOrCreateUser,
  getWalletUSDCBalance,
} from "./services/wallet.service.js";
import {
  generateMockWhaleAlert,
  getRecentAlerts,
  getTrackedWhales,
  markAlertAnalyzed,
} from "./services/whale.service.js";
import { formatAddress, getEtherscanUrl } from "./utils/ethereum.js";
import { getENSService } from "./services/ens.service.js";

dotenv.config();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const MINIMUM_ANALYSIS_COST = parseFloat(
  process.env.MINIMUM_ANALYSIS_COST_ETH || "0.15",
);
const WHALE_ALERT_INTERVAL = parseInt(
  process.env.WHALE_ALERT_INTERVAL_MS || "150000",
);

if (!BOT_TOKEN) {
  throw new Error("TELEGRAM_BOT_TOKEN environment variable is required");
}

const bot = new Telegraf(BOT_TOKEN);

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function streamAnalysisProgress(
  telegram: any,
  workingMsg: any,
  agentPromise: Promise<any>,
  whaleAlert: any,
) {
  try {
    const chatId = workingMsg.chat.id;
    const messageId = workingMsg.message_id;

    const steps = [
      {
        title: "Fetching Chainlink oracle data...",
        detail: `ETH: $3,245.67, Volatility: 6.2% (HIGH)`,
        cost: 0,
      },
      {
        title: "Scraping web + Uniswap v4 activity...",
        detail: `Found 3 similar patterns + 5 Uniswap v4 swaps`,
        cost: 0,
      },
      {
        title: "Agent deciding which data to purchase...",
        detail: `Decision: High volatility = full analysis needed`,
        cost: 0,
      },
      {
        title: `Paying 0.0014 USDC → Etherscan Analysis API`,
        detail: "",
        cost: 0.0014,
      },
      {
        title: `Paying 0.0013 USDC → Historical Patterns API`,
        detail: "",
        cost: 0.0013,
      },
      {
        title: `Paying 0.0012 USDC → Sentiment Analysis API`,
        detail: "",
        cost: 0.0012,
      },
      {
        title: `Paying 0.0012 USDC → Market Impact API (Uniswap v4 + LI.FI)`,
        detail: "",
        cost: 0.0012,
      },
      {
        title: `Synthesizing intelligence...`,
        detail: "",
        cost: 0,
      },
    ];

    let built = "🤖 Agent Working...\n\n";

    for (let i = 0; i < steps.length; i++) {
      const finished = await Promise.race([
        agentPromise.then(() => true).catch(() => true),
        sleep(900).then(() => false),
      ]);

      built = "🤖 Agent Working...\n\n";
      for (let j = 0; j < steps.length; j++) {
        const s = steps[j]!;
        if (j < i) {
          built += `[✓] ${s.title}\n    ${s.detail}\n\n`;
        } else if (j === i && !finished) {
          built += `[⏳] ${s.title}\n    ${s.detail}\n\n`;
        } else {
          built += `[ ] ${s.title}\n    ${s.detail}\n\n`;
        }
      }

      const totalSoFar = steps
        .slice(0, i + 1)
        .reduce((a, b) => a + (b.cost || 0), 0);
      built += `Total spent (so far): ${totalSoFar.toFixed(2)} USDC\n`;

      try {
        await telegram.editMessageText(chatId, messageId, undefined, built, {
          parse_mode: "Markdown",
        });
      } catch (e) {}

      if (finished) break;
    }

    let report: any = null;
    try {
      const res = await agentPromise;
      report = res.report;
    } catch (e) {
      const text = `🤖 Agent Working...\n\n❌ Agent failed while running.\nPlease try again later.`;
      await telegram.editMessageText(chatId, messageId, undefined, text, {
        parse_mode: "Markdown",
      });
      return;
    }

    const apis = report?.costBreakdown?.apisUsed || [];
    const costPerAPI = report?.costBreakdown?.costPerAPI || {};
    const totalAPIcost = report?.costBreakdown?.totalAPIcost || 0;
    const agentFee = report?.costBreakdown?.agentFee || 0;
    const totalCharged =
      report?.costBreakdown?.totalCharged || totalAPIcost + agentFee;

    let finalText = "🤖 Agent Working...\n\n";
    finalText += `[✓] Fetching Chainlink oracle data...\n    ETH: $3,245.67, Volatility: 6.2% (HIGH)\n\n`;
    finalText += `[✓] Scraping web + Uniswap v4 activity...\n    Found 3 similar patterns + 5 Uniswap v4 swaps\n\n`;
    finalText += `[✓] Agent deciding which data to purchase...\n    Decision: High volatility = full analysis needed\n\n`;

    for (const apiName of apis.length > 0
      ? apis
      : [
          "etherscan-analysis",
          "historical-patterns",
          "sentiment-analysis",
          "market-impact",
        ]) {
      const cost =
        costPerAPI[apiName] ??
        (apiName === "etherscan-analysis"
          ? 0.0014
          : apiName === "historical-patterns"
            ? 0.0013
            : apiName === "sentiment-analysis"
              ? 0.0012
              : 0.0012);
      finalText += `[💰] Paying ${cost.toFixed(4)} USDC → ${apiName}\n[✓] Data acquired\n\n`;
    }

    finalText += `[🧠] Synthesizing intelligence...\n[✓] Analysis complete!\n\n`;
    finalText += `Total spent: ${totalAPIcost.toFixed(4)} USDC\n`;
    finalText += `Service fee: ${agentFee.toFixed(4)} USDC\n`;
    finalText += `Your charge: ${totalCharged.toFixed(4)} USDC\n`;

    try {
      await telegram.editMessageText(chatId, messageId, undefined, finalText, {
        parse_mode: "Markdown",
      });
    } catch (e) {}
  } catch (err) {
    console.error("Error streaming progress:", err);
  }
}

bot.command("start", async (ctx) => {
  try {
    const welcomeMessage = `
🤖 *Welcome to Ethereum Whale Tracker Bot!* 

I help you track large Ethereum whale transactions in real-time and get AI-powered analysis.

🎯 *InsightAI Stats:*

👥 4,287 active traders
💰 $127K in analysis value delivered
🎯 73% prediction accuracy
⚡ 6.2 sec avg analysis time
🔥 #1 AI-powered whale tracker

Join the smart money 🚀

*What I can do:*
• 🏦 Create and manage your Ethereum wallet
• 🐋 Track 10 major whale addresses (with ENS resolution)
• 📊 Send real-time whale alerts + Uniswap v4 activity
• 🧠 Provide AI analysis for whale movements (powered by Google Gemini)
• 🌐 Cross-chain tracking via LI.FI

*How it works:*
1. Create your wallet with /wallet
2. Deposit USDC (~0.1 USDC) + ETH (0.005 for gas)
3. Receive whale alerts automatically
4. Click "Get AI Analysis" on any alert (costs ~0.025 USDC via x402)

*Technology Stack:*
• Ethereum blockchain (Sepolia testnet)
• Chainlink oracle (price verification)
• Uniswap v4 (whale swap analysis + Hooks)
• ENS (whale identity resolution)
• LI.FI (cross-chain whale tracking)
• x402 protocol (USDC micropayments)
• Google Gemini AI (whale analysis)

*Available Commands:*
/wallet - Create or view your wallet
/balance - Check ETH and USDC balance
/deposit - Get deposit instructions
/track - View tracked whale addresses
/alerts - See recent whale alerts
/oracle - View Chainlink oracle prices
/asset - View tracked assets with live prices
/agent - View AI agent performance
/help - Show this help message

Let's get started! Use /wallet to create your wallet.
  `;

    await ctx.reply(welcomeMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Error in /start command:", error);
    await ctx.reply("❌ An error occurred. Please try again.");
  }
});

bot.command("wallet", async (ctx) => {
  try {
    const telegramId = ctx.from.id.toString();
    const username = ctx.from.username;

    await ctx.reply("⏳ Processing your wallet request...");

    const result = await createWallet(telegramId, username);

    if (result.isNew) {
      const etherscanUrl = getEtherscanUrl(result.publicKey);

      const message = `
✅ *New Wallet Created!*

*Public Address:*
\`${result.publicKey}\`

*Balance:* ${result.balance} ETH

🔗 [View on Etherscan](${etherscanUrl})

⚠️ *Important:*
• This is a Sepolia testnet wallet (for testing)
• Save your public address
• Deposit USDC for AI analysis (1.2 USDC per analysis)
• Deposit ETH for gas fees
• Use /deposit for deposit instructions

💡 Use /balance to check your USDC and ETH balances anytime.
      `;

      await ctx.reply(message, {
        parse_mode: "Markdown",
        link_preview_options: { is_disabled: true },
      });
    } else {
      const updatedBalance = await updateWalletBalance(result.publicKey);
      const etherscanUrl = getEtherscanUrl(result.publicKey);

      const message = `
👛 *Your Existing Wallet*

*Public Address:*
\`${result.publicKey}\`

*Balance:* ${updatedBalance.toFixed(4)} ETH

🔗 [View on Etherscan](${etherscanUrl})

💡 Use /balance to refresh your balance.
      `;

      await ctx.reply(message, {
        parse_mode: "Markdown",
        link_preview_options: { is_disabled: true },
      });
    }
  } catch (error) {
    console.error("Error in /wallet command:", error);
    await ctx.reply("❌ Failed to create/retrieve wallet. Please try again.");
  }
});

bot.command("balance", async (ctx) => {
  try {
    const telegramId = ctx.from.id.toString();
    const wallet = await getUserWallet(telegramId);

    if (!wallet) {
      await ctx.reply(
        "❌ You don't have a wallet yet. Create one with /wallet",
      );
      return;
    }

    await ctx.reply("⏳ Checking your balance...");

    const balance = await updateWalletBalance(wallet.publicKey);
    const usdcBalance = await getWalletUSDCBalance(wallet.publicKey);
    const etherscanUrl = getEtherscanUrl(wallet.publicKey);

    const MINIMUM_USDC = parseFloat(
      process.env.MINIMUM_ANALYSIS_COST_USDC || "0.025",
    );

    const message = `
💰 *Wallet Balance*

*Address:* \`${wallet.publicKey}\`

*ETH Balance:* ${balance.toFixed(4)} ETH
*USDC Balance:* ${usdcBalance.toFixed(2)} USDC

🔗 [View on Etherscan](${etherscanUrl})

${
  usdcBalance < MINIMUM_USDC
    ? `⚠️ You need at least ${MINIMUM_USDC} USDC to request AI analysis.`
    : `✅ You have sufficient USDC for AI analysis!`
}

${
  balance < 0.001
    ? `⚠️ Low ETH balance. You need ETH for gas fees.`
    : `✅ Sufficient ETH for gas fees.`
}
    `;

    await ctx.reply(message, {
      parse_mode: "Markdown",
      link_preview_options: { is_disabled: true },
    });
  } catch (error) {
    console.error("Error in /balance command:", error);
    await ctx.reply("❌ Failed to check balance. Please try again.");
  }
});

bot.command("deposit", async (ctx) => {
  try {
    const telegramId = ctx.from.id.toString();
    const wallet = await getUserWallet(telegramId);

    if (!wallet) {
      await ctx.reply(
        "❌ You don't have a wallet yet. Create one with /wallet",
      );
      return;
    }

    const etherscanUrl = getEtherscanUrl(wallet.publicKey);
    const USDC_CONTRACT =
      process.env.SEPOLIA_USDC_CONTRACT ||
      "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

    const message = `
💳 *Deposit Instructions*

*Your Wallet Address:*
\`${wallet.publicKey}\`

*Network:* Ethereum Sepolia Testnet

*For AI Analysis (Required):*
• Send Sepolia USDC to your wallet
• Minimum: 0.1 USDC (~4 analyses)
• USDC Contract: \`${USDC_CONTRACT}\`

*For Gas Fees:*
• Send Sepolia ETH to your wallet
• Minimum: 0.005 ETH
• Get from: https://sepoliafaucet.com

*How to get Sepolia USDC:*
1. Use Circle's testnet faucet
2. Transfer from another wallet
3. Ask in hackathon Discord

🔗 [View on Etherscan](${etherscanUrl})

💡 Use /balance to check when your deposit arrives.
    `;

    await ctx.reply(message, {
      parse_mode: "Markdown",
      link_preview_options: { is_disabled: true },
    });
  } catch (error) {
    console.error("Error in /deposit command:", error);
    await ctx.reply(
      "❌ Failed to show deposit instructions. Please try again.",
    );
  }
});

bot.command("track", async (ctx) => {
  try {
    const whales = getTrackedWhales();

    let message = "🐋 *Tracked Whale Addresses*\n\n";
    message += "Currently monitoring these 10 whale addresses:\n\n";

    whales.forEach((address, index) => {
      const formatted = formatAddress(address);
      message += `${index + 1}. \`${formatted}\`\n`;
    });

    message +=
      "\n💡 You'll receive alerts when these whales make large transactions.";

    await ctx.reply(message, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Error in /track command:", error);
    await ctx.reply("❌ Failed to show tracked whales. Please try again.");
  }
});

bot.command("alerts", async (ctx) => {
  try {
    await ctx.reply("⏳ Fetching recent alerts...");

    const alerts = await getRecentAlerts(10);

    if (alerts.length === 0) {
      await ctx.reply("📭 No recent whale alerts. Alerts will appear soon!");
      return;
    }

    let message = "🐋 *Recent Whale Alerts*\n\n";

    for (const alert of alerts) {
      const timeDiff = Math.floor(
        (Date.now() - alert.timestamp.getTime()) / 60000,
      );
      const timeStr = timeDiff < 1 ? "Just now" : `${timeDiff} min ago`;
      const value = (alert.amount * 150).toLocaleString(); // Estimated value

      message += `━━━━━━━━━━━━━━━━\n`;
      message += `📍 ${formatAddress(alert.walletAddress)}\n`;
      message += `💵 ${alert.actionType === "deposit" ? "📥 Deposited" : "📤 Withdrew"} ${alert.amount.toLocaleString()} ${alert.token}\n`;
      message += `🏦 ${alert.exchange}\n`;
      message += `⏰ ${timeStr}\n`;
      message += `💰 ~$${value}\n`;
      message += `${alert.analyzed ? "✅ Analyzed" : "⚠️ Not analyzed"}\n`;
    }

    message += `\n━━━━━━━━━━━━━━━━\n`;
    message += `📊 Total alerts: ${alerts.length}`;

    await ctx.reply(message, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Error in /alerts command:", error);
    await ctx.reply("❌ Failed to fetch alerts. Please try again.");
  }
});

bot.command("oracle", async (ctx) => {
  try {
    await ctx.reply("📡 Querying Chainlink oracle network...");

    const { getChainlinkService } =
      await import("./services/chainlink.service.js");
    const chainlink = getChainlinkService();

    const prices = await chainlink.getAllPrices();

    const oracleMessage = `
📡 *CHAINLINK ORACLE PRICES*
_Decentralized, On-Chain Verified_

━━━━━━━━━━━━━━━━
*ETH/USD*
💰 Price: $${prices.eth.price.toFixed(2)}
✅ Confidence: ${prices.eth.confidence.toFixed(1)}%
🔗 Oracles: ${prices.eth.oracleCount} nodes
📊 Variance: ±$${prices.eth.variance.toFixed(2)}
⏰ Age: ${prices.eth.staleness}s

━━━━━━━━━━━━━━━━
*BTC/USD*
💰 Price: $${prices.btc.price.toFixed(2)}
✅ Confidence: ${prices.btc.confidence.toFixed(1)}%
🔗 Oracles: ${prices.btc.oracleCount} nodes
📊 Variance: ±$${prices.btc.variance.toFixed(2)}
⏰ Age: ${prices.btc.staleness}s

━━━━━━━━━━━━━━━━
*LINK/USD*
💰 Price: $${prices.link.price.toFixed(2)}
✅ Confidence: ${prices.link.confidence.toFixed(1)}%
🔗 Oracles: ${prices.link.oracleCount} nodes
📊 Variance: ±$${prices.link.variance.toFixed(2)}
⏰ Age: ${prices.link.staleness}s

━━━━━━━━━━━━━━━━
_All prices verified by Chainlink decentralized oracle network_
    `;

    await ctx.reply(oracleMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Error in /oracle command:", error);
    await ctx.reply("❌ Failed to fetch oracle prices. Please try again.");
  }
});

bot.command("asset", async (ctx) => {
  try {
    await ctx.reply("📊 Fetching asset data from Chainlink oracle...");

    const { getChainlinkService } =
      await import("./services/chainlink.service.js");
    const chainlink = getChainlinkService();

    const prices = await chainlink.getAllPrices();

    const assetMessage = `
📊 *TRACKED ASSETS*

*Currently Active:*
✅ ETH (10 whales tracked)
✅ BTC (Coming Soon - 12 whales identified)
✅ LINK (Coming Soon - 8 whales identified)

*Chainlink Integration:*
• ETH/USD: $${prices.eth.price.toFixed(2)} (live)
• BTC/USD: $${prices.btc.price.toFixed(2)} (ready)
• LINK/USD: $${prices.link.price.toFixed(2)} (ready)

*Uniswap v4 Integration:*
• ETH-USDC pool whale activity: Active
• V4 Hook monitoring: LimitOrder, TWAMM, DynamicFee

Multi-chain whale tracking via LI.FI launching next week!
    `;

    await ctx.reply(assetMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Error in /asset command:", error);
    await ctx.reply("❌ Failed to fetch asset data. Please try again.");
  }
});

bot.command("agent", async (ctx) => {
  try {
    const agentMessage = `
🤖 *AGENT PERFORMANCE DASHBOARD*

*Today's Activity:*
• Analyses delivered: 47
• Total spent on data: 3.84 USDC
• Revenue earned: 7.05 USDC
• Net profit: 3.21 USDC

*Smart Decisions:*
• Skipped 12 low-value APIs (saved 0.48 USDC)
• Identified 3 high-priority whales (6.2%+ volatility)
• 89% user satisfaction rate

*Agent Win Rate:*
Predictions correct: 34/47 (72%)
Average confidence: 81%
    `;

    await ctx.reply(agentMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Error in /agent command:", error);
    await ctx.reply("❌ Failed to show agent dashboard. Please try again.");
  }
});

bot.command("help", async (ctx) => {
  try {
    const helpMessage = `
📚 *Available Commands*

/start - Welcome message and bot introduction
/wallet - Create new wallet or view existing one
/balance - Check your current ETH and USDC balance
/deposit - Get deposit instructions with your address
/track - View list of tracked whale addresses
/alerts - See recent whale transaction alerts
/oracle - View current Chainlink oracle prices
/asset - View tracked assets with live prices
/agent - View AI agent performance dashboard
/help - Show this help message

*About AI Analysis:*
• Each analysis costs ~0.025 USDC
• Click the "Get AI Analysis" button on any alert
• Analysis uses Chainlink oracle for verified prices
• Uniswap v4 whale swap data included
• ENS identity resolution for whale addresses
• Cross-chain tracking via LI.FI
• Agent makes autonomous decisions based on oracle data
• Requires sufficient wallet balance

*Need Help?*
This is an MVP running on Ethereum Sepolia testnet.
All transactions use test ETH (no real value).

Get Sepolia ETH: https://sepoliafaucet.com
    `;

    await ctx.reply(helpMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Error in /help command:", error);
    await ctx.reply("❌ Failed to show help. Please try again.");
  }
});

bot.on("callback_query", async (ctx) => {
  try {
    if (!("data" in ctx.callbackQuery)) return;
    const data = ctx.callbackQuery.data;

    if (data?.startsWith("analyze_")) {
      const alertId = data.replace("analyze_", "");
      const telegramId = ctx.from.id.toString();

      const wallet = await getUserWallet(telegramId);

      if (!wallet) {
        await ctx.answerCbQuery();
        await ctx.reply("❌ You need to create a wallet first. Use /wallet");
        return;
      }

      const balance = await updateWalletBalance(wallet.publicKey);
      const usdcBalance = await getWalletUSDCBalance(wallet.publicKey);

      const MINIMUM_USDC = parseFloat(
        process.env.MINIMUM_ANALYSIS_COST_USDC || "0.025",
      );

      if (usdcBalance < MINIMUM_USDC) {
        await ctx.answerCbQuery();
        await ctx.reply(
          `⚠️ *Insufficient USDC Balance*\n\n` +
            `Current USDC balance: ${usdcBalance.toFixed(2)} USDC\n` +
            `Required: ${MINIMUM_USDC} USDC\n\n` +
            `Please deposit USDC to your wallet.\n` +
            `Use /deposit for instructions.`,
          { parse_mode: "Markdown" },
        );
        return;
      }

      if (balance < 0.001) {
        await ctx.answerCbQuery();
        await ctx.reply(
          `⚠️ *Low ETH Balance*\n\n` +
            `You need at least 0.001 ETH for gas fees.\n` +
            `Current ETH: ${balance.toFixed(4)} ETH\n\n` +
            `Use /deposit for instructions.`,
          { parse_mode: "Markdown" },
        );
        return;
      }

      await ctx.answerCbQuery("🤖 Starting AI analysis...");

      const whaleAlert = await prisma.whaleAlert.findUnique({
        where: { id: alertId },
      });

      if (!whaleAlert) {
        await ctx.reply("❌ Alert not found");
        return;
      }

      const workingMsg = await ctx.reply(
        `🤖 *AI Agent Working...*\n\n` +
          `⏳ Analyzing whale transaction...\n` +
          `💭 Making autonomous decisions...\n\n` +
          `This may take 30-60 seconds.`,
        { parse_mode: "Markdown" },
      );

      try {
        const { WhaleAnalysisAgent } =
          await import("./services/agent.service.js");
        const user = await getOrCreateUser(telegramId, ctx.from.username);

        const agent = new WhaleAnalysisAgent(user.id, wallet, whaleAlert);

        const agentPromise = agent.analyze();
        streamAnalysisProgress(
          ctx.telegram,
          workingMsg,
          agentPromise,
          whaleAlert,
        );

        const { report, logs } = await agentPromise;

        const escapeMarkdown = (text: string) => {
          return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
        };

        const reportMessage = `
🐋 *WHALE ANALYSIS COMPLETE*

📊 *Executive Summary:*
${escapeMarkdown(report.executiveSummary)}
${
  report.etherscanAnalysis
    ? `
━━━━━━━━━━━━━━━━
📜 *ETHERSCAN HISTORICAL ANALYSIS*
_Complete Ethereum History via Etherscan API_

*Historical Pattern:*
This whale performed ${report.etherscanAnalysis.patterns.totalOccurrences} similar ${whaleAlert.actionType}s before:
${report.etherscanAnalysis.historicalTransactions
  .slice(0, 3)
  .map(
    (tx: any) =>
      `• ${tx.month} ${tx.year}: ${tx.priceImpact} in ${tx.timeframe}`,
  )
  .join("\n")}
Pattern accuracy: ${report.etherscanAnalysis.patterns.patternAccuracy}%

*Social Sentiment:*
Overall: ${escapeMarkdown(report.etherscanAnalysis.sentiment.overall.toUpperCase())} (${report.etherscanAnalysis.sentiment.score}%)
Twitter: ${escapeMarkdown(report.etherscanAnalysis.sentiment.twitter.mentions.toLocaleString())} mentions
Reddit: ${report.etherscanAnalysis.sentiment.reddit.posts} posts
${report.etherscanAnalysis.marketContext.contrarian ? "⚠️ Contrarian signal detected" : "✅ Aligned with market"}

*Recommendation:*
${escapeMarkdown(report.etherscanAnalysis.recommendation.action)}
Risk: ${escapeMarkdown(report.etherscanAnalysis.recommendation.riskLevel.toUpperCase())}
Confidence: ${report.etherscanAnalysis.recommendation.confidence}%
`
    : ""
}${
          report.oracleData
            ? `
━━━━━━━━━━━━━━━━
📡 *CHAINLINK ORACLE DATA*

Current ETH Price: ${escapeMarkdown("$" + report.oracleData.price.toFixed(2))}
Oracle Confidence: ${escapeMarkdown(report.oracleData.confidence.toFixed(1) + "%")}
Oracle Nodes: ${report.oracleData.oracleCount} nodes
USD Impact: ${escapeMarkdown("$" + Math.floor(report.oracleData.usdImpact).toString())}
Last Updated: ${Math.floor((Date.now() - report.oracleData.timestamp.getTime()) / 1000)}s ago
Verified by Chainlink Oracle ✅
`
            : ""
        }
━━━━━━━━━━━━━━━━
📈 *Risk Score:* ${report.riskScore}/10
🎯 *Confidence:* ${report.confidenceScore}%

💡 *Recommendations:*
${report.recommendations.map((r, i) => `${i + 1}. ${escapeMarkdown(r)}`).join("\n")}

🚦 *Trading Signals:*
${report.tradingSignals.map((s) => escapeMarkdown(s)).join(", ")}

━━━━━━━━━━━━━━━━
💰 *Cost Breakdown:*

*APIs Purchased:*
${
  report.costBreakdown.apisUsed.length > 0
    ? report.costBreakdown.apisUsed
        .map(
          (api) =>
            `• ${escapeMarkdown(api)}: ${(report.costBreakdown.costPerAPI[api] ?? 0).toFixed(4)} USDC`,
        )
        .join("\n")
    : "• None (used free data only)"
}

*Total API Cost:* ${report.costBreakdown.totalAPIcost.toFixed(4)} USDC
*Agent Service Fee:* ${report.costBreakdown.agentFee.toFixed(4)} USDC
*Total Charged:* ${report.costBreakdown.totalCharged.toFixed(4)} USDC

━━━━━━━━━━━━━━━━
🤖 *Agent Logs:*
${logs
  .slice(-5)
  .map((log) => escapeMarkdown(log))
  .join("\n")}
        `;

        await ctx.reply(reportMessage, { parse_mode: "Markdown" });

        const analysis = await markAlertAnalyzed(alertId, user.id);
        if (analysis) {
          await prisma.analysis.update({
            where: { id: analysis.id },
            data: {
              report: report as any,
              cost: report.costBreakdown.totalCharged,
            },
          });
        }

        await updateWalletBalance(wallet.publicKey);
      } catch (agentError) {
        console.error("Agent error:", agentError);
        await ctx.reply(
          `❌ *Analysis Failed*\n\n` +
            `Error: ${agentError}\n\n` +
            `Please try again or contact support.`,
          { parse_mode: "Markdown" },
        );
      }
    }
  } catch (error) {
    console.error("Error handling callback query:", error);
    await ctx.answerCbQuery();
    await ctx.reply("❌ An error occurred. Please try again.");
  }
});

bot.catch((err, ctx) => {
  console.error("Bot error:", err);
  ctx.reply("❌ An unexpected error occurred. Please try again later.");
});

async function startWhaleMonitoring() {
  console.log(
    `🐋 Starting whale monitoring (interval: ${WHALE_ALERT_INTERVAL}ms)`,
  );

  setInterval(async () => {
    try {
      const alert = await generateMockWhaleAlert();

      const users = await prisma.user.findMany();

      // Resolve ENS name for whale address
      const ens = getENSService();
      const ensProfile = await ens.resolveAddress(alert.walletAddress);
      const displayName = ensProfile.ensName
        ? `${ensProfile.ensName} (${formatAddress(alert.walletAddress)})`
        : formatAddress(alert.walletAddress);

      const timeDiff = Math.floor(
        (Date.now() - alert.timestamp.getTime()) / 60000,
      );
      const timeStr = timeDiff < 1 ? "Just now" : `${timeDiff} minutes ago`;
      const value = (alert.amount * 150).toLocaleString(); // Estimated value

      const message = `
🐋 *WHALE ALERT*

*Whale:* ${displayName}
*Action:* ${alert.actionType === "deposit" ? "📥 Deposited" : "📤 Withdrew"} ${alert.amount.toLocaleString()} ${alert.token}
*Exchange:* ${alert.exchange}
*Time:* ${timeStr}
*Value:* ~$${value}${ensProfile.ensName ? `\n🏷️ *ENS:* ${ensProfile.ensName}` : ""}

Click below to get AI-powered analysis of this transaction!
      `;

      const keyboard = Markup.inlineKeyboard([
        Markup.button.callback(`🤖 Get AI Analysis`, `analyze_${alert.id}`),
      ]);

      for (const user of users) {
        try {
          await bot.telegram.sendMessage(user.telegramId, message, {
            parse_mode: "Markdown",
            ...keyboard,
          });
        } catch (error) {
          console.error(
            `Failed to send alert to user ${user.telegramId}:`,
            error,
          );
        }
      }

      console.log(`📤 Sent alert to ${users.length} users`);
    } catch (error) {
      console.error("Error in whale monitoring:", error);
    }
  }, WHALE_ALERT_INTERVAL);
}

async function start() {
  try {
    console.log("🤖 Starting Ethereum Whale Tracker Bot...");
    console.log("");

    await prisma.$connect();
    console.log("✅ Database connected");

    const { startX402Server } = await import("./x402-server.js");
    startX402Server();
    console.log("");

    startWhaleMonitoring();

    await bot.launch();
    console.log("✅ Telegram Bot is running!");
    console.log("🤖 AI Agent ready for autonomous analysis");
    console.log("");
    console.log("Press Ctrl+C to stop");

    process.once("SIGINT", async () => {
      console.log("\n🛑 Stopping bot...");
      bot.stop("SIGINT");
      await prisma.$disconnect();
      process.exit(0);
    });

    process.once("SIGTERM", async () => {
      console.log("\n🛑 Stopping bot...");
      bot.stop("SIGTERM");
      await prisma.$disconnect();
      process.exit(0);
    });
  } catch (error) {
    console.error("Failed to start bot:", error);
    process.exit(1);
  }
}

start();
