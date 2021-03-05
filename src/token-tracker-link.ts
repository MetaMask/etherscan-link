import prefixForChain from './prefix-for-chain';
import prefixForNetwork from './prefix-for-network'

export function createTokenTrackerLink(
  tokenAddress: string,
  network: string,
  holderAddress?: string,
  customNetworkUrl?: string,
): string {
  if(customNetworkUrl?.length){
    let parsedUrl = new URL(`token/${tokenAddress}`,customNetworkUrl)
    return parsedUrl.toString();
  } else {
  const prefix = prefixForNetwork(network)
  return prefix !== null ? 
      `https://${prefix}etherscan.io/token/${tokenAddress}${ 
        holderAddress ? `?a=${ holderAddress }` : '' }`
    : '';
  }
}

export function createTokenTrackerLinkForChain(
  tokenAddress: string,
  chainId: string,
  holderAddress?: string,
): string {
  const prefix = prefixForChain(chainId)
  return prefix !== null ? 
      `https://${prefix}etherscan.io/token/${tokenAddress}${ 
        holderAddress ? `?a=${ holderAddress }` : '' }`
    : '';
}
