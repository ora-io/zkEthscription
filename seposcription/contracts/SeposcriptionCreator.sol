// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract SeposcriptionCreator {
    event ethscriptions_protocol_CreateEthscription(
        address indexed initialOwner,
        string contentURI
    );
    function createSeposcription(string calldata contentURI) public {
        emit ethscriptions_protocol_CreateEthscription(msg.sender, contentURI);
    }
}
