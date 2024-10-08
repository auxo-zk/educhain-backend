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

export interface IGovernorFactoryInterface extends Interface {
  getFunction(nameOrSignature: "governor" | "hasGovernor"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "GovernorCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "governor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasGovernor",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasGovernor",
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

export interface IGovernorFactory extends BaseContract {
  connect(runner?: ContractRunner | null): IGovernorFactory;
  waitForDeployment(): Promise<this>;

  interface: IGovernorFactoryInterface;

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

  governor: TypedContractMethod<[governorId: BigNumberish], [string], "view">;

  hasGovernor: TypedContractMethod<[governor: AddressLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "governor"
  ): TypedContractMethod<[governorId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "hasGovernor"
  ): TypedContractMethod<[governor: AddressLike], [boolean], "view">;

  getEvent(
    key: "GovernorCreated"
  ): TypedContractEvent<
    GovernorCreatedEvent.InputTuple,
    GovernorCreatedEvent.OutputTuple,
    GovernorCreatedEvent.OutputObject
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
  };
}
