import { Bytes, Address, Event } from "@hyperoracle/zkgraph-lib";

export class ethscriptionsProtocolCreateEthscription {
  public initialOwner: Address;
  public contentURI: Bytes;
  constructor(initialOwner: Address, contentURI: Bytes) {
    this.initialOwner = initialOwner;
    this.contentURI = contentURI;
  }

  public static fromEvent(event: Event): ethscriptionsProtocolCreateEthscription {
    const initialOwner = Address.fromBytes(event.topic1);
    const contentURI = event.data;
    return new ethscriptionsProtocolCreateEthscription(
      initialOwner,
      contentURI
    )
  }
}
