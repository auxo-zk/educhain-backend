/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDAOFactory,
  IDAOFactoryInterface,
} from "../../../contracts/interfaces/IDAOFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "daoId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "daoAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "descriptionHash",
        type: "bytes32",
      },
    ],
    name: "DAOCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_expectedId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_descriptionHash",
        type: "bytes32",
      },
    ],
    name: "createDAO",
    outputs: [
      {
        internalType: "uint256",
        name: "_daoId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_daoId",
        type: "uint256",
      },
    ],
    name: "daos",
    outputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDAOFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IDAOFactoryInterface {
    return new Interface(_abi) as IDAOFactoryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IDAOFactory {
    return new Contract(address, _abi, runner) as unknown as IDAOFactory;
  }
}
