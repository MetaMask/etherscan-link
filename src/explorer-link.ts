import prefixForNetwork from './prefix-for-network'

export = function getExplorerLink(hash: string, network: string, customNetworkUrl?: string): string {
  if(customNetworkUrl?.length){
    let parsedUrl = new URL(`tx/${hash}`, customNetworkUrl)
    return parsedUrl.toString();
  } else {
    const prefix = prefixForNetwork(network)
    return prefix !== null ? `https://${prefix}etherscan.io/tx/${hash}`: '';
  }
}
