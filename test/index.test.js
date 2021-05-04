const assert = require('assert');
const {
  createAccountLink,
  createCustomAccountLink,
  createExplorerLink,
  createCustomExplorerLink,
  createTokenTrackerLink,
  createCustomTokenTrackerLink,
  createExplorerLinkForChain,
  createAccountLinkForChain,
  createTokenTrackerLinkForChain,
  getBlockExplorerUrlForTx,
} = require('../dist');

// `https://${prefix}etherscan.io/address/${address}`
describe('account-link', function () {
  describe('by networkId', function () {
    it('should handle mainnet correctly', function () {
      const result = createAccountLink('foo', '1');
      assert.strictEqual(result, 'https://etherscan.io/address/foo', 'should handle mainnet');
    });

    it('should handle ropsten correctly', function () {
      const result = createAccountLink('foo', '3');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/address/foo', 'should handle ropsten');
    });

    it('should have null as a prefix', function () {
      const result = createAccountLink('foo', '3234');
      assert.strictEqual(result, '', 'should return an empty string');
    });
  });

  describe('by chainId', function () {
    it('should handle mainnet correctly', function () {
      const result = createAccountLinkForChain('foo', '0x1');
      assert.strictEqual(result, 'https://etherscan.io/address/foo', 'should handle mainnet');
    });

    it('should handle ropsten correctly', function () {
      const result = createAccountLinkForChain('foo', '0x3');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/address/foo', 'should handle ropsten');
    });

    it('should have null as a prefix', function () {
      const result = createAccountLinkForChain('foo', '0xca2');
      assert.strictEqual(result, '', 'should return an empty string');
    });
  });

  it('should handle customNetwork url correctly', function () {
    const result = createCustomAccountLink('foo', 'https://data-seed-prebsc-1-s1.binance.org:8545');
    assert.strictEqual(result, 'https://data-seed-prebsc-1-s1.binance.org:8545/address/foo', 'should return binance testnet address url');
  });
});

// `https://${prefix}etherscan.io/tx/${hash}`
describe('explorer-link', function () {
  describe('by networkId', function () {
    it('should handle mainnet correctly', function () {
      const result = createExplorerLink('foo', '1');
      assert.strictEqual(result, 'https://etherscan.io/tx/foo', 'should handle mainnet');
    });

    it('should handle ropsten correctly', function () {
      const result = createExplorerLink('foo', '3');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/tx/foo', 'should handle ropsten');
    });

    it('should have null as a prefix', function () {
      const result = createExplorerLink('foo', '10');
      assert.strictEqual(result, '', 'should return an empty string');
    });
  });

  describe('by chainId', function () {
    it('should handle mainnet correctly', function () {
      const result = createExplorerLinkForChain('foo', '0x1');
      assert.strictEqual(result, 'https://etherscan.io/tx/foo', 'should handle mainnet');
    });

    it('should handle ropsten correctly', function () {
      const result = createExplorerLinkForChain('foo', '0x3');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/tx/foo', 'should handle ropsten');
    });

    it('should have null as a prefix', function () {
      const result = createExplorerLinkForChain('foo', '0xa');
      assert.strictEqual(result, '', 'should return an empty string');
    });
  });

  it('should handle customNetwork url correctly', function () {
    const result = createCustomExplorerLink('foo', 'https://data-seed-prebsc-1-s1.binance.org:8545');
    assert.strictEqual(result, 'https://data-seed-prebsc-1-s1.binance.org:8545/tx/foo', 'should return binance testnet transaction url');
  });
});

/**
 * `https://${prefix}etherscan.io/token/${tokenAddress}${
 *    holderAddress ? `?a=${ holderAddress }` : ''
 *  }`
 */
