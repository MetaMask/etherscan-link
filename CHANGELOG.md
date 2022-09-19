# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [2.2.0] - 2022-09-19
### Added
- Add support for the Sepolia network ([#60](https://github.com/MetaMask/etherscan-link/pull/60))

## [2.1.0] - 2021-05-07
### Added

- Add methods (getBlockExplorerLink, getAccountLink, getTokenTrackerLink) that select correct block explorer link format based on input params ([#44](https://github.com/MetaMask/etherscan-link/pull/44))

## [2.0.0] - 2021-03-11

### Added

- Add support for custom block explorer URL generation ([#31](https://github.com/MetaMask/etherscan-link/pull/31))

### Changed

- [**BREAKING**]: Drop support for Node.js versions below v10 ([#38](https://github.com/MetaMask/etherscan-link/pull/38))

## [1.5.0] - 2021-03-08

### Added

- Add forChain corollaries for all methods for URL generation by chainId ([#32](https://github.com/MetaMask/etherscan-link/pull/32))

## [1.4.1] - 2021-02-16

### Changed

- Return an empty string for unrecognized networks ([#29](https://github.com/MetaMask/etherscan-link/pull/29))

## [1.4.0] - 2020-12-01

### Added

- Add support for Goerli ([#26](https://github.com/MetaMask/etherscan-link/pull/26))

## [1.3.0] - 2020-11-18

### Added

- Add `createTokenTrackerLink` ([#23](https://github.com/MetaMask/etherscan-link/pull/23))

## [1.2.0] - 2020-10-29

### Changed

- Convert project to TypeScript ([#18](https://github.com/MetaMask/etherscan-link/pull/18))

## [1.1.0] - 2020-04-05

### Changed

- Use HTTPS for links ([#2](https://github.com/MetaMask/etherscan-link/pull/2))
- Ignore extraneous files when publishing ([#12](https://github.com/MetaMask/etherscan-link/pull/12))
