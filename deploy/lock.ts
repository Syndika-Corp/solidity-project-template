/*
  The example of deploy script for particular contract
*/

import { ethers, network } from "hardhat";
import { writeAddress } from "../scripts/address-log";
import { DEPLOY_CONSTANTS } from "../constants";
import { Contract } from "ethers";

export async function deployLock(): Promise<Contract> {
  const [signer] = await ethers.getSigners();

  const {
    unlockTime
  } = DEPLOY_CONSTANTS[network.name];

  console.log(`Deploying Lock...`);

  const contract = await ethers.deployContract("Lock", [unlockTime], signer);

  console.log(`Lock deployed at ${await contract.getAddress()}. Waiting confirmations...`);
  await contract.waitForDeployment();
  console.log(`Lock deployed successfully!`);
  await writeAddress('Lock', network.name, await contract.getAddress());

  return contract;
}
