async function main() {
    // const [deployer] = await ethers.getSigners();
  
    const Token = await hre.ethers.getContractFactory("Lottery");
    const token = await Token.deploy();
    await token.deployed();
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });