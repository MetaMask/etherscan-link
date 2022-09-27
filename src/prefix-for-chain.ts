export = function getPrefixForChain(chainId: string): string | null {
  let prefix;
  switch (chainId) {
    case '0x1': // main net
      prefix = '';
      break;
    case '0x5': // goerli test net
      prefix = 'goerli.';
      break;
    case '0xaa36a7': // sepolia test net
      prefix = 'sepolia.';
      break;
    default:
      prefix = null;
  }
  return prefix;
};
