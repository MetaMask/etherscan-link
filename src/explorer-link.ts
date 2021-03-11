import { addPathToUrl } from './helpers';
import prefixForChain from './prefix-for-chain';
import prefixForNetwork from './prefix-for-network';

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
