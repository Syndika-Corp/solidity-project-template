import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-docgen';
import 'solidity-coverage';
import 'dotenv/config';

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      /*
        Local chain configuration
      */
      // forking: {
      //   url: `${process.env.FORK_PROVIDER}`,
      //   blockNumber: 17335928
      // },
      // mining: {
      //   auto: false,
      //   interval: [10000, 13000],
      //   mempool: {
      //     order: "priority",
      //   },

      // },
      // blockGasLimit: 30000000,
      // minGasPrice: 1_000_000_000,
      // hardfork: 'berlin',
      // gas: 20000000000
      // accounts: []
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    /*
      Uncomment networks to be used
    */
    // mainnet: {
    //   url: `${process.env.MAINNET_PROVIDER}`,
    //   accounts: [`${process.env.MAINNET_PK}`]
    // },
    // goerli: {
    //   url: `${process.env.GOERLI_PROVIDER}`,
    //   accounts: [`${process.env.GOERLI_PK}`]
    // },
    // sepolia: {
    //   url: `${process.env.SEPOLIA_PROVIDER}`,
    //   accounts: [`${process.env.SEPOLIA_PK}`]
    // },
    // polygon: {
    //   url: `${process.env.POLYGON_PROVIDER}`,
    //   accounts: [`${process.env.POLYGON_PK}`]
    // },
    // mumbai: {
    //   url: `${process.env.MUMBAI_PROVIDER}`,
    //   accounts: [`${process.env.MUMBAI_PK}`]
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: "0.8.18",
  docgen: {}, // if necessary to customize config
};

export default config;
