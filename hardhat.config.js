require("@nomicfoundation/hardhat-toolbox")
require("solhint")
require("hardhat-deploy")
require("hardhat-gas-reporter")
//require("dotenv").config()

const COINMARKETCAP_API_KEY = process.nextTick.COINMARKETCAP_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    //solidity: "0.8.8",

    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },

    networks: {
        // rinkeby: {
        //     //url: RINKEBY_RPC_URL,//No esta
        // },
    },

    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        //coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}
