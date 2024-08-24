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
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5g2qZy-YegR77RBzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hXauMpYegR77RCzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hhs-HHYegR77RDzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hrcxMcYegR77REzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5hz2w-QYegR77RFzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5h8N65NYegR77RGzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5iE1Y0VYegR77RHzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5ge0suoYeoR77RIzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5gsIf5WYeoR77RJzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5g5OBeZYeoR77RKzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5h9xyjhYf4R77ROzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5iIeuNPYf4R77RPzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5iT8gHzYf4R77RQzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5jEkkiXYf4R77RRzhCJW5T6', //
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5jOweDMYf4R77RSzhCJW5T6', //
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5jZezD-Yf4R77RTzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5jiWQqYYf4R77RUzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5jqrKW0Yf4R77RVzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5j2QmGjYf4R77RWzhCJW5T6',
                ),
                new ethers.JsonRpcProvider(
                    'https://lb.drpc.org/ogrpc?network=open-campus-codex-sepolia&dkey=AtHBvXOTE0Afk2vmNC58H5gIFIwKYf8R77RXzhCJW5T6',
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
