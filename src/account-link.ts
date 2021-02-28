import prefixForNetwork from './prefix-for-network'

export = function getAccountLink(address: string, network: string, customNetworkUrl?: string): string {
  if(customNetworkUrl?.length){
    return `${customNetworkUrl}/address/${address}`;
  } else {
    const prefix = prefixForNetwork(network)
    return prefix !== null ? `https://${prefix}etherscan.io/address/${address}` : '';
  }
}
