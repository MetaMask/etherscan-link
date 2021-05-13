import { addPathToUrl } from "./helpers";
import getBaseUrlForChain from "./base-url-for-chain";
import getBaseUrlForNetwork from "./base-url-for-network";

// TODO improve type safety / discriminating unions (this may require a discriminant property)
interface TransactionInterface {
  hash: string;
  chainId: string;
  metamaskNetworkId: string;
}
interface RpcPrefsInterface {
  blockExplorerUrl?: string;
}

export function createCustomExplorerLink(
  hash: string,
  customNetworkUrl: string
): string {
  const parsedUrl = addPathToUrl(customNetworkUrl, "tx", hash);
  return parsedUrl;
}

export function createExplorerLink(hash: string, network: string): string {
  const baseUrl = getBaseUrlForNetwork(network);
  return baseUrl === null ? "" : `https://${baseUrl}/tx/${hash}`;
}

export function createExplorerLinkForChain(
  hash: string,
  chainId: string
): string {
  const baseUrl = getBaseUrlForChain(chainId);
  return baseUrl === null ? "" : `https://${baseUrl}/tx/${hash}`;
}

export function getBlockExplorerLink(
  transaction: TransactionInterface,
  rpcPrefs: RpcPrefsInterface = {}
) {
  if (rpcPrefs.blockExplorerUrl) {
    return createCustomExplorerLink(
      transaction.hash,
      rpcPrefs.blockExplorerUrl
    );
  }
  if (transaction.chainId) {
    return createExplorerLinkForChain(transaction.hash, transaction.chainId);
  }
  return createExplorerLink(transaction.hash, transaction.metamaskNetworkId);
}
