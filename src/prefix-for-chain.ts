export = function getPrefixForChain(chainId: string): string | null {
  let prefix;
  switch (chainId) {
    case '0x1': // main net
      prefix = '';
      break;
    case '0x3': // ropsten test net
      prefix = 'ropsten.';
      break;
    case '0x4': // rinkeby test net
      prefix = 'rinkeby.';
      break;
    case '0x5': // goerli test net
      prefix = 'goerli.';
      break;
    case '0x2a': // kovan test net
      prefix = 'kovan.';
      break;
    default:
      prefix = null;
  }
  return prefix;
};
