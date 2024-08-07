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

export declare namespace ICampaign {
  export type CourseStruct = {
    governor: AddressLike;
    fund: BigNumberish;
    minted: BigNumberish;
  };

  export type CourseStructOutput = [
    governor: string,
    fund: bigint,
    minted: bigint
  ] & { governor: string; fund: bigint; minted: bigint };
}

export interface CampaignInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_founder"
      | "allocateFunds"
      | "campaignData"
      | "clock"
      | "courseData"
      | "currentCampaignId"
      | "founder"
      | "fund"
      | "fundingDelay"
      | "fundingPeriod"
      | "governorFactory"
      | "joinCampaign"
      | "launchCampaign"
      | "nextCampaignId"
      | "state"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CampaignLaunched"
      | "Fund"
      | "FundAllocated"
      | "GovernorJoined"
  ): EventFragment;

  encodeFunctionData(functionFragment: "_founder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allocateFunds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "campaignData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "clock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "courseData",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentCampaignId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "founder", values?: undefined): string;
  encodeFunctionData(functionFragment: "fund", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "fundingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governorFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "joinCampaign",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "launchCampaign",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nextCampaignId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "_founder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allocateFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "campaignData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "courseData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentCampaignId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "founder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governorFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "joinCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "launchCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextCampaignId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
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

export interface Campaign extends BaseContract {
  connect(runner?: ContractRunner | null): Campaign;
  waitForDeployment(): Promise<this>;

  interface: CampaignInterface;

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

  _founder: TypedContractMethod<[], [string], "view">;

  allocateFunds: TypedContractMethod<[], [void], "nonpayable">;

  campaignData: TypedContractMethod<
    [campaignId: BigNumberish],
    [
      [bigint, string, bigint, bigint, boolean, bigint[]] & {
        totalFunded: bigint;
        descriptionHash: string;
        fundStart: bigint;
        fundDuration: bigint;
        allocated: boolean;
        governorIds: bigint[];
      }
    ],
    "view"
  >;

  clock: TypedContractMethod<[], [bigint], "view">;

  courseData: TypedContractMethod<
    [campaignId: BigNumberish, governorId: BigNumberish],
    [ICampaign.CourseStructOutput],
    "view"
  >;

  currentCampaignId: TypedContractMethod<[], [bigint], "view">;

  founder: TypedContractMethod<[], [string], "view">;

  fund: TypedContractMethod<[governorId: BigNumberish], [bigint], "payable">;

  fundingDelay: TypedContractMethod<[], [bigint], "view">;

  fundingPeriod: TypedContractMethod<[], [bigint], "view">;

  governorFactory: TypedContractMethod<[], [string], "view">;

  joinCampaign: TypedContractMethod<
    [governorId: BigNumberish, governor: AddressLike],
    [bigint],
    "nonpayable"
  >;

  launchCampaign: TypedContractMethod<
    [descriptionHash: BytesLike],
    [bigint],
    "nonpayable"
  >;

  nextCampaignId: TypedContractMethod<[], [bigint], "view">;

  state: TypedContractMethod<[campaignId: BigNumberish], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_founder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allocateFunds"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "campaignData"
  ): TypedContractMethod<
    [campaignId: BigNumberish],
    [
      [bigint, string, bigint, bigint, boolean, bigint[]] & {
        totalFunded: bigint;
        descriptionHash: string;
        fundStart: bigint;
        fundDuration: bigint;
        allocated: boolean;
        governorIds: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "clock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "courseData"
  ): TypedContractMethod<
    [campaignId: BigNumberish, governorId: BigNumberish],
    [ICampaign.CourseStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "currentCampaignId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "founder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fund"
  ): TypedContractMethod<[governorId: BigNumberish], [bigint], "payable">;
  getFunction(
    nameOrSignature: "fundingDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fundingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "governorFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "joinCampaign"
  ): TypedContractMethod<
    [governorId: BigNumberish, governor: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "launchCampaign"
  ): TypedContractMethod<[descriptionHash: BytesLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "nextCampaignId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<[campaignId: BigNumberish], [bigint], "view">;

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
