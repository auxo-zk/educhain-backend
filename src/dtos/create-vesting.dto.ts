import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateVestingDto {
    @IsNumber()
    governorId: number;

    @IsString()
    tokenAddress: string;

    @IsString()
    receiver: string;

    @IsNumberString()
    amount: string;
}
