import { BigInt } from "@graphprotocol/graph-ts";
import {
  DropCreated,
  EditionCreated,
} from "../generated/AtestamintV2/AtestamintV2";
import {
  EditionCollection,
  DropCollection,
  Vault as VaultEntity,
} from "../generated/schema";
import { Vault, ERC721Drop } from "../generated/templates";

export function handleDropCreated(event: DropCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let drop = DropCollection.load(event.params.dropAddress.toHexString());

  if (!drop) {
    drop = new DropCollection(event.params.dropAddress.toHexString());
    drop.creator = event.params.creator;
    drop.dropAddress = event.params.dropAddress;
    drop.editionSize = event.params.editionSize;
    drop.vaultAddress = event.params.vaultAddress;
    drop.metadataContractURI = event.params.metadataContractURI;
    drop.currentTokenId = BigInt.fromI32(0);
    drop.metadataBaseURI = event.params.metadataURIBase;
    drop.save();
    Vault.create(event.params.vaultAddress);
    ERC721Drop.create(event.params.dropAddress);
    let vault = VaultEntity.load(event.params.vaultAddress.toHexString());
    if (!vault) {
      vault = new VaultEntity(event.params.vaultAddress.toHexString());
      vault.editionSize = event.params.editionSize;
      vault.isUnlocked = false;
      vault.nftAddress = event.params.dropAddress;
      vault.positiveVotes = BigInt.fromI32(0);
      vault.save();
    }
  }
}

export function handleEditionCreated(event: EditionCreated): void {
  let edition = EditionCollection.load(
    event.params.editionAddress.toHexString()
  );

  if (!edition) {
    edition = new EditionCollection(event.params.editionAddress.toHexString());
    edition.editionAddress = event.params.editionAddress;
    edition.editionSize = event.params.editionSize;
    edition.metadataContractURI = event.params.metadataContractURI;
    edition.vaultAddress = event.params.vaultAddress;
    edition.creator = event.params.creator;
    edition.currentTokenId = BigInt.fromI32(0);
    edition.imageURI = event.params.imageURI;
    edition.save();
    Vault.create(event.params.vaultAddress);
    ERC721Drop.create(event.params.editionAddress);
    let vault = VaultEntity.load(event.params.vaultAddress.toHexString());
    if (!vault) {
      vault = new VaultEntity(event.params.vaultAddress.toHexString());
      vault.editionSize = event.params.editionSize;
      vault.nftAddress = event.params.editionAddress;
      vault.isUnlocked = false;
      vault.positiveVotes = BigInt.fromI32(0);
      vault.save();
    }
  }
}

// Entities only exist after they have been saved to the store;
// `null` checks allow to create entities on demand
// if (!entity) {
//   entity = new ExampleEntity(event.transaction.from);

//   // Entity fields can be set using simple assignments
//   entity.count = BigInt.fromI32(0);
// }

// BigInt and BigDecimal math are supported
// entity.count = entity.count + BigInt.fromI32(1);

// // Entity fields can be set based on event parameters
// entity.creator = event.params.creator;
// entity.dropAddress = event.params.dropAddress;

// // Entities can be written to the store with `.save()`
// entity.save();

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.SETUP_VAULT_METHOD_ID(...)
// - contract._deployProxy(...)
// - contract.admin(...)
// - contract.i_zoraNftFactory(...)
// - contract.nonce(...)
// - contract.schemaId(...)
// - contract.vaultImplementation(...)