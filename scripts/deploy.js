const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deployer:", deployer.address);
    console.log("Deployer Balance:", accountBalance.toString());

    const WaveContractFactory = await hre.ethers.getContractFactory("wavePortal");
    const WaveContract = await WaveContractFactory.deploy();
    await WaveContract.deployed();
    console.log("Waveportal address :", WaveContract.address);
}

const runmain = async ()=>{
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}
runmain();