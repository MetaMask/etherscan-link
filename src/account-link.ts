import prefixForNetwork from './prefix-for-network'

export = function getAccountLink(address: string, network: string, customNetworkUrl?: string): string {
  if(customNetworkUrl?.length){
    let parsedUrl = new URL(`address/${address}`, customNetworkUrl)
    return parsedUrl.toString();
  } else {
    const prefix = prefixForNetwork(network)
    return prefix !== null ? `https://${prefix}etherscan.io/address/${address}` : '';
  }
}
