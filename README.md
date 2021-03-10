# Etherscan Link Generator

## Installation

`npm install '@metamask/etherscan-link' -S`

## Usage

```javascript
const etherscanLink = require('@metamask/etherscan-link')
const networkId = '1'
const chainId = '0x1'
const account = '0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825'
const accountLink = etherscanLink.createAccountLink(account, networkId)
const accountLinkForChain = etherscanLink.createAccountLinkForChain(account, chainId)

const hash = '0xa7540793de6b6ca7d3c948a8cc0a163bf107f5535a69353162ea9dec7ee7beca'
const txLink = etherscanLink.createExplorerLink(hash, networkId)
const txtLinkForChain = etherscanLink.createExplorerLinkForChain(hash, chainId)

const token = '0xdac17f958d2ee523a2206206994597c13d831ec7'
const tokenTrackerLink = etherscanLink.createTokenTrackerLink(token, networkId)
// You can also track token balances by account
const accountTokenTrackerLink = etherscanLink.createTokenTrackerLink(token, networkId, account)

const accountTokenTrackerLinkForChain = etherscanLink.createTokenTrackerLinkForChain(token, chainId, account)

// Create urls for interacting with custom networks
const customNetworkUrl = 'https://customnetwork.com/'

const customtTokenTrackerLink = etherscanLink.createCustomTokenTrackerLink(token, customNetworkUrl)

const customAccountLink = etherscanLink.createCustomAccountLink(account, customNetworkUrl)

const customExplorerLink = etherscanLink.createCustomExplorerLink(hash, customNetworkUrl)
```
