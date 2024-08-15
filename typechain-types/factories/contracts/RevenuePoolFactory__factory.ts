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
  RevenuePoolFactory,
  RevenuePoolFactoryInterface,
} from "../../contracts/RevenuePoolFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "governor_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "createPool",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolIndex",
        type: "uint256",
      },
    ],
    name: "pool",
    outputs: [
      {
        internalType: "contract IRevenuePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolCounter",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610ad5380380610ad583398101604081905261002f91610070565b600080546001600160a01b0319166001600160a01b03938416179055166080526100a3565b80516001600160a01b038116811461006b57600080fd5b919050565b6000806040838503121561008357600080fd5b61008c83610054565b915061009a60208401610054565b90509250929050565b608051610a0b6100ca6000396000818160ad0152818160cf01526101510152610a0b6000f3fe6080604052600436106100345760003560e01c806312d36171146100395780639e3079cb1461004e578063fe31311214610071575b600080fd5b61004c610047366004610366565b6100a9565b005b34801561005a57600080fd5b506001546040519081526020015b60405180910390f35b34801561007d57600080fd5b5061009161008c36600461039e565b610329565b6040516001600160a01b039091168152602001610068565b60007f0000000000000000000000000000000000000000000000000000000000000000837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad044f496040518163ffffffff1660e01b8152600401602060405180830381865afa15801561012b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014f91906103b7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166375794a3c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d191906103b7565b856040516101de90610359565b6001600160a01b03958616815294909316602085015260408401919091526060830152608082015260a001604051809103906000f080158015610225573d6000803e3d6000fd5b506040516323b872dd60e01b81523360048201526001600160a01b03808316602483015260448201859052919250908416906323b872dd906064016020604051808303816000875af115801561027f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a391906103d0565b506001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0383169081179091556040519081527f83a48fbcfc991335314e74d0496aab6a1987e992ddc85dddbcc4d6dd6ef2e9fc9060200160405180910390a1505050565b60006001828154811061033e5761033e6103f9565b6000918252602090912001546001600160a01b031692915050565b6105c68061041083390190565b6000806040838503121561037957600080fd5b82356001600160a01b038116811461039057600080fd5b946020939093013593505050565b6000602082840312156103b057600080fd5b5035919050565b6000602082840312156103c957600080fd5b5051919050565b6000602082840312156103e257600080fd5b815180151581146103f257600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fdfe60a06040526040516105c63803806105c683398101604081905261002291610076565b6001600160a01b03948516608052600155600080546001600160a01b03191693909416929092179092556002919091556003556100c4565b80516001600160a01b038116811461007157600080fd5b919050565b600080600080600060a0868803121561008e57600080fd5b6100978661005a565b94506100a56020870161005a565b6040870151606088015160809098015196999198509695945092505050565b6080516104e16100e560003960008181608401526101d201526104e16000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806375794a3c1161005b57806375794a3c146100e8578063ad044f49146100f0578063dbe7e3bd146100f8578063fc0c546a1461012b57600080fd5b80630c340a2414610082578063379607f5146100c15780633e9491a2146100d6575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b6100d46100cf3660046103da565b61013c565b005b6001545b6040519081526020016100b8565b6003546100da565b6002546100da565b61011b6101063660046103da565b60009081526004602052604090205460ff1690565b60405190151581526020016100b8565b6000546001600160a01b03166100a4565b60008181526004602052604090205460ff161561018b5760405162461bcd60e51b8152602060048201526008602482015267436c61696d65642160c01b60448201526064015b60405180910390fd5b60035481106101ce5760405162461bcd60e51b815260206004820152600f60248201526e125b9d985b1a59081d1bdad95b9259608a1b6044820152606401610182565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561022e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025291906103f3565b6001600160a01b0316636819736083336040516001600160e01b031960e085901b16815260048101929092526001600160a01b03166024820152604401602060405180830381865afa1580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d09190610423565b6000838152600460205260408120805460ff191660019081179091556002549054929350909161030190849061043c565b61030b9190610467565b6000549091506001600160a01b031663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af115801561036d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103919190610489565b507fc15f451120b13b6b40c6ad6203614ab3088308bef9150c0d6f46ea79bf46422433604080516001600160a01b039092168252602082018690520160405180910390a1505050565b6000602082840312156103ec57600080fd5b5035919050565b60006020828403121561040557600080fd5b81516001600160a01b038116811461041c57600080fd5b9392505050565b60006020828403121561043557600080fd5b5051919050565b808202811582820484141761046157634e487b7160e01b600052601160045260246000fd5b92915050565b60008261048457634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561049b57600080fd5b8151801515811461041c57600080fdfea2646970667358221220c08a7bede17008c2deb485d11ea26706aa874b4e634cbd4607a15e05fc678ddb64736f6c63430008140033a26469706673582212204725216c615df81a9e5e3674b7282878a03ec08967987faa7031fee873676a9664736f6c63430008140033";

type RevenuePoolFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RevenuePoolFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RevenuePoolFactory__factory extends ContractFactory {
  constructor(...args: RevenuePoolFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    owner_: AddressLike,
    governor_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(owner_, governor_, overrides || {});
  }
  override deploy(
    owner_: AddressLike,
    governor_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(owner_, governor_, overrides || {}) as Promise<
      RevenuePoolFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RevenuePoolFactory__factory {
    return super.connect(runner) as RevenuePoolFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevenuePoolFactoryInterface {
    return new Interface(_abi) as RevenuePoolFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RevenuePoolFactory {
    return new Contract(address, _abi, runner) as unknown as RevenuePoolFactory;
  }
}
