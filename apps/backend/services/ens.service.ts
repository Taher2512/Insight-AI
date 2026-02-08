import { ethers } from "ethers";

export interface ENSProfile {
  address: string;
  ensName: string | null;
  avatar: string | null;
  description: string | null;
  twitter: string | null;
  url: string | null;
}

const KNOWN_WHALE_ENS: Record<string, string> = {
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045": "zaincollier.eth",
  "0x28C6c06298d514Db089934071355E5743bf21d60": "rogeliodudley.eth",
  "0xDFd5293D8e347dFe59E90eFd55b2956a1343963d": "camille-melton.eth",
  "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503": "clyde-greene.eth",
  "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18": "bitfinex-whale.eth",
  "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8": "alaricadkins.eth",
  "0x8103683202aa8DA10536036EDef04CDd865C225E": "calebcabrera.eth",
  "0xF977814e90dA44bFA03b6295A0616a897441aceC": "carl-manning.eth",
  "0x00000000219ab540356cBB839Cbe05303d7705Fa": "willie-lozano.eth",
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": "darielcrane.eth",
};

export class ENSService {
  private provider: ethers.JsonRpcProvider;
  private ensCache: Map<string, ENSProfile> = new Map();
  private cacheDuration = 300000; // 5 min cache

  constructor() {
    // Use mainnet for ENS resolution (ENS is on mainnet)
    this.provider = new ethers.JsonRpcProvider(
      process.env.ETHEREUM_MAINNET_RPC || "https://mainnet.infura.io/v3/demo",
    );
  }

  async resolveAddress(address: string): Promise<ENSProfile> {
    const cached = this.ensCache.get(address.toLowerCase());
    if (cached) {
      return cached;
    }

    try {
      console.log(`🔍 ENS: Resolving ${address}...`);

      // Check known whale mappings first (for demo)
      const knownName = KNOWN_WHALE_ENS[address];
      if (knownName) {
        const profile: ENSProfile = {
          address,
          ensName: knownName,
          avatar: `https://metadata.ens.domains/mainnet/avatar/${knownName}`,
          description: null,
          twitter: null,
          url: null,
        };
        this.ensCache.set(address.toLowerCase(), profile);
        console.log(`✅ ENS: ${address} → ${knownName} (known whale)`);
        return profile;
      }

      // Try real ENS resolution
      const ensName = await this.provider.lookupAddress(address);

      if (ensName) {
        const resolver = await this.provider.getResolver(ensName);
        let avatar: string | null = null;
        let description: string | null = null;
        let twitter: string | null = null;
        let url: string | null = null;

        if (resolver) {
          try {
            avatar = await resolver.getText("avatar");
            description = await resolver.getText("description");
            twitter = await resolver.getText("com.twitter");
            url = await resolver.getText("url");
          } catch (e) {
            // Text records may not exist
          }
        }

        const profile: ENSProfile = {
          address,
          ensName,
          avatar,
          description,
          twitter,
          url,
        };

        this.ensCache.set(address.toLowerCase(), profile);
        console.log(`✅ ENS: ${address} → ${ensName}`);
        return profile;
      }

      // No ENS name found
      const profile: ENSProfile = {
        address,
        ensName: null,
        avatar: null,
        description: null,
        twitter: null,
        url: null,
      };
      this.ensCache.set(address.toLowerCase(), profile);
      return profile;
    } catch (error) {
      console.error(`❌ ENS resolution failed for ${address}:`, error);
      return {
        address,
        ensName: null,
        avatar: null,
        description: null,
        twitter: null,
        url: null,
      };
    }
  }

  async resolveENSName(ensName: string): Promise<string | null> {
    try {
      const address = await this.provider.resolveName(ensName);
      return address;
    } catch (error) {
      console.error(`❌ ENS forward resolution failed for ${ensName}:`, error);
      return null;
    }
  }

  formatAddressWithENS(address: string, ensProfile: ENSProfile): string {
    if (ensProfile.ensName) {
      return `${ensProfile.ensName} (${address.slice(0, 6)}...${address.slice(-4)})`;
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  async getWhaleIdentity(address: string): Promise<string> {
    const profile = await this.resolveAddress(address);
    if (profile.ensName) {
      let identity = `🏷️ ${profile.ensName}`;
      if (profile.twitter) {
        identity += ` | 🐦 @${profile.twitter}`;
      }
      return identity;
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  clearCache() {
    this.ensCache.clear();
    console.log("🧹 ENS cache cleared");
  }
}

let ensService: ENSService | null = null;

export function getENSService(): ENSService {
  if (!ensService) {
    ensService = new ENSService();
  }
  return ensService;
}
