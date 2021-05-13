import { addPathToUrl } from "./helpers";
import getBaseUrlForChain from "./base-url-for-chain";
import getBaseUrlForNetwork from "./base-url-for-network";

interface RpcPrefsInterface {
  blockExplorerUrl?: string;
}

export function createAccountLink(address: string, networkId: string): string {
  const baseUrl = getBaseUrlForNetwork(networkId);
  return baseUrl === null ? "" : `https://${baseUrl}/address/${address}`;
}

export function createAccountLinkForChain(
  address: string,
  chainId: string
): string {
  const baseUrl = getBaseUrlForChain(chainId);
  return baseUrl === null ? "" : `https://${baseUrl}/address/${address}`;
}

export function createCustomAccountLink(
  address: string,
  customNetworkUrl: string
): string {
  const parsedUrl = addPathToUrl(customNetworkUrl, "address", address);
  return parsedUrl;
}

export function getAccountLink(
  address: string,
  chainId: string,
  rpcPrefs: RpcPrefsInterface = {},
  networkId = ""
) {
  if (rpcPrefs.blockExplorerUrl) {
    return createCustomAccountLink(address, rpcPrefs.blockExplorerUrl);
  }
  if (networkId) {
    return createAccountLink(address, networkId);
  }
  return createAccountLinkForChain(address, chainId);
}
