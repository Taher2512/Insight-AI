import { prismaClient as prisma } from "db/client";

// Ethereum whale addresses (well-known addresses)
export const WHALE_ADDRESSES = [
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", // vitalik.eth
  "0x28C6c06298d514Db089934071355E5743bf21d60", // Binance Hot Wallet
  "0xDFd5293D8e347dFe59E90eFd55b2956a1343963d", // Coinbase Whale
  "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503", // Binance Cold Wallet
  "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18", // Bitfinex Whale
  "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8", // Binance Reserve
  "0x8103683202aa8DA10536036EDef04CDd865C225E", // Lido Whale
  "0xF977814e90dA44bFA03b6295A0616a897441aceC", // Binance Treasury
  "0x00000000219ab540356cBB839Cbe05303d7705Fa", // ETH2 Depositor
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH Contract
];

interface WhaleAlert {
  walletAddress: string;
  amount: number;
  token: string;
  actionType: "deposit" | "withdrawal";
  exchange: string;
  timestamp: Date;
}

function generateRandomAlert(): WhaleAlert {
  const address =
    WHALE_ADDRESSES[Math.floor(Math.random() * WHALE_ADDRESSES.length)]!;
  const amount = Math.floor(Math.random() * 4900) + 100; // Random 100-5000 ETH
  const actionType = Math.random() > 0.5 ? "deposit" : "withdrawal";
  const exchanges = ["Binance", "Coinbase", "Kraken", "OKX", "Bybit"];
  const exchange = exchanges[Math.floor(Math.random() * exchanges.length)]!;

  return {
    walletAddress: address,
    amount,
    token: "ETH",
    actionType,
    exchange,
    timestamp: new Date(),
  };
}

export async function createWhaleAlert(alert: WhaleAlert) {
  try {
    const whaleAlert = await prisma.whaleAlert.create({
      data: {
        walletAddress: alert.walletAddress,
        amount: alert.amount,
        token: alert.token,
        actionType: alert.actionType,
        exchange: alert.exchange,
        timestamp: alert.timestamp,
      },
    });

    console.log(
      `🐋 Created whale alert: ${alert.actionType} ${alert.amount} ${alert.token}`,
    );
    return whaleAlert;
  } catch (error) {
    console.error("Error creating whale alert:", error);
    throw error;
  }
}

export async function generateMockWhaleAlert() {
  const alert = generateRandomAlert();
  return await createWhaleAlert(alert);
}

export async function getRecentAlerts(limit: number = 10) {
  try {
    return await prisma.whaleAlert.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  } catch (error) {
    console.error("Error getting recent alerts:", error);
    throw error;
  }
}

export function getTrackedWhales() {
  return WHALE_ADDRESSES;
}

export async function markAlertAnalyzed(
  alertId: string,
  userId: string,
): Promise<{
  id: string;
  whaleAlertId: string;
  userId: string;
  cost: number;
  report: any;
  createdAt: Date;
}> {
  try {
    await prisma.whaleAlert.update({
      where: { id: alertId },
      data: { analyzed: true },
    });

    const analysis = await prisma.analysis.create({
      data: {
        whaleAlertId: alertId,
        userId,
        cost: 0.15,
        report: undefined,
      },
    });

    return analysis;
  } catch (error) {
    console.error("Error marking alert as analyzed:", error);
    throw error;
  }
}
