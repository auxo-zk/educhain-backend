import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { JsonRpcProvider, Provider } from 'ethers';
import { CampaignState } from 'src/constants';
import { CampaignEntity, Course } from 'src/entities/campaign.entity';
import { Ipfs } from 'src/ipfs/ipfs';
import { Network } from 'src/network/network';
import { Utilities } from 'src/utilities';
import { Campaign } from 'typechain-types';

@Injectable()
export class CampaignService implements OnModuleInit {
    private readonly provider: Provider;
    private readonly campaign: Campaign;

    constructor(
        private readonly network: Network,
        private readonly ipfs: Ipfs,
    ) {
        this.provider = this.network.getDefaultProvider();
        this.campaign = this.network.getCampaignContract(this.provider);
    }

    onModuleInit() {}

    async getCampaigns(): Promise<CampaignEntity[]> {
        const nextCampaignId = await this.campaign.nextCampaignId();
        // let promises = [];
        const results: any[] = [];
        for (let i = 1; i < nextCampaignId; i++) {
            results.push(await this.campaign.campaignData(i));
        }
        // const results = await Promise.all(promises);

        const campaigns: CampaignEntity[] = [];
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            const campaignEntity: CampaignEntity = {
                campaignId: i,
                totalFunded: BigInt(result[0]).toString(),
                descriptionHash: result[1],
                fundStart: Number(result[2]),
                fundDuration: Number(result[3]),
                allocated: Boolean(result[4]),
                tokenRaising: result[5],
                state: Number(await this.campaign.state(i)),
            };
            campaignEntity.ipfsData = await this.ipfs.getData(
                Utilities.bytes32ToIpfsHash(campaignEntity.descriptionHash),
            );
            const governorIds = result[6].map((governorId: bigint) =>
                Number(governorId),
            );
            const tempResults = governorIds.map(
                async (governorId: number) =>
                    await this.campaign.courseData(i + 1, governorId),
            );

            const courses: Course[] = [];
            // const tempResults = await Promise.all(promises);
            for (let j = 0; j < governorIds.length; j++) {
                const tempResult = tempResults[j];
                const course: Course = {
                    governorId: governorIds[j],
                    governor: tempResult[0],
                    fund: BigInt(tempResult[1]).toString(),
                    minted: Number(tempResult[2]),
                };
                courses.push(course);
            }
            campaignEntity.courses = courses;
            campaigns.push(campaignEntity);
        }
        return campaigns;
    }

    async getCampaign(campaignId: number): Promise<CampaignEntity> {
        const nextCampaignId = await this.campaign.nextCampaignId();
        if (campaignId < 0 || campaignId >= nextCampaignId) {
            throw new BadRequestException();
        }
        const result = await this.campaign.campaignData(campaignId);
        const campaignEntity: CampaignEntity = {
            campaignId: campaignId,
            totalFunded: BigInt(result[0]).toString(),
            descriptionHash: result[1],
            fundStart: Number(result[2]),
            fundDuration: Number(result[3]),
            allocated: Boolean(result[4]),
            tokenRaising: result[5],
            state: Number(await this.campaign.state(campaignId)),
        };
        campaignEntity.ipfsData = await this.ipfs.getData(
            Utilities.bytes32ToIpfsHash(campaignEntity.descriptionHash),
        );
        const governorIds = result[6].map((governorId: bigint) =>
            Number(governorId),
        );
        const tempResults = governorIds.map(
            async (governorId) =>
                await this.campaign.courseData(campaignId, governorId),
        );
        const courses: Course[] = [];
        for (let j = 0; j < governorIds.length; j++) {
            const tempResult = tempResults[j];
            const course: Course = {
                governorId: governorIds[j],
                governor: tempResult[0],
                fund: BigInt(tempResult[1]).toString(),
                minted: Number(tempResult[2]),
            };
            courses.push(course);
        }
        campaignEntity.courses = courses;
        return campaignEntity;
    }

    async getCampaignsByOrganizer(address: string): Promise<CampaignEntity[]> {
        try {
            const campaignIds = await this.campaign.campaignsOwn(address);
            const campaignEntities: CampaignEntity[] = [];
            for (let i = 0; i < campaignIds.length; i++) {
                const campaignId = Number(campaignIds[i]);
                const campaignEntity = await this.getCampaign(campaignId);
                campaignEntities.push(campaignEntity);
            }
            return campaignEntities;
        } catch (err) {
            throw new BadRequestException();
        }
    }

    async getCampaignState(campaignId: number): Promise<CampaignState> {
        const nextCampaignId = await this.campaign.nextCampaignId();
        if (campaignId <= 0 || campaignId >= nextCampaignId) {
            throw new BadRequestException();
        }
        const state = Number(await this.campaign.state(campaignId));

        return state;
    }
}
