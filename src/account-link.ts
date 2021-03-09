import { addPathToUrl } from './helpers';
import prefixForChain from './prefix-for-chain';
import prefixForNetwork from './prefix-for-network';

export function createAccountLink(address: string, network: string): string {
  const prefix = prefixForNetwork(network)
  return prefix !== null ? `https://${prefix}etherscan.io/address/${address}` : '';
}

export function createAccountLinkForChain(address: string, chainId: string): string {
  const prefix = prefixForChain(chainId)
  return prefix !== null ? `https://${prefix}etherscan.io/address/${address}` : '';
}

export function createCustomAccountLink(address: string, customNetworkUrl: string): string {
    let parsedUrl = addPathToUrl(customNetworkUrl, 'address', address)
    return parsedUrl;
}