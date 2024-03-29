import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import * as chain from "wagmi/chains";
import { http } from "viem";

// Only sepolia -> will be only arbitrumSepolia when that works out
const chains = [
  chain.sepolia,  
  chain.arbitrumSepolia,
  chain.mainnet,
];

const transports = Object.fromEntries(chains.map((c) => [c.id, http()]));

export const config = getDefaultConfig({
  appName: "Arbitrarian",
  chains,
  transports,
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "", // Set up a WalletConnect account: https://walletconnect.com/
  ssr: true, // Enable server-side rendering
});
