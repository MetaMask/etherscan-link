export = function getPrefixForNetwork(networkId: string): string | null {
  // eslint-disable-next-line radix
  const net = parseInt(networkId);
  let prefix;

  switch (net) {
    case 1: // main net
      prefix = '';
      break;
    case 3: // ropsten test net
      prefix = 'ropsten.';
      break;
    case 4: // rinkeby test net
      prefix = 'rinkeby.';
      break;
    case 5: // goerli test net
      prefix = 'goerli.';
      break;
    case 42: // kovan test net
      prefix = 'kovan.';
      break;
    default:
      prefix = null;
  }
  return prefix;
};
