import { Type } from 'class-transformer';
import {
    IsArray,
    IsNumber,
    IsString,
    IsUrl,
    ValidateNested,
} from 'class-validator';
import { FileInformation } from 'src/entities/file-information.entity';

// class TokenInfo {
//     @IsString()
//     address: string;

//     @IsString()
//     name: string;

//     @IsString()
//     symbol: string;

//     @IsNumber()
//     decimals: number;
// }
class CourseMember {
    @IsString()
    name: string;

    @IsString()
    role: string;

    @IsString()
    link: string;

    @IsString()
    publicKey: string;
}

export class CreateCourseDto {
    @IsString()
    name: string;

    @IsUrl()
    avatarImage: string;

    @IsUrl()
    coverImage: string;

    @IsString()
    publicKey: string;

    @IsString()
    description: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CourseMember)
    members: CourseMember[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => FileInformation)
    documents: FileInformation[];

    // @ValidateNested()
    // @Type(() => TokenInfo)
    // tokenFunding: TokenInfo;
}
