import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Token.sol/Token';

export default async function deployContract(signer) {
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );
  console.log(factory);
  return factory.deploy();
}
