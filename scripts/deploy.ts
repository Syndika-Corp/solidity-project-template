/*
  Deploy all contracts at one script
*/

import { deployLock } from '../deploy/lock';

export async function deploy() {
  await deployLock();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
