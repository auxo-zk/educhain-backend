import { IsOptional, IsString } from 'class-validator';

export class GetCampaignsDto {
    @IsString()
    @IsOptional()
    organizer?: string;
}
