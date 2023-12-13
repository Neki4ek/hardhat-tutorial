export default async function transfer(contract, signer, address, amount) {
    const trx = await contract.connect(signer).transfer(address, amount);
    console.log("Transaction: ", trx);
    await trx.wait();
  }