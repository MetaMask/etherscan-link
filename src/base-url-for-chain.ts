export = function getBaseUrlForChain(chainId: string): string | null {
  let baseUrl;
  switch (chainId) {
    case "0x1": // main net
      baseUrl = "etherscan.io";
      break;
    case "0x3": // ropsten test net
      baseUrl = "ropsten.etherscan.io";
      break;
    case "0x4": // rinkeby test net
      baseUrl = "rinkeby.etherscan.io";
      break;
    case "0x5": // goerli test net
      baseUrl = "goerli.etherscan.io";
      break;
    case "0x2a": // kovan test net
      baseUrl = "kovan.etherscan.io";
      break;
    case "0x38": // bsc main net
      baseUrl = "bscscan.com";
      break;
    case "0x61": // bsc test net
      baseUrl = "testnet.bscscan.com";
      break;
    default:
      baseUrl = null;
  }
  return baseUrl;
};
