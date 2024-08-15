import {
    BadGatewayException,
    BadRequestException,
    Injectable,
} from '@nestjs/common';
import { ethers, JsonRpcProvider, Provider } from 'ethers';
import { CreateRevenuePoolDto } from 'src/dtos/create-revenue-pool.dto';
import { ActionEntity } from 'src/entities/action.entity';
import {
    GovernorEntity,
    ProposalEntity,
    RevenuePoolEntity,
    RevenuePoolFactoryEntity,
} from 'src/entities/governor.entity';
import { TokenEntity } from 'src/entities/token.entity';
import { Ipfs } from 'src/ipfs/ipfs';
import { Network } from 'src/network/network';
import { Governor, GovernorFactory } from 'typechain-types';

@Injectable()
export class GovernorService {
    private readonly provider: Provider;
    private readonly governorFactory: GovernorFactory;

    constructor(
        private readonly network: Network,
        private readonly ipfs: Ipfs,
    ) {
        this.provider = this.network.getDefaultProvider();
        this.governorFactory = this.network.getGovernorFactoryContract(
            this.provider,
        );
    }

    async getGovernors(): Promise<GovernorEntity[]> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        const promises = [];
        for (let i = 0; i < nextGovernorId; i++) {
            promises.push(this.governorFactory.governor(i));
        }
        const governorAddresses = await Promise.all(promises);
        const governors = governorAddresses.map((governorAddress: string) =>
            this.network.getGovernorContract(this.provider, governorAddress),
        );
        const governorEntities: GovernorEntity[] = await Promise.all(
            governors.map(async (governor: Governor) => {
                const result = await Promise.all([
                    governor.governorId(),
                    governor.getAddress(),
                    governor.nextTokenId(),
                    governor.token(),
                    governor.revenuePoolFactory(),
                    governor.proposalCounter(),
                    governor.totalFunded(),
                    governor.descriptionHash(),
                ]);

                const governorEntity: GovernorEntity = {
                    governorId: Number(result[0]),
                    address: result[1],
                    nextTokenId: Number(result[2]),
                    tokenAddress: result[3],
                    revenuePoolFactoryAddress: result[4],
                    proposalCounter: Number(result[5]),
                    totalFunded: BigInt(result[6]).toString(),
                    descriptionHash: result[7],
                };
                governorEntity.ipfsData = await this.ipfs.getData(
                    governorEntity.descriptionHash,
                );
                return governorEntity;
            }),
        );
        return governorEntities;
    }

    async getGovernor(governorId: number): Promise<GovernorEntity> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (governorId < 0 || governorId >= nextGovernorId) {
            throw new BadRequestException();
        }
        const governorAddress = await this.governorFactory.governor(governorId);
        const governor = this.network.getGovernorContract(
            this.provider,
            governorAddress,
        );
        const result = await Promise.all([
            governor.governorId(),
            governor.getAddress(),
            governor.nextTokenId(),
            governor.token(),
            governor.revenuePoolFactory(),
            governor.proposalCounter(),
            governor.totalFunded(),
            governor.descriptionHash(),
        ]);

        const governorEntity: GovernorEntity = {
            governorId: Number(result[0]),
            address: result[1],
            nextTokenId: Number(result[2]),
            tokenAddress: result[3],
            revenuePoolFactoryAddress: result[4],
            proposalCounter: Number(result[5]),
            totalFunded: BigInt(result[6]).toString(),
            descriptionHash: result[7],
        };
        governorEntity.ipfsData = await this.ipfs.getData(
            governorEntity.descriptionHash,
        );
        return governorEntity;
    }

    async getProposals(governorId: number): Promise<ProposalEntity[]> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (governorId < 0 || governorId >= nextGovernorId) {
            throw new BadRequestException();
        }
        const governorAddress = await this.governorFactory.governor(governorId);
        const governor = this.network.getGovernorContract(
            this.provider,
            governorAddress,
        );
        const proposalCounter = await governor.proposalCounter();
        const promises = [];
        for (
            let proposalIndex = 0;
            proposalIndex < proposalCounter;
            proposalIndex++
        ) {
            promises.push(governor.proposalIds(proposalIndex));
        }
        const proposalIds = await Promise.all(promises);
        const proposals: ProposalEntity[] = [];
        for (
            let proposalIndex = 0;
            proposalIndex < proposalCounter;
            proposalIndex++
        ) {
            const proposalId = proposalIds[proposalIndex];
            const result = await Promise.all([
                governor.proposalCore(proposalId),
                governor.proposalVotes(proposalId),
                governor.state(proposalId),
            ]);
            const proposalCore = result[0];
            const proposalVotes = result[1];
            const proposalState = result[2];
            const proposalEntity: ProposalEntity = {
                proposalIndex: proposalIndex,
                proposalId: BigInt(proposalId).toString(),
                proposer: proposalCore[0],
                voteStart: Number(proposalCore[1]),
                voteDuration: Number(proposalCore[2]),
                descriptionHash: proposalCore[3],
                executed: Boolean(proposalCore[4]),
                canceled: Boolean(proposalCore[5]),
                etaBlocks: Number(proposalCore[6]),
                againstVotes: BigInt(proposalVotes[0]).toString(),
                forVotes: BigInt(proposalVotes[1]).toString(),
                abstainVotes: BigInt(proposalVotes[2]).toString(),
                state: Number(proposalState),
            };
            proposals.push(proposalEntity);
        }
        return proposals;
    }

    async getRevenuePoolFactory(
        governorId: number,
    ): Promise<RevenuePoolFactoryEntity> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (governorId < 0 || governorId >= nextGovernorId) {
            throw new BadRequestException();
        }
        const governorAddress = await this.governorFactory.governor(governorId);
        const governor = this.network.getGovernorContract(
            this.provider,
            governorAddress,
        );
        const revenuePoolFactoryAddress = await governor.revenuePoolFactory();
        const revenuePoolFactory = this.network.getRevenuePoolFactoryContract(
            this.provider,
            revenuePoolFactoryAddress,
        );
        const poolCounter = await revenuePoolFactory.poolCounter();
        const promises = [];
        for (let i = 0; i < poolCounter; i++) {
            promises.push(revenuePoolFactory.pool(i));
        }
        const revenuePoolFactoryEntity: RevenuePoolFactoryEntity = {
            address: revenuePoolFactoryAddress,
            poolCounter: Number(poolCounter),
            poolAddresses: (await Promise.all(promises)).map(
                (address: string) => address,
            ),
        };

        return revenuePoolFactoryEntity;
    }

    async getRevenuePool(
        governorId: number,
        poolIndex: number,
    ): Promise<RevenuePoolEntity> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (governorId < 0 || governorId >= nextGovernorId) {
            throw new BadRequestException();
        }
        const governorAddress = await this.governorFactory.governor(governorId);
        const governor = this.network.getGovernorContract(
            this.provider,
            governorAddress,
        );
        const revenuePoolFactoryAddress = await governor.revenuePoolFactory();
        const revenuePoolFactory = this.network.getRevenuePoolFactoryContract(
            this.provider,
            revenuePoolFactoryAddress,
        );
        const poolCounter = await revenuePoolFactory.poolCounter();
        if (poolIndex < 0 || poolIndex >= poolCounter) {
            throw new BadRequestException();
        }
        const poolAddress = await revenuePoolFactory.pool(poolIndex);
        const revenuePool = this.network.getRevenuePoolContract(
            this.provider,
            poolAddress,
        );
        const result = await Promise.all([
            revenuePool.revenue(),
            this.provider.getBalance(poolAddress),
            revenuePool.nextTokenId(),
        ]);

        const revenuePoolEntity: RevenuePoolEntity = {
            poolIndex: poolIndex,
            address: poolAddress,
            revenue: BigInt(result[0]).toString(),
            balance: BigInt(result[1]).toString(),
            lastValidTokenId: Number(result[2] - 1n),
        };
        return revenuePoolEntity;
    }

    async isClaimed(
        governorId: number,
        poolIndex: number,
        tokenId: number,
    ): Promise<boolean> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (governorId < 0 || governorId >= nextGovernorId) {
            throw new BadRequestException();
        }
        const governorAddress = await this.governorFactory.governor(governorId);
        const governor = this.network.getGovernorContract(
            this.provider,
            governorAddress,
        );
        const revenuePoolFactoryAddress = await governor.revenuePoolFactory();
        const revenuePoolFactory = this.network.getRevenuePoolFactoryContract(
            this.provider,
            revenuePoolFactoryAddress,
        );
        const poolCounter = await revenuePoolFactory.poolCounter();
        if (poolIndex < 0 || poolIndex >= poolCounter) {
            throw new BadRequestException();
        }
        const poolAddress = await revenuePoolFactory.pool(poolIndex);
        const revenuePool = this.network.getRevenuePoolContract(
            this.provider,
            poolAddress,
        );
        return Boolean(await revenuePool.claimed(tokenId));
    }

    async getAllTokens(governorId: number): Promise<TokenEntity[]> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (governorId < 0 || governorId >= nextGovernorId) {
            throw new BadRequestException();
        }
        const governorAddress = await this.governorFactory.governor(governorId);
        const governor = this.network.getGovernorContract(
            this.provider,
            governorAddress,
        );
        const tokenAddress = await governor.token();
        const token = this.network.getTokenContract(
            this.provider,
            tokenAddress,
        );
        const nextTokenId = await token.nextTokenId();
        const tokenEntities: TokenEntity[] = [];
        for (let i = 0; i < nextTokenId; i++) {
            const result = await Promise.all([
                token.ownerOf(i),
                token.getVotingPower(i),
            ]);
            const tokenEntity: TokenEntity = {
                tokenId: i,
                account: result[0],
                value: BigInt(result[1]).toString(),
            };
            tokenEntities.push(tokenEntity);
        }
        return tokenEntities;
    }

    async getTokens(governorId: number, account: string) {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (governorId < 0 || governorId >= nextGovernorId) {
            throw new BadRequestException();
        }
        const governorAddress = await this.governorFactory.governor(governorId);
        const governor = this.network.getGovernorContract(
            this.provider,
            governorAddress,
        );
        const tokenAddress = await governor.token();
        const token = this.network.getTokenContract(
            this.provider,
            tokenAddress,
        );
        const nextTokenId = await token.nextTokenId();
        const tokenEntities: TokenEntity[] = [];
        for (let i = 0; i < nextTokenId; i++) {
            const result = await Promise.all([
                token.ownerOf(i),
                token.getVotingPower(i),
            ]);
            if (account == result[0]) {
                const tokenEntity: TokenEntity = {
                    tokenId: i,
                    account: result[0],
                    value: BigInt(result[1]).toString(),
                };
                tokenEntities.push(tokenEntity);
            }
        }
        return tokenEntities;
    }

    async createRevenuePool(
        createRevenuePoolDto: CreateRevenuePoolDto,
    ): Promise<ActionEntity> {
        const nextGovernorId = await this.governorFactory.nextGovernorId();
        if (
            createRevenuePoolDto.governorId < 0 ||
            createRevenuePoolDto.governorId >= nextGovernorId
        ) {
            throw new BadRequestException();
        }
        try {
            const governorAddress = await this.governorFactory.governor(
                createRevenuePoolDto.governorId,
            );
            const governor = this.network.getGovernorContract(
                this.provider,
                governorAddress,
            );

            const revenuePoolFactoryAddress =
                await governor.revenuePoolFactory();
            const targets = [];
            const values = [];
            const calldatas = [];
            targets.push(revenuePoolFactoryAddress);
            values.push('0');
            const ABI = ['function createPool(address token, uint256 amount)'];
            const iface = new ethers.Interface(ABI);
            const calldata = iface.encodeFunctionData('createPool', [
                createRevenuePoolDto.tokenAddress,
                createRevenuePoolDto.amount,
            ]);
            calldatas.push(calldata);
            const actionEntity: ActionEntity = {
                targets: targets,
                values: values,
                calldatas: calldatas,
            };
            return actionEntity;
        } catch (err) {
            console.log(err);
            throw new BadRequestException();
        }
    }
}
