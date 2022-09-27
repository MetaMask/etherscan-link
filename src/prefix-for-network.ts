export = function getPrefixForNetwork(networkId: string): string | null {
  // eslint-disable-next-line radix
  const net = parseInt(networkId);
  let prefix;

  switch (net) {
    case 1: // main net
      prefix = '';
      break;
    case 5: // goerli test net
      prefix = 'goerli.';
      break;
    case 11155111: // sepolia test net
      prefix = 'sepolia.';
      break;
    default:
      prefix = null;
  }
  return prefix;
};
