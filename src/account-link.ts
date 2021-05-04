import { addPathToUrl } from './helpers';
import prefixForChain from './prefix-for-chain';
import prefixForNetwork from './prefix-for-network';

interface RpcPrefsInterface {
  blockExplorerUrl?: string;
}

export function createAccountLink(address: string, networkId: string): string {
  const prefix = prefixForNetwork(networkId);
  return prefix === null ? '' : `https://${prefix}etherscan.io/address/${address}`;
}

export function createAccountLinkForChain(address: string, chainId: string): string {
  const prefix = prefixForChain(chainId);
  return prefix === null ? '' : `https://${prefix}etherscan.io/address/${address}`;
}

export function createCustomAccountLink(address: string, customNetworkUrl: string): string {
  const parsedUrl = addPathToUrl(customNetworkUrl, 'address', address);
  return parsedUrl;
}

export function getAccountLink(address: string, chainId: string, rpcPrefs: RpcPrefsInterface = {}, networkId = '') {
  if (rpcPrefs.blockExplorerUrl) {
    return createCustomAccountLink(address, rpcPrefs.blockExplorerUrl);
  }
  if (networkId) {
    return createAccountLink(address, networkId);
  }
  return createAccountLinkForChain(address, chainId);
}
