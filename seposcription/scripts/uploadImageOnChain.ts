import { ethers } from "hardhat";

async function main() {
  
  const creator = await ethers.getContractAt(
    "SeposcriptionCreator",
    "0xfa002dc692d045afde265d5eac09d012c1af50e8"
  );
  // await creator.attach("0xfa002dc692d045afde265d5eac09d012c1af50e8");

  // 951 false
  // 475 false
  // 238 false
  // 119 false
  // 59

  const testImageDataUrl =
    "hello";
  const result = await creator.createSeposcription(testImageDataUrl);
  console.log("https://sepolia.etherscan.io/tx/" + result.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
