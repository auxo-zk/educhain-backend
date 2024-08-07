/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGovernorFactory,
  IGovernorFactoryInterface,
} from "../../../contracts/interfaces/IGovernorFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "governorId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "founder",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "descriptionHash",
        type: "bytes32",
      },
    ],
    name: "GovernorCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "governorId",
        type: "uint256",
      },
    ],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "governor",
        type: "address",
      },
    ],
    name: "hasGovernor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IGovernorFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IGovernorFactoryInterface {
    return new Interface(_abi) as IGovernorFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IGovernorFactory {
    return new Contract(address, _abi, runner) as unknown as IGovernorFactory;
  }
}
