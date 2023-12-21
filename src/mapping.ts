//@ts-ignore
import { Bytes, Block, ByteArray } from "@hyperoracle/zkgraph-lib";
import { ethscriptionsProtocolCreateEthscription } from "./types/ethscriptionsProtocolCreateEthscription";

export function handleBlocks(blocks: Block[]): Bytes {
  const events = blocks[0].events;
  let resultBytes: Bytes = Bytes.empty();
  for(let i = 0; i < events.length; i++) {
    const Ethscription = ethscriptionsProtocolCreateEthscription.fromEvent(events[i]);
    const byteArrayEthscription = ByteArray.fromHexString(
      Ethscription.contentURI.toHexString().slice(128)
    );
    resultBytes = Bytes.fromByteArray(resultBytes.concat(byteArrayEthscription));
    resultBytes = Bytes.fromByteArray(
      resultBytes.concat(byteArrayEthscription)
    );
  }
  return resultBytes;
}
