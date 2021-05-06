import { addPathToUrl } from './helpers';
import prefixForChain from './prefix-for-chain';
import prefixForNetwork from './prefix-for-network';

interface RpcPrefsInterface {
  blockExplorerUrl?: string;
}

export function createTokenTrackerLink(
  tokenAddress: string,
  networkId: string,
  holderAddress?: string,
): string {
  const prefix = prefixForNetwork(networkId);
  return prefix === null ? '' :
    `https://${prefix}etherscan.io/token/${tokenAddress}${
      holderAddress ? `?a=${holderAddress}` : ''}`;
}

export function createCustomTokenTrackerLink(
  tokenAddress: string,
  customNetworkUrl: string,
): string {
  const parsedUrl = addPathToUrl(customNetworkUrl, 'token', tokenAddress);
  return parsedUrl;
}

export function createTokenTrackerLinkForChain(
  tokenAddress: string,
  chainId: string,
  holderAddress?: string,
): string {
  const prefix = prefixForChain(chainId);
  return prefix === null ? '' :
    `https://${prefix}etherscan.io/token/${tokenAddress}${
      holderAddress ? `?a=${holderAddress}` : ''}`;
}

export function getTokenTrackerLink(tokenAddress: string, chainId: string, networkId: string, holderAddress?: string, rpcPrefs: RpcPrefsInterface = {}) {
  if (rpcPrefs.blockExplorerUrl) {
    return createCustomTokenTrackerLink(tokenAddress, rpcPrefs.blockExplorerUrl);
  }
  if (networkId) {
    return createTokenTrackerLink(tokenAddress, networkId, holderAddress);
  }
  return createTokenTrackerLinkForChain(tokenAddress, chainId, holderAddress);
}
