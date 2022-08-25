// function deployFunc() {
//     console.log("Hi!")
// }

// module.exports.default = deployFunc

///////////////////////////

// module.exports = async (hre) => {
//     const {getNamedAccouts, deployments} = hre
// }

/////////////////////////

const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    //mock

    let ethUsdPriceFeedAddress
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    //deployar contrato

    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args, //put price feed address
        log: true,
    })

    if (!developmentChains.includes(network.name)) {
        await verify(fundMe.address, args)
    }
    log("--------------------------------------")
}

module.exports.tags = ["all", "fundme"]
