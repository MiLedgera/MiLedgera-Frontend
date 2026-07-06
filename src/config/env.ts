export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001",
  network: (process.env.NEXT_PUBLIC_STELLAR_NETWORK ?? "testnet") as
    | "testnet"
    | "mainnet",
  payGuardContractId: process.env.NEXT_PUBLIC_PAYGUARD_CONTRACT_ID ?? "",
} as const;
