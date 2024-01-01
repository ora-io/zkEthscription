import { ethers } from "hardhat";

async function main() {

  const creator = await ethers.deployContract(
    "SeposcriptionCreator"
  );

  await creator.waitForDeployment();

  const testImageDataUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEABDAEMAQwBDAEcAQwBLAFMAUwBLAGgAcABkAHAAaACaAI0AgQCBAI0AmgDpAKYAswCmALMApgDpAWIA3AECANwA3AECANwBYgE4AXsBNAEfATQBewE4AjIBuQGHAYcBuQIyAokCIQIEAiECiQMSAr8CvwMSA94DrAPeBQ4FDgbLEQBDAEMAQwBDAEcAQwBLAFMAUwBLAGgAcABkAHAAaACaAI0AgQCBAI0AmgDpAKYAswCmALMApgDpAWIA3AECANwA3AECANwBYgE4AXsBNAEfATQBewE4AjIBuQGHAYcBuQIyAokCIQIEAiECiQMSAr8CvwMSA94DrAPeBQ4FDgbL/8IAEQgATABMAwEiAAIRAQMRAf/EACwAAAMBAQAAAAAAAAAAAAAAAAACAwEEAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAOAAAYUuhMYFADcsV6I7Lk6TXMbLIZuIdfL0nVCTS93PEyjRTREZbDo56FVzQwF1cBVBAAHQKEwZQAA//8QAJBABAAIBBAICAgMAAAAAAAAAAQACEQMSITEQQSAiEzBRYXH/2gAIAQEAAT8A/bTs4zLaRmOn/DNjGqfAMzYUqZJXS6VmE1XMrQauXmNX3xxMLmWMPmlUjpatoN+swpbljkzglyoUBn9e49+CUfox1qJM5f8AZXqa2JhjVMS54r2RfqBADm83txcdT8uOmKtG0blvUxZN3olvBPUNItRtuja0Wt6yg24zxL0K4ww5qy3kvN0qC8uCPC85mJiKHxGFgm+b42f3f//EABcRAAMBAAAAAAAAAAAAAAAAAAERMAD/2gAIAQIBAT8AmAska//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z";
  await creator.createSeposcription(testImageDataUrl);
  console.log("[+] aba?")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
