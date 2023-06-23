import * as fs from 'fs'
import * as path from 'path';
import { FileNotFoundError } from './errors/file-not-found';

export async function writeAddress(
  contractName: string,
  networkName: string,
  address: string
) {
  const dirPath = path.join('./addresses');
  const filePath = path.join(dirPath, `${contractName}.json`);
  try {
    if (networkName === 'localhost' || networkName === 'hardhat') return;
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, function (err, data: Buffer) {
        var json = JSON.parse(data.toString());
        let text = JSON.stringify(json);
        let index = text.indexOf(networkName);
        if (index == -1) {
          text = text.slice(0, text.length - 1).concat(`,"${networkName}":"${address}"}`);
        } else {
          let startIndex = index + networkName.length + 3;
          text = text.replace(text.substring(startIndex, startIndex + 42), address);
        }

        fs.writeFileSync(filePath, text);
      })
    } else {
      // check if directory exists
      if (!fs.existsSync(dirPath)) {
        // create a directory
        fs.mkdir(dirPath, { recursive: true }, (err) => {
          if (err) throw err;
        });
      }
      const obj = {
        [networkName]: address
      }
      fs.writeFileSync(filePath, JSON.stringify(obj));
    }
  } catch (err) {
    throw new FileNotFoundError(filePath);
  }
}
