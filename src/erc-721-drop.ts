import { BigInt } from "@graphprotocol/graph-ts";
import {
  Sale as SaleEvent,
  Transfer as TransferEvent,
} from "../generated/ERC721Drop/ERC721Drop";
import {
  EditionNFT,
  DropNFT,
  EditionCollection,
  DropCollection,
} from "../generated/schema";

export function handleSale(event: SaleEvent): void {
  let edition = new EditionCollection(event.address.toHexString());
  if (edition) {
    edition.currentTokenId = edition.currentTokenId.plus(BigInt.fromI32(1));
    let editionNFT = new EditionNFT(
      event.address
        .toHexString()
        .concat("-")
        .concat(edition.currentTokenId.toString())
    );
    editionNFT.editionAddress = event.address;
    editionNFT.owner = event.transaction.from;
    editionNFT.tokenId = edition.currentTokenId;
    editionNFT.save();
  } else {
    let drop = new DropCollection(event.address.toHexString());
    if (drop) {
      drop.currentTokenId = drop.currentTokenId.plus(BigInt.fromI32(1));
      let dropNFT = new DropNFT(
        event.address
          .toHexString()
          .concat("-")
          .concat(drop.currentTokenId.toString())
      );
      dropNFT.dropAddress = event.address;
      dropNFT.owner = event.transaction.from;
      dropNFT.tokenId = drop.currentTokenId;
      dropNFT.save();
    }
  }
}

export function handleTransfer(event: TransferEvent): void {
  let editionNft = EditionNFT.load(
    event.address
      .toHexString()
      .concat("-")
      .concat(event.params.tokenId.toString())
  );
  if (editionNft) {
    editionNft.owner = event.params.to;
    editionNft.save();
  } else {
    let dropNft = DropNFT.load(
      event.address
        .toHexString()
        .concat("-")
        .concat(event.params.tokenId.toString())
    );
    if (dropNft) {
      dropNft.owner = event.params.to;
      dropNft.save();
    }
  }
}
