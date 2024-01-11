//@ts-ignore
import { Bytes, Block } from "@hyperoracle/zkgraph-lib";
import { ethscriptionsProtocolCreateEthscription } from "./types/ethscriptionsProtocolCreateEthscription";

export function handleBlocks(blocks: Block[]): Bytes {
  const events = blocks[0].events;
  const padBytes: Bytes = Bytes.fromI32BigEndian(22345678);
  let resultBytes: Bytes = Bytes.fromI32BigEndian(22345678);
  for(let i = 0; i < events.length; i++) {
    const Ethscription = ethscriptionsProtocolCreateEthscription.fromEvent(events[i]);
    const byteArrayEthscription = Ethscription.contentURI.slice(64);
    resultBytes = Bytes.fromByteArray(resultBytes.concat(byteArrayEthscription));
    resultBytes = Bytes.fromByteArray(resultBytes.concat(padBytes));
  }
  return resultBytes;
}
