import { Type } from 'class-transformer';
import {
    IsArray,
    IsOptional,
    IsString,
    IsUrl,
    ValidateNested,
} from 'class-validator';
import { FileInformation } from 'src/entities/file-information.entity';

// class TokenInfo {
//     @IsOptional()
//     address: string;

//     @IsOptional()
//     name: string;

//     @IsOptional()
//     symbol: string;

//     @IsOptional()
//     decimals: number;
// }

class CourseMember {
    @IsOptional()
    name?: string;

    @IsOptional()
    role?: string;

    @IsOptional()
    link?: string;

    @IsOptional()
    publicKey?: string;
}

export class CreateCourseDraftDto {
    @IsOptional()
    name?: string;

    @IsOptional()
    avatarImage?: string;

    @IsOptional()
    coverImage?: string;

    @IsOptional()
    publicKey?: string;

    @IsOptional()
    description?: string;

    @IsOptional()
    problemStatement?: string;

    @IsOptional()
    solution?: string;

    @IsOptional()
    challengeAndRisk?: string;

    @Type(() => CourseMember)
    @IsOptional()
    members?: CourseMember[];

    @Type(() => FileInformation)
    @IsOptional()
    documents?: FileInformation[];

    // @Type(() => TokenInfo)
    // @IsOptional()
    // tokenFunding: TokenInfo;
}
