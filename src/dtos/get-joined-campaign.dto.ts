import { IsNumber, IsString } from 'class-validator';

export class GetJoinedCampaignDto {
    @IsString()
    governorAddress: string;

    @IsNumber()
    campaignId: number;
}
