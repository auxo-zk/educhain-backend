/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ERC721Votes,
  ERC721VotesInterface,
} from "../../contracts/ERC721Votes";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "minter_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_minter",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getVotingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200141c3803806200141c833981016040819052620000349162000145565b8282600062000044838262000261565b50600162000053828262000261565b5050600680546001600160a01b0319166001600160a01b039390931692909217909155506200032d915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000a857600080fd5b81516001600160401b0380821115620000c557620000c562000080565b604051601f8301601f19908116603f01168101908282118183101715620000f057620000f062000080565b816040528381526020925086838588010111156200010d57600080fd5b600091505b8382101562000131578582018301518183018401529082019062000112565b600093810190920192909252949350505050565b6000806000606084860312156200015b57600080fd5b83516001600160401b03808211156200017357600080fd5b620001818783880162000096565b945060208601519150808211156200019857600080fd5b50620001a78682870162000096565b604086015190935090506001600160a01b0381168114620001c757600080fd5b809150509250925092565b600181811c90821680620001e757607f821691505b6020821081036200020857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025c57600081815260208120601f850160051c81016020861015620002375750805b601f850160051c820191505b81811015620002585782815560010162000243565b5050505b505050565b81516001600160401b038111156200027d576200027d62000080565b62000295816200028e8454620001d2565b846200020e565b602080601f831160018114620002cd5760008415620002b45750858301515b600019600386901b1c1916600185901b17855562000258565b600085815260208120601f198616915b82811015620002fe57888601518255948401946001909101908401620002dd565b50858210156200031d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6110df806200033d6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806368197360116100a25780639c6d2976116100715780639c6d29761461023c578063a22cb4651461025c578063b88d4fde1461026f578063c87b56dd14610282578063e985e9c51461029557600080fd5b8063681973601461020557806370a082311461021857806375794a3c1461022b57806395d89b411461023457600080fd5b806323b872dd116100e957806323b872dd1461019857806340c10f19146101ab57806342842e0e146101cc578063578ec33f146101df5780636352211e146101f257600080fd5b806301ffc9a71461011b57806306fdde0314610143578063081812fc14610158578063095ea7b314610183575b600080fd5b61012e610129366004610d05565b6102a8565b60405190151581526020015b60405180910390f35b61014b6102fa565b60405161013a9190610d72565b61016b610166366004610d85565b61038c565b6040516001600160a01b03909116815260200161013a565b610196610191366004610dba565b6103b5565b005b6101966101a6366004610de4565b6103c4565b6101be6101b9366004610dba565b610454565b60405190815260200161013a565b6101966101da366004610de4565b6104b0565b60065461016b906001600160a01b031681565b61016b610200366004610d85565b6104d0565b6101be610213366004610e20565b6104db565b6101be610226366004610e4c565b610529565b6101be60075481565b61014b610571565b6101be61024a366004610d85565b60009081526008602052604090205490565b61019661026a366004610e67565b610580565b61019661027d366004610eb9565b61058b565b61014b610290366004610d85565b6105a2565b61012e6102a3366004610f95565b610617565b60006001600160e01b031982166380ac58cd60e01b14806102d957506001600160e01b03198216635b5e139f60e01b145b806102f457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461030990610fbf565b80601f016020809104026020016040519081016040528092919081815260200182805461033590610fbf565b80156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b5050505050905090565b600061039782610645565b506000828152600460205260409020546001600160a01b03166102f4565b6103c082823361067e565b5050565b6001600160a01b0382166103f357604051633250574960e11b8152600060048201526024015b60405180910390fd5b600061040083833361068b565b9050836001600160a01b0316816001600160a01b03161461044e576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103ea565b50505050565b6006546000906001600160a01b0316336001600160a01b03161461047757600080fd5b5060078054908190600061048a83610ff9565b91905055506104998382610784565b600081815260086020526040902091909155919050565b6104cb8383836040518060200160405280600081525061058b565b505050565b60006102f482610645565b6000828152600260205260408120546001600160a01b038381169116146105155760405163153e35b760e11b815260040160405180910390fd5b505060009081526008602052604090205490565b60006001600160a01b038216610555576040516322718ad960e21b8152600060048201526024016103ea565b506001600160a01b031660009081526003602052604090205490565b60606001805461030990610fbf565b6103c03383836107e9565b6105968484846103c4565b61044e84848484610888565b60606105ad82610645565b5060006105c560408051602081019091526000815290565b905060008151116105e55760405180602001604052806000815250610610565b806105ef846109b1565b604051602001610600929190611020565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000818152600260205260408120546001600160a01b0316806102f457604051637e27328960e01b8152600481018490526024016103ea565b6104cb8383836001610a44565b6000828152600260205260408120546001600160a01b03908116908316156106b8576106b8818486610b4a565b6001600160a01b038116156106f6576106d5600085600080610a44565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b03851615610725576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6001600160a01b0382166107ae57604051633250574960e11b8152600060048201526024016103ea565b60006107bc8383600061068b565b90506001600160a01b038116156104cb576040516339e3563760e11b8152600060048201526024016103ea565b6001600160a01b03821661081b57604051630b61174360e31b81526001600160a01b03831660048201526024016103ea565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561044e57604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906108ca90339088908790879060040161104f565b6020604051808303816000875af1925050508015610905575060408051601f3d908101601f191682019092526109029181019061108c565b60015b61096e573d808015610933576040519150601f19603f3d011682016040523d82523d6000602084013e610938565b606091505b50805160000361096657604051633250574960e11b81526001600160a01b03851660048201526024016103ea565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b146109aa57604051633250574960e11b81526001600160a01b03851660048201526024016103ea565b5050505050565b606060006109be83610bae565b600101905060008167ffffffffffffffff8111156109de576109de610ea3565b6040519080825280601f01601f191660200182016040528015610a08576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610a1257509392505050565b8080610a5857506001600160a01b03821615155b15610b1a576000610a6884610645565b90506001600160a01b03831615801590610a945750826001600160a01b0316816001600160a01b031614155b8015610aa75750610aa58184610617565b155b15610ad05760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103ea565b8115610b185783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610b55838383610c86565b6104cb576001600160a01b038316610b8357604051637e27328960e01b8152600481018290526024016103ea565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103ea565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610bed5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610c19576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610c3757662386f26fc10000830492506010015b6305f5e1008310610c4f576305f5e100830492506008015b6127108310610c6357612710830492506004015b60648310610c75576064830492506002015b600a83106102f45760010192915050565b60006001600160a01b03831615801590610ce45750826001600160a01b0316846001600160a01b03161480610cc05750610cc08484610617565b80610ce457506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b031981168114610d0257600080fd5b50565b600060208284031215610d1757600080fd5b813561061081610cec565b60005b83811015610d3d578181015183820152602001610d25565b50506000910152565b60008151808452610d5e816020860160208601610d22565b601f01601f19169290920160200192915050565b6020815260006106106020830184610d46565b600060208284031215610d9757600080fd5b5035919050565b80356001600160a01b0381168114610db557600080fd5b919050565b60008060408385031215610dcd57600080fd5b610dd683610d9e565b946020939093013593505050565b600080600060608486031215610df957600080fd5b610e0284610d9e565b9250610e1060208501610d9e565b9150604084013590509250925092565b60008060408385031215610e3357600080fd5b82359150610e4360208401610d9e565b90509250929050565b600060208284031215610e5e57600080fd5b61061082610d9e565b60008060408385031215610e7a57600080fd5b610e8383610d9e565b915060208301358015158114610e9857600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610ecf57600080fd5b610ed885610d9e565b9350610ee660208601610d9e565b925060408501359150606085013567ffffffffffffffff80821115610f0a57600080fd5b818701915087601f830112610f1e57600080fd5b813581811115610f3057610f30610ea3565b604051601f8201601f19908116603f01168101908382118183101715610f5857610f58610ea3565b816040528281528a6020848701011115610f7157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fa857600080fd5b610fb183610d9e565b9150610e4360208401610d9e565b600181811c90821680610fd357607f821691505b602082108103610ff357634e487b7160e01b600052602260045260246000fd5b50919050565b60006001820161101957634e487b7160e01b600052601160045260246000fd5b5060010190565b60008351611032818460208801610d22565b835190830190611046818360208801610d22565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061108290830184610d46565b9695505050505050565b60006020828403121561109e57600080fd5b815161061081610cec56fea26469706673582212202725768284fe18807e3c5032ef88941f62ab09df65504fb211c9a265d7e0776664736f6c63430008140033";

type ERC721VotesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721VotesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Votes__factory extends ContractFactory {
  constructor(...args: ERC721VotesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    minter_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, minter_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    minter_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, minter_, overrides || {}) as Promise<
      ERC721Votes & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC721Votes__factory {
    return super.connect(runner) as ERC721Votes__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721VotesInterface {
    return new Interface(_abi) as ERC721VotesInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC721Votes {
    return new Contract(address, _abi, runner) as unknown as ERC721Votes;
  }
}
