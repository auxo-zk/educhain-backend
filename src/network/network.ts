import { Injectable } from '@nestjs/common';
import { ethers, JsonRpcProvider } from 'ethers';
import { ContractAddresses } from 'src/constants';
import {
    Campaign,
    Campaign__factory,
    ERC721Votes,
    ERC721Votes__factory,
    Governor,
    Governor__factory,
    GovernorFactory,
    GovernorFactory__factory,
    RevenuePool,
    RevenuePool__factory,
    RevenuePoolFactory,
    RevenuePoolFactory__factory,
} from 'typechain-types';

@Injectable()
export class Network {
    constructor() {}

    getLocalHardhatProvider(): JsonRpcProvider {
        return new ethers.JsonRpcProvider('http://127.0.0.1:8545/');
    }

    getEduchainProvider(): JsonRpcProvider {
        return new ethers.JsonRpcProvider(
            'https://open-campus-codex-sepolia.drpc.org',
        );
    }

    getCampaignContract(provider: JsonRpcProvider): Campaign {
        const campaign = Campaign__factory.connect(
            ContractAddresses['non-privacy'].campaign,
            provider,
        );
        return campaign;
    }

    getGovernorFactoryContract(provider: JsonRpcProvider): GovernorFactory {
        const governorFactory = GovernorFactory__factory.connect(
            ContractAddresses['non-privacy'].governorFactory,
            provider,
        );
        return governorFactory;
    }

    getGovernorContract(
        provider: JsonRpcProvider,
        contractAddress: string,
    ): Governor {
        const governor = Governor__factory.connect(contractAddress, provider);
        return governor;
    }

    getRevenuePoolFactoryContract(
        provider: JsonRpcProvider,
        contractAddress: string,
    ): RevenuePoolFactory {
        const revenuePoolFactory = RevenuePoolFactory__factory.connect(
            contractAddress,
            provider,
        );
        return revenuePoolFactory;
    }

    getRevenuePoolContract(
        provider: JsonRpcProvider,
        contractAddress: string,
    ): RevenuePool {
        const revenuePool = RevenuePool__factory.connect(
            contractAddress,
            provider,
        );
        return revenuePool;
    }

    getTokenContract(
        provider: JsonRpcProvider,
        contractAddress: string,
    ): ERC721Votes {
        const token = ERC721Votes__factory.connect(contractAddress, provider);
        return token;
    }
}
