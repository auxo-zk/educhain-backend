import { ProposalState } from 'src/constants';

export class GovernorEntity {
    governorId: number;
    address: string;
    nextTokenId: number;
    tokenAddress: string;
    revenuePoolFactoryAddress: string;
    proposalCounter: number;
    totalFunded: string;
    descriptionHash: string;
    ipfsData?: object;
}

export class ProposalEntity {
    proposalIndex: number;
    proposalId: string;
    proposer: string;
    voteStart: number;
    voteDuration: number;
    descriptionHash: string;
    executed: boolean;
    canceled: boolean;
    etaBlocks: number;
    againstVotes: string;
    forVotes: string;
    abstainVotes: string;
    state: ProposalState;
}

export class RevenuePoolFactoryEntity {
    address: string;
    poolCounter: number;
    poolAddresses: string[];
}

export class RevenuePoolEntity {
    poolIndex: number;
    address: string;
    revenue: string;
    balance: string;
    lastValidTokenId: number;
}
