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
} from "../../common";

export interface ICampaignInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "allocateFunds"
      | "campaignData"
      | "fund"
      | "joinCampaign"
      | "launchCampaign"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CampaignLaunched"
      | "Fund"
      | "FundAllocated"
      | "GovernorJoined"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "allocateFunds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "campaignData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fund",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "joinCampaign",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "launchCampaign",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "allocateFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "campaignData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "launchCampaign",
    data: BytesLike
  ): Result;
}

export namespace CampaignLaunchedEvent {
  export type InputTuple = [campaignId: BigNumberish];
  export type OutputTuple = [campaignId: bigint];
  export interface OutputObject {
    campaignId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundEvent {
  export type InputTuple = [
    campaignId: BigNumberish,
    governorId: BigNumberish,
    amount: BigNumberish,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [
    campaignId: bigint,
    governorId: bigint,
    amount: bigint,
    tokenId: bigint
  ];
  export interface OutputObject {
    campaignId: bigint;
    governorId: bigint;
    amount: bigint;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundAllocatedEvent {
  export type InputTuple = [
    campaignId: BigNumberish,
    governorIds: BigNumberish[]
  ];
  export type OutputTuple = [campaignId: bigint, governorIds: bigint[]];
  export interface OutputObject {
    campaignId: bigint;
    governorIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GovernorJoinedEvent {
  export type InputTuple = [campaignId: BigNumberish, governorId: BigNumberish];
  export type OutputTuple = [campaignId: bigint, governorId: bigint];
  export interface OutputObject {
    campaignId: bigint;
    governorId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ICampaign extends BaseContract {
  connect(runner?: ContractRunner | null): ICampaign;
  waitForDeployment(): Promise<this>;

  interface: ICampaignInterface;

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

  allocateFunds: TypedContractMethod<
    [campaignId: BigNumberish],
    [void],
    "nonpayable"
  >;

  campaignData: TypedContractMethod<
    [campaignId: BigNumberish],
    [
      [bigint, string, bigint, bigint, boolean, string, bigint[]] & {
        totalFunded: bigint;
        descriptionHash: string;
        fundStart: bigint;
        fundDuration: bigint;
        allocated: boolean;
        tokenRaising: string;
        governorIds: bigint[];
      }
    ],
    "view"
  >;

  fund: TypedContractMethod<
    [campaignId: BigNumberish, governorId: BigNumberish, amount: BigNumberish],
    [bigint],
    "payable"
  >;

  joinCampaign: TypedContractMethod<
    [governorId: BigNumberish, governor: AddressLike],
    [bigint],
    "nonpayable"
  >;

  launchCampaign: TypedContractMethod<
    [
      startFunding: BigNumberish,
      duration: BigNumberish,
      tokenRaising: AddressLike,
      descriptionHash: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "allocateFunds"
  ): TypedContractMethod<[campaignId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "campaignData"
  ): TypedContractMethod<
    [campaignId: BigNumberish],
    [
      [bigint, string, bigint, bigint, boolean, string, bigint[]] & {
        totalFunded: bigint;
        descriptionHash: string;
        fundStart: bigint;
        fundDuration: bigint;
        allocated: boolean;
        tokenRaising: string;
        governorIds: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "fund"
  ): TypedContractMethod<
    [campaignId: BigNumberish, governorId: BigNumberish, amount: BigNumberish],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "joinCampaign"
  ): TypedContractMethod<
    [governorId: BigNumberish, governor: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "launchCampaign"
  ): TypedContractMethod<
    [
      startFunding: BigNumberish,
      duration: BigNumberish,
      tokenRaising: AddressLike,
      descriptionHash: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "CampaignLaunched"
  ): TypedContractEvent<
    CampaignLaunchedEvent.InputTuple,
    CampaignLaunchedEvent.OutputTuple,
    CampaignLaunchedEvent.OutputObject
  >;
  getEvent(
    key: "Fund"
  ): TypedContractEvent<
    FundEvent.InputTuple,
    FundEvent.OutputTuple,
    FundEvent.OutputObject
  >;
  getEvent(
    key: "FundAllocated"
  ): TypedContractEvent<
    FundAllocatedEvent.InputTuple,
    FundAllocatedEvent.OutputTuple,
    FundAllocatedEvent.OutputObject
  >;
  getEvent(
    key: "GovernorJoined"
  ): TypedContractEvent<
    GovernorJoinedEvent.InputTuple,
    GovernorJoinedEvent.OutputTuple,
    GovernorJoinedEvent.OutputObject
  >;

  filters: {
    "CampaignLaunched(uint256)": TypedContractEvent<
      CampaignLaunchedEvent.InputTuple,
      CampaignLaunchedEvent.OutputTuple,
      CampaignLaunchedEvent.OutputObject
    >;
    CampaignLaunched: TypedContractEvent<
      CampaignLaunchedEvent.InputTuple,
      CampaignLaunchedEvent.OutputTuple,
      CampaignLaunchedEvent.OutputObject
    >;

    "Fund(uint256,uint256,uint256,uint256)": TypedContractEvent<
      FundEvent.InputTuple,
      FundEvent.OutputTuple,
      FundEvent.OutputObject
    >;
    Fund: TypedContractEvent<
      FundEvent.InputTuple,
      FundEvent.OutputTuple,
      FundEvent.OutputObject
    >;

    "FundAllocated(uint256,uint256[])": TypedContractEvent<
      FundAllocatedEvent.InputTuple,
      FundAllocatedEvent.OutputTuple,
      FundAllocatedEvent.OutputObject
    >;
    FundAllocated: TypedContractEvent<
      FundAllocatedEvent.InputTuple,
      FundAllocatedEvent.OutputTuple,
      FundAllocatedEvent.OutputObject
    >;

    "GovernorJoined(uint256,uint256)": TypedContractEvent<
      GovernorJoinedEvent.InputTuple,
      GovernorJoinedEvent.OutputTuple,
      GovernorJoinedEvent.OutputObject
    >;
    GovernorJoined: TypedContractEvent<
      GovernorJoinedEvent.InputTuple,
      GovernorJoinedEvent.OutputTuple,
      GovernorJoinedEvent.OutputObject
    >;
  };
}
