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

export declare namespace IGovernor {
  export type ProposalCoreStruct = {
    proposer: AddressLike;
    voteStart: BigNumberish;
    voteDuration: BigNumberish;
    descriptionHash: BytesLike;
    executed: boolean;
    canceled: boolean;
    etaBlocks: BigNumberish;
  };

  export type ProposalCoreStructOutput = [
    proposer: string,
    voteStart: bigint,
    voteDuration: bigint,
    descriptionHash: string,
    executed: boolean,
    canceled: boolean,
    etaBlocks: bigint
  ] & {
    proposer: string;
    voteStart: bigint;
    voteDuration: bigint;
    descriptionHash: string;
    executed: boolean;
    canceled: boolean;
    etaBlocks: bigint;
  };
}

export interface GovernorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "campaign"
      | "cancel"
      | "castVote"
      | "castVoteBatch"
      | "clock"
      | "execute"
      | "founder"
      | "governorId"
      | "hasVoted"
      | "hashOperation"
      | "hashProposal"
      | "joinCampaign"
      | "name"
      | "nextTokenId"
      | "proposalCore"
      | "proposalCounter"
      | "proposalDeadline"
      | "proposalEta"
      | "proposalIds"
      | "proposalNeedsQueuing"
      | "proposalProposer"
      | "proposalSnapshot"
      | "proposalVotes"
      | "propose"
      | "queue"
      | "queuingPeriod"
      | "revenuePoolFactory"
      | "state"
      | "timelockPeriod"
      | "token"
      | "totalFunded"
      | "votingDelay"
      | "votingPeriod"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ProposalCanceled"
      | "ProposalCreated"
      | "ProposalExecuted"
      | "ProposalQueued"
      | "VoteCast"
  ): EventFragment;

  encodeFunctionData(functionFragment: "campaign", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBatch",
    values: [BigNumberish, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "clock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "founder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governorId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasVoted",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashOperation",
    values: [AddressLike, BigNumberish, string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashProposal",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "joinCampaign",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalCore",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalDeadline",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalEta",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalNeedsQueuing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalProposer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalSnapshot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalVotes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "queuingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revenuePoolFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "timelockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalFunded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "campaign", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "founder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governorId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "joinCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalEta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalNeedsQueuing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalProposer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queuingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revenuePoolFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "timelockPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalFunded",
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

export namespace ProposalCanceledEvent {
  export type InputTuple = [proposalId: BigNumberish];
  export type OutputTuple = [proposalId: bigint];
  export interface OutputObject {
    proposalId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalCreatedEvent {
  export type InputTuple = [
    proposalId: BigNumberish,
    proposer: AddressLike,
    targets: AddressLike[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    voteStart: BigNumberish,
    voteEnd: BigNumberish,
    descriptionHash: BytesLike
  ];
  export type OutputTuple = [
    proposalId: bigint,
    proposer: string,
    targets: string[],
    values: bigint[],
    signatures: string[],
    calldatas: string[],
    voteStart: bigint,
    voteEnd: bigint,
    descriptionHash: string
  ];
  export interface OutputObject {
    proposalId: bigint;
    proposer: string;
    targets: string[];
    values: bigint[];
    signatures: string[];
    calldatas: string[];
    voteStart: bigint;
    voteEnd: bigint;
    descriptionHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalExecutedEvent {
  export type InputTuple = [proposalId: BigNumberish];
  export type OutputTuple = [proposalId: bigint];
  export interface OutputObject {
    proposalId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalQueuedEvent {
  export type InputTuple = [proposalId: BigNumberish, etaBlocks: BigNumberish];
  export type OutputTuple = [proposalId: bigint, etaBlocks: bigint];
  export interface OutputObject {
    proposalId: bigint;
    etaBlocks: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteCastEvent {
  export type InputTuple = [
    voter: AddressLike,
    proposalId: BigNumberish,
    tokenId: BigNumberish,
    support: BigNumberish,
    weight: BigNumberish
  ];
  export type OutputTuple = [
    voter: string,
    proposalId: bigint,
    tokenId: bigint,
    support: bigint,
    weight: bigint
  ];
  export interface OutputObject {
    voter: string;
    proposalId: bigint;
    tokenId: bigint;
    support: bigint;
    weight: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Governor extends BaseContract {
  connect(runner?: ContractRunner | null): Governor;
  waitForDeployment(): Promise<this>;

  interface: GovernorInterface;

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

  campaign: TypedContractMethod<[], [string], "view">;

  cancel: TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;

  castVote: TypedContractMethod<
    [proposalId: BigNumberish, tokenId: BigNumberish, support: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  castVoteBatch: TypedContractMethod<
    [proposalId: BigNumberish, tokenIds: BigNumberish[], support: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  clock: TypedContractMethod<[], [bigint], "view">;

  execute: TypedContractMethod<[proposalId: BigNumberish], [void], "payable">;

  founder: TypedContractMethod<[], [string], "view">;

  governorId: TypedContractMethod<[], [bigint], "view">;

  hasVoted: TypedContractMethod<
    [proposalId: BigNumberish, tokenId: BigNumberish],
    [boolean],
    "view"
  >;

  hashOperation: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      salt: BytesLike
    ],
    [string],
    "view"
  >;

  hashProposal: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "view"
  >;

  joinCampaign: TypedContractMethod<[], [void], "nonpayable">;

  name: TypedContractMethod<[], [string], "view">;

  nextTokenId: TypedContractMethod<[], [bigint], "view">;

  proposalCore: TypedContractMethod<
    [proposalId: BigNumberish],
    [IGovernor.ProposalCoreStructOutput],
    "view"
  >;

  proposalCounter: TypedContractMethod<[], [bigint], "view">;

  proposalDeadline: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "view"
  >;

  proposalEta: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "view"
  >;

  proposalIds: TypedContractMethod<
    [proposalIndex: BigNumberish],
    [bigint],
    "view"
  >;

  proposalNeedsQueuing: TypedContractMethod<
    [arg0: BigNumberish],
    [boolean],
    "view"
  >;

  proposalProposer: TypedContractMethod<
    [proposalId: BigNumberish],
    [string],
    "view"
  >;

  proposalSnapshot: TypedContractMethod<
    [proposalId: BigNumberish],
    [bigint],
    "view"
  >;

  proposalVotes: TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        againstVotes: bigint;
        forVotes: bigint;
        abstainVotes: bigint;
      }
    ],
    "view"
  >;

  propose: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  queue: TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;

  queuingPeriod: TypedContractMethod<[], [bigint], "view">;

  revenuePoolFactory: TypedContractMethod<[], [string], "view">;

  state: TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;

  timelockPeriod: TypedContractMethod<[], [bigint], "view">;

  token: TypedContractMethod<[], [string], "view">;

  totalFunded: TypedContractMethod<[], [bigint], "view">;

  votingDelay: TypedContractMethod<[], [bigint], "view">;

  votingPeriod: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "campaign"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cancel"
  ): TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "castVote"
  ): TypedContractMethod<
    [proposalId: BigNumberish, tokenId: BigNumberish, support: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteBatch"
  ): TypedContractMethod<
    [proposalId: BigNumberish, tokenIds: BigNumberish[], support: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "clock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<[proposalId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "founder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "governorId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasVoted"
  ): TypedContractMethod<
    [proposalId: BigNumberish, tokenId: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashOperation"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      signature: string,
      data: BytesLike,
      salt: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashProposal"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "joinCampaign"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nextTokenId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalCore"
  ): TypedContractMethod<
    [proposalId: BigNumberish],
    [IGovernor.ProposalCoreStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "proposalCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalDeadline"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalEta"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalIds"
  ): TypedContractMethod<[proposalIndex: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalNeedsQueuing"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "proposalProposer"
  ): TypedContractMethod<[proposalId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "proposalSnapshot"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalVotes"
  ): TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        againstVotes: bigint;
        forVotes: bigint;
        abstainVotes: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "propose"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      calldatas: BytesLike[],
      descriptionHash: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "queue"
  ): TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "queuingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "revenuePoolFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "timelockPeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalFunded"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votingDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "ProposalCanceled"
  ): TypedContractEvent<
    ProposalCanceledEvent.InputTuple,
    ProposalCanceledEvent.OutputTuple,
    ProposalCanceledEvent.OutputObject
  >;
  getEvent(
    key: "ProposalCreated"
  ): TypedContractEvent<
    ProposalCreatedEvent.InputTuple,
    ProposalCreatedEvent.OutputTuple,
    ProposalCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalExecuted"
  ): TypedContractEvent<
    ProposalExecutedEvent.InputTuple,
    ProposalExecutedEvent.OutputTuple,
    ProposalExecutedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalQueued"
  ): TypedContractEvent<
    ProposalQueuedEvent.InputTuple,
    ProposalQueuedEvent.OutputTuple,
    ProposalQueuedEvent.OutputObject
  >;
  getEvent(
    key: "VoteCast"
  ): TypedContractEvent<
    VoteCastEvent.InputTuple,
    VoteCastEvent.OutputTuple,
    VoteCastEvent.OutputObject
  >;

  filters: {
    "ProposalCanceled(uint256)": TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;
    ProposalCanceled: TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;

    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,bytes32)": TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
    ProposalCreated: TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;

    "ProposalExecuted(uint256)": TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;
    ProposalExecuted: TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;

    "ProposalQueued(uint256,uint256)": TypedContractEvent<
      ProposalQueuedEvent.InputTuple,
      ProposalQueuedEvent.OutputTuple,
      ProposalQueuedEvent.OutputObject
    >;
    ProposalQueued: TypedContractEvent<
      ProposalQueuedEvent.InputTuple,
      ProposalQueuedEvent.OutputTuple,
      ProposalQueuedEvent.OutputObject
    >;

    "VoteCast(address,uint256,uint256,uint8,uint256)": TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
    VoteCast: TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
  };
}
