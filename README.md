# Solidity project template

[![Coverage Status](https://codecov.io/gh/Syndika-Corp/solidity-project-template/branch/main/graph/badge.svg)](https://codecov.io/gh/Syndika-Corp/solidity-project-template)


> Template to kickstart a solidity project

## Project requirements

- Yarn >= v1.22.0
- Node >= v18.0.0

## Before start...

1. Clone this repo `git clone git@github.com:apm1001/solidity-repo-test.git` or create a new repository from this template in github.
2. Adjust `package.json` if necessary:
    - name
    - version
    - description
    - author
    - license
3. Install all modules using `yarn`
4. Create `.env` file and complete it with your variables according to `.env.example`
5. Enjoy coding!

## Project Structure

This template consists of the following folders:

- `addresses` - used for storing addresses of the contracts in JSON format segregated by the network, e.g. for `Lock` contract, the deployed instances on goerli and mainnet networks will be stored in `addresses/Lock.json` directory as follows:
  
    ```
    {
        "goerli": "0xEA71eCbaf87D93092bc21139000c1348858200d2",
        "mainnet": "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c"
    }
    ```
- `contracts` - utilized for storing smart-contracts written in Solidity as `.sol` files
- `deploy` - contains exported functions for smart-contract deployment, each contract should have its own TS file for this purpose
- `docs` - holds docgen and other artifacts relevant for smart-contract documentation
- `scripts` - contains entry-point files for smart-contract deployment and address logging, can be augmented with new script files correspondingly
- `test` - contains all modules for smart-contract testing
- `typechain-types` - generated contract types by typechain
- `coverage` - the test coverage report

All necessary constants for deployment separated by network name can be stored in `./constants.ts`.

This project comes with a sample contract, a test for that contract, and relevant scripts for contract deployment.

---

## Scripts

### Install dependencies

`yarn` or `yarn install`

### Run local node

`yarn chain`

### Get test coverage

`yarn coverage`

### Generate contracts' docs

`yarn docs`

### Compile contracts

`yarn compile`

### Build package

`yarn build`

### Deploy contracts

`yarn deploy <network_name>`

### Run tests

`yarn test`


---

## Publishing NPM package

> The package stores contract `types` and `deployment infrormation` to integrate the contracts in other Dapp parts

- NPM account login: `yarn login`

- Publish package: `yarn publish --access restricted`
