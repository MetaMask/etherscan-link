import prefixForNetwork from './prefix-for-network'

export = function getTokenTrackerLink(
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
