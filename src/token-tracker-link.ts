import { addPathToUrl } from "./helpers";
import getBaseUrlForChain from "./base-url-for-chain";
import getBaseUrlForNetwork from "./base-url-for-network";

interface RpcPrefsInterface {
  blockExplorerUrl?: string;
}

export function createTokenTrackerLink(
  tokenAddress: string,
  networkId: string,
  holderAddress?: string
): string {
  const baseUrl = getBaseUrlForNetwork(networkId);
  return baseUrl === null
    ? ""
    : `https://${baseUrl}/token/${tokenAddress}${
        holderAddress ? `?a=${holderAddress}` : ""
      }`;
}

export function createCustomTokenTrackerLink(
  tokenAddress: string,
  customNetworkUrl: string
): string {
  const parsedUrl = addPathToUrl(customNetworkUrl, "token", tokenAddress);
  return parsedUrl;
}

export function createTokenTrackerLinkForChain(
  tokenAddress: string,
  chainId: string,
  holderAddress?: string
): string {
  const baseUrl = getBaseUrlForChain(chainId);
  return baseUrl === null
    ? ""
    : `https://${baseUrl}/token/${tokenAddress}${
        holderAddress ? `?a=${holderAddress}` : ""
      }`;
}

export function getTokenTrackerLink(
  tokenAddress: string,
  chainId: string,
  networkId: string,
  holderAddress?: string,
  rpcPrefs: RpcPrefsInterface = {}
) {
  if (rpcPrefs.blockExplorerUrl) {
    return createCustomTokenTrackerLink(
      tokenAddress,
      rpcPrefs.blockExplorerUrl
    );
  }
  if (networkId) {
    return createTokenTrackerLink(tokenAddress, networkId, holderAddress);
  }
  return createTokenTrackerLinkForChain(tokenAddress, chainId, holderAddress);
}
