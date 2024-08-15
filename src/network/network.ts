import { Injectable } from '@nestjs/common';
import { ethers, JsonRpcProvider, Provider, WebSocketProvider } from 'ethers';
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

    getDefaultProvider(): Provider {
        return this.getEduchainProvider();
    }

    getLocalHardhatProvider(): JsonRpcProvider {
        return new ethers.JsonRpcProvider('http://127.0.0.1:8545/');
    }

    getEduchainProvider(): Provider {
        return new ethers.WebSocketProvider(
            'wss://open-campus-codex-sepolia.drpc.org',
        );
        // return new ethers.JsonRpcProvider(
        //     'wss://open-campus-codex-sepolia.drpc.org',
        // );
        // return new ethers.Provider(
        //     'https://open-campus-codex-sepolia.drpc.org',
        // );
    }

    getCampaignContract(provider: Provider): Campaign {
        const campaign = Campaign__factory.connect(
            ContractAddresses['non-privacy'].campaign,
            provider,
        );
        return campaign;
    }

    getGovernorFactoryContract(provider: Provider): GovernorFactory {
        const governorFactory = GovernorFactory__factory.connect(
            ContractAddresses['non-privacy'].governorFactory,
            provider,
        );
        return governorFactory;
    }

    getGovernorContract(provider: Provider, contractAddress: string): Governor {
        const governor = Governor__factory.connect(contractAddress, provider);
        return governor;
    }

    getRevenuePoolFactoryContract(
        provider: Provider,
        contractAddress: string,
    ): RevenuePoolFactory {
        const revenuePoolFactory = RevenuePoolFactory__factory.connect(
            contractAddress,
            provider,
        );
        return revenuePoolFactory;
    }

    getRevenuePoolContract(
        provider: Provider,
        contractAddress: string,
    ): RevenuePool {
        const revenuePool = RevenuePool__factory.connect(
            contractAddress,
            provider,
        );
        return revenuePool;
    }

    getTokenContract(provider: Provider, contractAddress: string): ERC721Votes {
        const token = ERC721Votes__factory.connect(contractAddress, provider);
        return token;
    }
}
