import { Type } from 'class-transformer';
import {
    IsArray,
    IsOptional,
    IsString,
    IsUrl,
    ValidateNested,
} from 'class-validator';
import { FileInformation } from 'src/entities/file-information.entity';

class CourseMember {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    role?: string;

    @IsString()
    @IsOptional()
    link?: string;

    @IsString()
    @IsOptional()
    publicKey?: string;
}

export class CreateCourseDraftDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsUrl()
    @IsOptional()
    avatarImage?: string;

    @IsUrl()
    @IsOptional()
    coverImage?: string;

    @IsString()
    @IsOptional()
    publicKey?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    problemStatement?: string;

    @IsString()
    @IsOptional()
    solution?: string;

    @IsString()
    @IsOptional()
    challengeAndRisk?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CourseMember)
    @IsOptional()
    members?: CourseMember[];

    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => FileInformation)
    documents?: FileInformation[];
}
