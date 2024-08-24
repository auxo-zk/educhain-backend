import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateVestingDto {
    @IsNumber()
    campaignId: number;

    @IsString()
    governorAddress: string;

    @IsNumberString()
    amount: string;
}
