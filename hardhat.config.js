/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
// require("@nomicfoundation/hardhat-toolbox")

const ALCHEMY_API_KEY = "liRjjrRhM85if04BYb8eGpagn7m7vTJl";
const SEPOLIA_PRIVATE_KEY =
  "35e2427f11068147ed2ed91d4556c6f516f26f2f1769b09c41923a8a29bd58a3";
module.exports = {
  solidity: "0.8.14",
  etherscan:{
    apikey:"KG379D3QGV9P6WA6DS1AFRHYRA3J1E41C6"
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};

