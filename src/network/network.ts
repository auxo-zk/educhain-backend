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
        return this.getEducationJsonProvider();
    }

    getLocalHardhatProvider(): JsonRpcProvider {
        return new ethers.JsonRpcProvider('http://127.0.0.1:8545/');
    }

    getEduchainWebSocketProvider(): Provider {
        const test = new ethers.WebSocketProvider(
            'wss://open-campus-codex-sepolia.drpc.org',
        );
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

    getEducationJsonProvider(): Provider {
        return new ethers.FallbackProvider(
            [
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5jlOYddYccR77QyzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5j-BC4EYc8R77Q1zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5gIVlepYdAR77Q2zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5gPv-mpYdAR77Q3zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5gdp6cTYdAR77Q4zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hJ1OtqYdER77Q5zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hRWY0LYdER77Q6zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hZPZsmYdER77Q7zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hf-gnLYdER77Q8zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hmQW2_YdER77Q9zhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://open-campus-codex-sepolia.drpc.org',
                ),
            ],
            undefined,
            { quorum: 1 },
        );
        // return new ethers.JsonRpcProvider(
        //     'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5jlOYddYccR77QyzhCJW5T6',
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
