import prefixForNetwork from './prefix-for-network'

export = function getAccountLink(address: string, network: string): string {
  const prefix = prefixForNetwork(network)
  return `https://${prefix}etherscan.io/address/${address}`
}
