import prefixForNetwork from './prefix-for-network'

export function getAccountLink(address: string, network: string, customNetworkUrl?: string): string {
    const prefix = prefixForNetwork(network)
    return prefix !== null ? `https://${prefix}etherscan.io/address/${address}` : '';
}

export function getCustomBlockExplorerAccountLink(address: string, customNetworkUrl: string): string {
    let parsedUrl = new URL(`address/${address}`, customNetworkUrl)
    return parsedUrl.toString();
}
