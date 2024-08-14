import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateRevenuePoolDto {
    @IsNumber()
    governorId: number;

    @IsString()
    tokenAddress: string;

    @IsNumberString()
    amount: string;
}
