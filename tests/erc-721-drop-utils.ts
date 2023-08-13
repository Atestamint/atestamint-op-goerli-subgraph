import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  BeaconUpgraded,
  FundsReceived,
  FundsRecipientChanged,
  FundsWithdrawn,
  MetadataUpdate,
  MintComment,
  MintFeePayout,
  OpenMintFinalized,
  OwnerCanceled,
  OwnerPending,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Sale,
  SalesConfigChanged,
  Transfer,
  UpdatedMetadataRenderer,
  Upgraded
} from "../generated/ERC721Drop/ERC721Drop"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBatchMetadataUpdateEvent(
  _fromTokenId: BigInt,
  _toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_fromTokenId",
      ethereum.Value.fromUnsignedBigInt(_fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_toTokenId",
      ethereum.Value.fromUnsignedBigInt(_toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createFundsReceivedEvent(
  source: Address,
  amount: BigInt
): FundsReceived {
  let fundsReceivedEvent = changetype<FundsReceived>(newMockEvent())

  fundsReceivedEvent.parameters = new Array()

  fundsReceivedEvent.parameters.push(
    new ethereum.EventParam("source", ethereum.Value.fromAddress(source))
  )
  fundsReceivedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsReceivedEvent
}

export function createFundsRecipientChangedEvent(
  newAddress: Address,
  changedBy: Address
): FundsRecipientChanged {
  let fundsRecipientChangedEvent = changetype<FundsRecipientChanged>(
    newMockEvent()
  )

  fundsRecipientChangedEvent.parameters = new Array()

  fundsRecipientChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )
  fundsRecipientChangedEvent.parameters.push(
    new ethereum.EventParam("changedBy", ethereum.Value.fromAddress(changedBy))
  )

  return fundsRecipientChangedEvent
}

export function createFundsWithdrawnEvent(
  withdrawnBy: Address,
  withdrawnTo: Address,
  amount: BigInt,
  feeRecipient: Address,
  feeAmount: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawnBy",
      ethereum.Value.fromAddress(withdrawnBy)
    )
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawnTo",
      ethereum.Value.fromAddress(withdrawnTo)
    )
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "feeRecipient",
      ethereum.Value.fromAddress(feeRecipient)
    )
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )

  return fundsWithdrawnEvent
}

export function createMetadataUpdateEvent(_tokenId: BigInt): MetadataUpdate {
  let metadataUpdateEvent = changetype<MetadataUpdate>(newMockEvent())

  metadataUpdateEvent.parameters = new Array()

  metadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return metadataUpdateEvent
}

export function createMintCommentEvent(
  sender: Address,
  tokenContract: Address,
  tokenId: BigInt,
  quantity: BigInt,
  comment: string
): MintComment {
  let mintCommentEvent = changetype<MintComment>(newMockEvent())

  mintCommentEvent.parameters = new Array()

  mintCommentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  mintCommentEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContract",
      ethereum.Value.fromAddress(tokenContract)
    )
  )
  mintCommentEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  mintCommentEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  mintCommentEvent.parameters.push(
    new ethereum.EventParam("comment", ethereum.Value.fromString(comment))
  )

  return mintCommentEvent
}

export function createMintFeePayoutEvent(
  mintFeeAmount: BigInt,
  mintFeeRecipient: Address,
  success: boolean
): MintFeePayout {
  let mintFeePayoutEvent = changetype<MintFeePayout>(newMockEvent())

  mintFeePayoutEvent.parameters = new Array()

  mintFeePayoutEvent.parameters.push(
    new ethereum.EventParam(
      "mintFeeAmount",
      ethereum.Value.fromUnsignedBigInt(mintFeeAmount)
    )
  )
  mintFeePayoutEvent.parameters.push(
    new ethereum.EventParam(
      "mintFeeRecipient",
      ethereum.Value.fromAddress(mintFeeRecipient)
    )
  )
  mintFeePayoutEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )

  return mintFeePayoutEvent
}

export function createOpenMintFinalizedEvent(
  sender: Address,
  numberOfMints: BigInt
): OpenMintFinalized {
  let openMintFinalizedEvent = changetype<OpenMintFinalized>(newMockEvent())

  openMintFinalizedEvent.parameters = new Array()

  openMintFinalizedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  openMintFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfMints",
      ethereum.Value.fromUnsignedBigInt(numberOfMints)
    )
  )

  return openMintFinalizedEvent
}

export function createOwnerCanceledEvent(
  previousOwner: Address,
  potentialNewOwner: Address
): OwnerCanceled {
  let ownerCanceledEvent = changetype<OwnerCanceled>(newMockEvent())

  ownerCanceledEvent.parameters = new Array()

  ownerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownerCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "potentialNewOwner",
      ethereum.Value.fromAddress(potentialNewOwner)
    )
  )

  return ownerCanceledEvent
}

export function createOwnerPendingEvent(
  previousOwner: Address,
  potentialNewOwner: Address
): OwnerPending {
  let ownerPendingEvent = changetype<OwnerPending>(newMockEvent())

  ownerPendingEvent.parameters = new Array()

  ownerPendingEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownerPendingEvent.parameters.push(
    new ethereum.EventParam(
      "potentialNewOwner",
      ethereum.Value.fromAddress(potentialNewOwner)
    )
  )

  return ownerPendingEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSaleEvent(
  to: Address,
  quantity: BigInt,
  pricePerToken: BigInt,
  firstPurchasedTokenId: BigInt
): Sale {
  let saleEvent = changetype<Sale>(newMockEvent())

  saleEvent.parameters = new Array()

  saleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  saleEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  saleEvent.parameters.push(
    new ethereum.EventParam(
      "pricePerToken",
      ethereum.Value.fromUnsignedBigInt(pricePerToken)
    )
  )
  saleEvent.parameters.push(
    new ethereum.EventParam(
      "firstPurchasedTokenId",
      ethereum.Value.fromUnsignedBigInt(firstPurchasedTokenId)
    )
  )

  return saleEvent
}

export function createSalesConfigChangedEvent(
  changedBy: Address
): SalesConfigChanged {
  let salesConfigChangedEvent = changetype<SalesConfigChanged>(newMockEvent())

  salesConfigChangedEvent.parameters = new Array()

  salesConfigChangedEvent.parameters.push(
    new ethereum.EventParam("changedBy", ethereum.Value.fromAddress(changedBy))
  )

  return salesConfigChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUpdatedMetadataRendererEvent(
  sender: Address,
  renderer: Address
): UpdatedMetadataRenderer {
  let updatedMetadataRendererEvent = changetype<UpdatedMetadataRenderer>(
    newMockEvent()
  )

  updatedMetadataRendererEvent.parameters = new Array()

  updatedMetadataRendererEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  updatedMetadataRendererEvent.parameters.push(
    new ethereum.EventParam("renderer", ethereum.Value.fromAddress(renderer))
  )

  return updatedMetadataRendererEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
