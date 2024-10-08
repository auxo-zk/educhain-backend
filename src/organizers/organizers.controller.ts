import {
    Body,
    Controller,
    FileTypeValidator,
    Get,
    Param,
    ParseFilePipe,
    Post,
    Request,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { OrganizersService } from './organizers.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateOrganizerDto } from 'src/dtos/update-organizer.dto';
import { Organizer } from 'src/schemas/organizer.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCampaignDto } from 'src/dtos/create-campaign.dto';
import { IpfsResponse } from 'src/entities/ipfs-response.entity';

@Controller('organizers')
export class OrganizersController {
    constructor(private readonly organizersService: OrganizersService) {}

    @Post()
    @ApiTags('Organizer')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async updateOrganizer(
        @Body() updateOrganizerDto: UpdateOrganizerDto,
        @Request() req: any,
    ): Promise<Organizer> {
        return await this.organizersService.updateOrganizer(
            updateOrganizerDto,
            req.user,
        );
    }

    @Post('update-avatar')
    @ApiTags('Organizer')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: { avatar: { type: 'string', format: 'binary' } },
        },
    })
    @UseInterceptors(
        FileInterceptor('avatar', { limits: { fileSize: 10485760 } }),
    )
    async updateAvatar(
        @UploadedFile(
            new ParseFilePipe({
                validators: [new FileTypeValidator({ fileType: 'image/*' })],
            }),
        )
        avatar: Express.Multer.File,
        @Request() req: any,
    ): Promise<string> {
        return await this.organizersService.updateAvatar(avatar, req.user);
    }

    @Get(':address')
    @ApiTags('Organizer')
    async getOrganizer(@Param('address') address: string) {
        return await this.organizersService.getOrganizer(address);
    }

    @Post('create-campaign-ipfs-hash')
    @ApiTags('Organizer')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async createCampaign(
        @Body() createCampaignDto: CreateCampaignDto,
        @Request() req: any,
    ): Promise<IpfsResponse> {
        return await this.organizersService.createCampaign(
            createCampaignDto,
            req.user,
        );
    }
}
