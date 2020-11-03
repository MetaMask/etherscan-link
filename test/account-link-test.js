const assert = require('assert')
const linkGen = require('../dist/explorer-link')

describe('explorer-link', function () {
  it('adds ropsten prefix to ropsten test network', function () {
    const result = linkGen('hash', '3')
    assert.notStrictEqual(result.indexOf('ropsten'), -1, 'ropsten injected')
  })

  it('adds kovan prefix to kovan test network', function () {
    const result = linkGen('hash', '42')
    assert.notStrictEqual(result.indexOf('kovan'), -1, 'kovan injected')
  })
})

