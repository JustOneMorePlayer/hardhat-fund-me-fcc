const { run } = require("hardhat")

const verify = async (contrractAddress, args) => {
    log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contrractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            log("Already Verified!")
        } else {
            log(e)
        }
    }
}

module.exports = { verify }
