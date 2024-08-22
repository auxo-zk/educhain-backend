import { IsString } from 'class-validator';

export class GetJoinedCampaignsDto {
    @IsString()
    governorAddress: string;
}
