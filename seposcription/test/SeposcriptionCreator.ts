import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SeposcriptionCreator", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySeposcriptionFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Creator = await ethers.getContractFactory("SeposcriptionCreator");
    const creator = await Creator.deploy();

    return { creator, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("upload a image", async function () {
      const { creator } = await loadFixture(deploySeposcriptionFixture);

      const testImageDataUrl =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEABDAEMAQwBDAEcAQwBLAFMAUwBLAGgAcABkAHAAaACaAI0AgQCBAI0AmgDpAKYAswCmALMApgDpAWIA3AECANwA3AECANwBYgE4AXsBNAEfATQBewE4AjIBuQGHAYcBuQIyAokCIQIEAiECiQMSAr8CvwMSA94DrAPeBQ4FDgbLEQBDAEMAQwBDAEcAQwBLAFMAUwBLAGgAcABkAHAAaACaAI0AgQCBAI0AmgDpAKYAswCmALMApgDpAWIA3AECANwA3AECANwBYgE4AXsBNAEfATQBewE4AjIBuQGHAYcBuQIyAokCIQIEAiECiQMSAr8CvwMSA94DrAPeBQ4FDgbL/8IAEQgATABMAwEiAAIRAQMRAf/EACwAAAMBAQAAAAAAAAAAAAAAAAACAwEEAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAOAAAYUuhMYFADcsV6I7Lk6TXMbLIZuIdfL0nVCTS93PEyjRTREZbDo56FVzQwF1cBVBAAHQKEwZQAA//8QAJBABAAIBBAICAgMAAAAAAAAAAQACEQMSITEQQSAiEzBRYXH/2gAIAQEAAT8A/bTs4zLaRmOn/DNjGqfAMzYUqZJXS6VmE1XMrQauXmNX3xxMLmWMPmlUjpatoN+swpbljkzglyoUBn9e49+CUfox1qJM5f8AZXqa2JhjVMS54r2RfqBADm83txcdT8uOmKtG0blvUxZN3olvBPUNItRtuja0Wt6yg24zxL0K4ww5qy3kvN0qC8uCPC85mJiKHxGFgm+b42f3f//EABcRAAMBAAAAAAAAAAAAAAAAAAERMAD/2gAIAQIBAT8AmAska//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z";
      await creator.createSeposcription(testImageDataUrl);
      creator.on("ethscriptions_protocol_CreateEthscription", (_initialOwner: any, contentUrl: string) => {
        console.log(contentUrl);
      });
    });
  });
});
