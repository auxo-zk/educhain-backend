/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface GovernorFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createGovernor"
      | "founderGovernorAddresses"
      | "founderGovernorIds"
      | "governor"
      | "hasGovernor"
      | "initialize"
      | "nextGovernorId"
      | "owner"
      | "queuingPeriod"
      | "renounceOwnership"
      | "timelockPeriod"
      | "transferOwnership"
      | "votingDelay"
      | "votingPeriod"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "GovernorCreated"
      | "Initialized"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createGovernor",
    values: [string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "founderGovernorAddresses",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "founderGovernorIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "governor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasGovernor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextGovernorId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queuingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timelockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "founderGovernorAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "founderGovernorIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextGovernorId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queuingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timelockPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;
}

export namespace GovernorCreatedEvent {
  export type InputTuple = [
    governorId: BigNumberish,
    governor: AddressLike,
    founder: AddressLike,
    descriptionHash: BytesLike
  ];
  export type OutputTuple = [
    governorId: bigint,
    governor: string,
    founder: string,
    descriptionHash: string
  ];
  export interface OutputObject {
    governorId: bigint;
    governor: string;
    founder: string;
    descriptionHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GovernorFactory extends BaseContract {
  connect(runner?: ContractRunner | null): GovernorFactory;
  waitForDeployment(): Promise<this>;

  interface: GovernorFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createGovernor: TypedContractMethod<
    [
      name: string,
      tokenName: string,
      tokenSymbol: string,
      descriptionHash: BytesLike
    ],
    [bigint],
    "payable"
  >;

  founderGovernorAddresses: TypedContractMethod<
    [founder: AddressLike],
    [string[]],
    "view"
  >;

  founderGovernorIds: TypedContractMethod<
    [founder: AddressLike],
    [bigint[]],
    "view"
  >;

  governor: TypedContractMethod<[governorId: BigNumberish], [string], "view">;

  hasGovernor: TypedContractMethod<
    [governorAddress: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      initialOwner_: AddressLike,
      campaign_: AddressLike,
      timelockPeriod_: BigNumberish,
      queuingPeriod_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  nextGovernorId: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  queuingPeriod: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  timelockPeriod: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  votingDelay: TypedContractMethod<[], [bigint], "view">;

  votingPeriod: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createGovernor"
  ): TypedContractMethod<
    [
      name: string,
      tokenName: string,
      tokenSymbol: string,
      descriptionHash: BytesLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "founderGovernorAddresses"
  ): TypedContractMethod<[founder: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "founderGovernorIds"
  ): TypedContractMethod<[founder: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "governor"
  ): TypedContractMethod<[governorId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "hasGovernor"
  ): TypedContractMethod<[governorAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      initialOwner_: AddressLike,
      campaign_: AddressLike,
      timelockPeriod_: BigNumberish,
      queuingPeriod_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "nextGovernorId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "queuingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "timelockPeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "votingDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "GovernorCreated"
  ): TypedContractEvent<
    GovernorCreatedEvent.InputTuple,
    GovernorCreatedEvent.OutputTuple,
    GovernorCreatedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "GovernorCreated(uint256,address,address,bytes32)": TypedContractEvent<
      GovernorCreatedEvent.InputTuple,
      GovernorCreatedEvent.OutputTuple,
      GovernorCreatedEvent.OutputObject
    >;
    GovernorCreated: TypedContractEvent<
      GovernorCreatedEvent.InputTuple,
      GovernorCreatedEvent.OutputTuple,
      GovernorCreatedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
