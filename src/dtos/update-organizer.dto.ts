import { IsString, IsUrl } from 'class-validator';

export class UpdateOrganizerDto {
    @IsString()
    name: string;

    @IsString()
    role: string;

    @IsUrl()
    link: string;

    @IsString()
    description: string;
}
