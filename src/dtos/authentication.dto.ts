import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsString, ValidateNested } from 'class-validator';
import { AuthRoleEnum } from 'src/constants';

class ServerSignature {
    @IsString()
    msg: string;

    @IsString()
    msgHash: string;

    @IsString()
    signature: string;
}

export class AuthenticationDto {
    address: string;

    @IsEnum(AuthRoleEnum)
    @ApiProperty({
        enum: AuthRoleEnum,
    })
    role: number;

    signature: string;

    @ValidateNested()
    @Type(() => ServerSignature)
    serverSignature: ServerSignature;
}
