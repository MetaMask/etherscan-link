const assert = require('assert')
const {
  createAccountLink,
  createExplorerLink,
  createTokenTrackerLink,
} = require('../dist')

// `https://${prefix}etherscan.io/address/${address}`
describe('account-link', function () {
  it('should handle mainnet correctly', function () {
    const result = createAccountLink('foo', '1')
    assert.strictEqual(result, 'https://etherscan.io/address/foo', 'should handle mainnet')
  })

  it('should handle ropsten correctly', function () {
    const result = createAccountLink('foo', '3')
    assert.strictEqual(result, 'https://ropsten.etherscan.io/address/foo', 'should handle ropsten')
  })

  it('should have null as a prefix', function () {
    const result = createAccountLink('foo', '3234')
    assert.strictEqual(result, '', 'should return an empty string')
  })

  it('should handle customNetwork url correctly', function () {
    const result = createAccountLink('foo', '3234', 'https://data-seed-prebsc-1-s1.binance.org:8545')
    assert.strictEqual(result, 'https://data-seed-prebsc-1-s1.binance.org:8545/address/foo', 'should return binance testnet address url')
  })
})

// `https://${prefix}etherscan.io/tx/${hash}`
describe('explorer-link', function () {
  it('should handle mainnet correctly', function () {
    const result = createExplorerLink('foo', '1')
    assert.strictEqual(result, 'https://etherscan.io/tx/foo', 'should handle mainnet')
  })

  it('should handle ropsten correctly', function () {
    const result = createExplorerLink('foo', '3')
    assert.strictEqual(result, 'https://ropsten.etherscan.io/tx/foo', 'should handle ropsten')
  })

  it('should have null as a prefix', function () {
    const result = createExplorerLink('foo', '10')
    assert.strictEqual(result, '', 'should return an empty string')
  })

  it('should handle customNetwork url correctly', function () {
    const result = createExplorerLink('foo', '3', 'https://data-seed-prebsc-1-s1.binance.org:8545')
    assert.strictEqual(result, 'https://data-seed-prebsc-1-s1.binance.org:8545/tx/foo', 'should return binance testnet transaction url')
  })
})

/**
 * `https://${prefix}etherscan.io/token/${tokenAddress}${
 *    holderAddress ? `?a=${ holderAddress }` : ''
 *  }`
 */
describe('token-tracker-link', function () {
  it('should handle mainnet correctly (no account)', function () {
    const result = createTokenTrackerLink('foo', '1')
    assert.strictEqual(result, 'https://etherscan.io/token/foo', 'should handle mainnet')
  })

  it('should handle ropsten correctly (no account)', function () {
    const result = createTokenTrackerLink('foo', '3')
    assert.strictEqual(result, 'https://ropsten.etherscan.io/token/foo', 'should handle ropsten')
  })

  it('should handle mainnet correctly (account)', function () {
    const result = createTokenTrackerLink('foo', '1', '0xabc')
    assert.strictEqual(result, 'https://etherscan.io/token/foo?a=0xabc', 'should handle mainnet')
  })

  it('should handle ropsten correctly (account)', function () {
    const result = createTokenTrackerLink('foo', '3', '0xabc')
    assert.strictEqual(result, 'https://ropsten.etherscan.io/token/foo?a=0xabc', 'should handle ropsten')
  })

  it('should null has a prefix', function () {
    const result = createTokenTrackerLink('foo', '3654', '0xabc')
    assert.strictEqual(result, '', 'should return an empty string')
  })

  it('should handle customNetwork url correctly', function () {
    const result = createTokenTrackerLink('foo', '3', '0xabc', 'https://data-seed-prebsc-1-s1.binance.org:8545')
    assert.strictEqual(result, 'https://data-seed-prebsc-1-s1.binance.org:8545/token/foo?a=0xabc', 'should return binance testnet token url')
  })
})
