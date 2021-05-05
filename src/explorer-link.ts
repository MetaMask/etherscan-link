import { addPathToUrl } from './helpers';
import prefixForChain from './prefix-for-chain';
import prefixForNetwork from './prefix-for-network';

// TODO improve type safety / discriminating unions (this may require a discriminant property)
interface TransactionInterface {
  hash: string;
  chainId: string;
  metamaskNetworkId: string;
}
interface RpcPrefsInterface {
  blockExplorerUrl?: string;
}

export function createCustomExplorerLink(hash: string, customNetworkUrl: string): string {
  const parsedUrl = addPathToUrl(customNetworkUrl, 'tx', hash);
  return parsedUrl;
}

export function createExplorerLink(hash: string, network: string): string {
  const prefix = prefixForNetwork(network);
  return prefix === null ? '' : `https://${prefix}etherscan.io/tx/${hash}`;

}

export function createExplorerLinkForChain(hash: string, chainId: string): string {
  const prefix = prefixForChain(chainId);
  return prefix === null ? '' : `https://${prefix}etherscan.io/tx/${hash}`;
}

export function getBlockExplorerLink(transaction: TransactionInterface, rpcPrefs: RpcPrefsInterface = {}) {
  if (rpcPrefs.blockExplorerUrl) {
    return createCustomExplorerLink(transaction.hash, rpcPrefs.blockExplorerUrl);
  }
  if (transaction.chainId) {
    return createExplorerLinkForChain(transaction.hash, transaction.chainId);
  }
  return createExplorerLink(transaction.hash, transaction.metamaskNetworkId);
}
