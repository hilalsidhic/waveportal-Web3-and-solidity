
const Main = async () => {
    const [owner,randomPerson]= await hre.ethers.getSigners();
    const WaveContractFactory = await hre.ethers.getContractFactory("wavePortal");
    const WaveContract = await WaveContractFactory.deploy();
    await WaveContract.deployed();
    console.log("Deployed contract to:", WaveContract.address);
    console.log("Contract Deployed by:",owner.address);
    let wavecount;
    wavecount = await WaveContract.getTotalWaves();
    
    let wavetxn;
    wavetxn = await WaveContract.wave();
    await wavetxn.wait();

    wavetxn = await WaveContract.connect(randomPerson).wave();
    await wavetxn.wait();

    wavecount =  await WaveContract.getTotalWaves();
    
};

const runMain = async () => {
    try {   
        await Main();
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};
runMain();