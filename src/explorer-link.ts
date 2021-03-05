import prefixForChain from './prefix-for-chain';
import prefixForNetwork from './prefix-for-network'
     
export function createCustomExplorerLink(hash: string, customNetworkUrl?: string): string {
  let parsedUrl = new URL(`tx/${hash}`, customNetworkUrl)
    return parsedUrl.toString();
  }

export function createExplorerLink(hash: string, network: string): string {
  const prefix = prefixForNetwork(network)
  return prefix !== null ? `https://${prefix}etherscan.io/tx/${hash}`: '';

}

export function createExplorerLinkForChain(hash: string, chainId: string): string {
  const prefix = prefixForChain(chainId)
  return prefix !== null ? `https://${prefix}etherscan.io/tx/${hash}`: '';
}
