import prefixForNetwork from './prefix-for-network'

export = function getTokenTrackerLink(
  tokenAddress: string,
  network: string,
  holderAddress?: string,
): string {
  const prefix = prefixForNetwork(network)
  return `https://${prefix}etherscan.io/token/${tokenAddress}${
    holderAddress ? `?a=${ holderAddress }` : ''
  }`
}