describe('token-tracker-link', function () {
  describe('by networkId', function () {
    it('should handle mainnet correctly (no account)', function () {
      const result = createTokenTrackerLink('foo', '1');
      assert.strictEqual(result, 'https://etherscan.io/token/foo', 'should handle mainnet');
    });

    it('should handle ropsten correctly (no account)', function () {
      const result = createTokenTrackerLink('foo', '3');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/token/foo', 'should handle ropsten');
    });

    it('should handle mainnet correctly (account)', function () {
      const result = createTokenTrackerLink('foo', '1', '0xabc');
      assert.strictEqual(result, 'https://etherscan.io/token/foo?a=0xabc', 'should handle mainnet');
    });

    it('should handle ropsten correctly (account)', function () {
      const result = createTokenTrackerLink('foo', '3', '0xabc');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/token/foo?a=0xabc', 'should handle ropsten');
    });

    it('should null has a prefix', function () {
      const result = createTokenTrackerLink('foo', '3654', '0xabc');
      assert.strictEqual(result, '', 'should return an empty string');
    });
  });

  describe('by chainId', function () {
    it('should handle mainnet correctly (no account)', function () {
      const result = createTokenTrackerLinkForChain('foo', '0x1');
      assert.strictEqual(result, 'https://etherscan.io/token/foo', 'should handle mainnet');
    });

    it('should handle ropsten correctly (no account)', function () {
      const result = createTokenTrackerLinkForChain('foo', '0x3');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/token/foo', 'should handle ropsten');
    });

    it('should handle mainnet correctly (account)', function () {
      const result = createTokenTrackerLinkForChain('foo', '0x1', '0xabc');
      assert.strictEqual(result, 'https://etherscan.io/token/foo?a=0xabc', 'should handle mainnet');
    });

    it('should handle ropsten correctly (account)', function () {
      const result = createTokenTrackerLinkForChain('foo', '0x3', '0xabc');
      assert.strictEqual(result, 'https://ropsten.etherscan.io/token/foo?a=0xabc', 'should handle ropsten');
    });

    it('should null has a prefix', function () {
      const result = createTokenTrackerLinkForChain('foo', '0xe46', '0xabc');
      assert.strictEqual(result, '', 'should return an empty string');
    });

    it('should handle customNetwork url correctly', function () {
      const result = createCustomTokenTrackerLink('foo', 'https://data-seed-prebsc-1-s1.binance.org:8545/');
      assert.strictEqual(result, 'https://data-seed-prebsc-1-s1.binance.org:8545/token/foo', 'should return binance testnet token url');
    });
  });

/*
 * Test getBlockExplorerUrlForTx, 
 * Which applies correct explorer-link generator based on args
 */  
  const getBlockExplorerUrlForTxTests = [
    {
      expected: 'https://etherscan.io/tx/0xabcd',
      transaction: {
        metamaskNetworkId: '1',
        hash: '0xabcd',
      },
    },
    {
      expected: 'https://ropsten.etherscan.io/tx/0xdef0',
      transaction: {
        metamaskNetworkId: '3',
        hash: '0xdef0',
      },
      rpcPrefs: {},
    },
    {
      // test handling of `blockExplorerUrl` for a custom RPC
      expected: 'https://block.explorer/tx/0xabcd',
      transaction: {
        metamaskNetworkId: '31',
        hash: '0xabcd',
      },
      rpcPrefs: {
        blockExplorerUrl: 'https://block.explorer',
      },
    },
    {
      // test handling of trailing `/` in `blockExplorerUrl` for a custom RPC
      expected: 'https://another.block.explorer/tx/0xdef0',
      transaction: {
        networkId: '33',
        hash: '0xdef0',
      },
      rpcPrefs: {
        blockExplorerUrl: 'https://another.block.explorer/',
      },
    },
    {
      expected: 'https://etherscan.io/tx/0xabcd',
      transaction: {
        chainId: '0x1',
        hash: '0xabcd',
      },
    },
    {
      expected: 'https://ropsten.etherscan.io/tx/0xdef0',
      transaction: {
        chainId: '0x3',
        hash: '0xdef0',
      },
      rpcPrefs: {},
    },
    {
      // test handling of `blockExplorerUrl` for a custom RPC
      expected: 'https://block.explorer/tx/0xabcd',
      transaction: {
        chainId: '0x1f',
        hash: '0xabcd',
      },
      rpcPrefs: {
        blockExplorerUrl: 'https://block.explorer',
      },
    },
    {
      // test handling of trailing `/` in `blockExplorerUrl` for a custom RPC
      expected: 'https://another.block.explorer/tx/0xdef0',
      transaction: {
        chainId: '0x21',
        hash: '0xdef0',
      },
      rpcPrefs: {
        blockExplorerUrl: 'https://another.block.explorer/',
      },
    },
  ];
  
  describe('getBlockExplorerUrlForTx', function () {
    getBlockExplorerUrlForTxTests.forEach((test) => {
      it(`should return '${test.expected}' for transaction with hash: '${test.transaction.hash}'`, function () {
        assert.strictEqual(
          getBlockExplorerUrlForTx(test.transaction, test.rpcPrefs),
          test.expected,
        );
      });
    });
  });
});
