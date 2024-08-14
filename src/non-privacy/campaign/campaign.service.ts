import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { JsonRpcProvider } from 'ethers';
import { CampaignState } from 'src/constants';
import { CampaignEntity, Course } from 'src/entities/campaign.entity';
import { Network } from 'src/network/network';
import { Campaign } from 'typechain-types';

@Injectable()
export class CampaignService implements OnModuleInit {
    private readonly provider: JsonRpcProvider;
    private readonly campaign: Campaign;

    constructor(private readonly network: Network) {
        this.provider = this.network.getLocalHardhatProvider();
        this.campaign = this.network.getCampaignContract(this.provider);
    }

    onModuleInit() {}

    async getCampaigns(): Promise<CampaignEntity[]> {
        const nextCampaignId = await this.campaign.nextCampaignId();
        let promises = [];
        for (let i = 1; i < nextCampaignId; i++) {
            promises.push(this.campaign.campaignData(i));
        }
        const results = await Promise.all(promises);
        const campaigns: CampaignEntity[] = [];
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            const campaignEntity: CampaignEntity = {
                totalFunded: BigInt(result[0]).toString(),
                descriptionHash: result[1],
                fundStart: Number(result[2]),
                fundDuration: Number(result[3]),
                allocated: Boolean(result[4]),
                tokenRaising: result[5],
            };
            const governorIds = result[6].map((governorId: bigint) =>
                Number(governorId),
            );
            promises = governorIds.map((governorId: number) =>
                this.campaign.courseData(i + 1, governorId),
            );

            const courses: Course[] = [];
            const tempResults = await Promise.all(promises);
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
        if (campaignId <= 0 || campaignId >= nextCampaignId) {
            throw new BadRequestException();
        }
        const result = await this.campaign.campaignData(campaignId);
        const campaignEntity: CampaignEntity = {
            totalFunded: BigInt(result[0]).toString(),
            descriptionHash: result[1],
            fundStart: Number(result[2]),
            fundDuration: Number(result[3]),
            allocated: Boolean(result[4]),
            tokenRaising: result[5],
        };
        const governorIds = result[6].map((governorId: bigint) =>
            Number(governorId),
        );
        const promises = governorIds.map((governorId) =>
            this.campaign.courseData(campaignId, governorId),
        );
        const courses: Course[] = [];
        const tempResults = await Promise.all(promises);
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

    async getCampaignState(campaignId: number): Promise<CampaignState> {
        const nextCampaignId = await this.campaign.nextCampaignId();
        if (campaignId <= 0 || campaignId >= nextCampaignId) {
            throw new BadRequestException();
        }
        const state = Number(await this.campaign.state(campaignId));
        return state;
    }
}
