import {
    Body,
    Controller,
    Delete,
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
import { BuildersService } from './builders.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateBuilderDto } from 'src/dtos/update-builder.dto';
import { Builder } from 'src/schemas/builder.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { CourseDraft } from 'src/schemas/course-draft.schema';
import { UpdateCourseDraftDto } from 'src/dtos/update-course-draft.dto';
import { CreateCourseDraftDto } from 'src/dtos/create-course-draft.dto';
import { CreateCourseDto } from 'src/dtos/create-course.dto';
import { IpfsResponse } from 'src/entities/ipfs-response.entity';

@Controller('builders')
export class BuildersController {
    constructor(private readonly buildersService: BuildersService) {}

    @Post()
    @ApiTags('Builder')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async updateBuilder(
        @Body() updateBuilderDto: UpdateBuilderDto,
        @Request() req: any,
    ): Promise<Builder> {
        return await this.buildersService.updateBuilder(
            updateBuilderDto,
            req.user,
        );
    }

    @Post('update-avatar')
    @ApiTags('Builder')
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
        return await this.buildersService.updateAvatar(avatar, req.user);
    }

    @Get(':address')
    @ApiTags('Builder')
    async getBuilder(@Param('address') address: string): Promise<Builder> {
        return await this.buildersService.getBuilder(address);
    }

    @Get('drafts/all')
    @ApiTags('Builder')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async getDrafts(@Request() req: any): Promise<CourseDraft[]> {
        return await this.buildersService.getDrafts(req.user);
    }

    @Get('drafts/:draftId')
    @ApiTags('Builder')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async getDraft(
        @Param('draftId') draftId: string,
        @Request() req: any,
    ): Promise<CourseDraft> {
        return await this.buildersService.getDraft(draftId, req.user);
    }

    @Post('drafts/:draftId')
    @ApiTags('Builder')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async updateDraft(
        @Param('draftId') draftId: string,
        @Body() updateCourseDraftDto: UpdateCourseDraftDto,
        @Request() req: any,
    ): Promise<CourseDraft> {
        return await this.buildersService.updateDraft(
            draftId,
            updateCourseDraftDto,
            req.user,
        );
    }

    @Delete('drafts/:draftId')
    @ApiTags('Builder')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async deleteDraft(
        @Param('draftId') draftId: string,
        @Request() req: any,
    ): Promise<void> {
        await this.buildersService.deleteDraft(draftId, req.user);
    }

    @Post('drafts')
    @ApiTags('Builder')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async createDraft(
        @Body() createCourseDraftDto: CreateCourseDraftDto,
        @Request() req: any,
    ): Promise<CourseDraft> {
        return await this.buildersService.createDraft(
            createCourseDraftDto,
            req.user,
        );
    }

    @Post('create-course-ipfs-hash')
    @ApiTags('Project')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async createProject(
        @Body() createCourseDto: CreateCourseDto,
        @Request() req: any,
    ): Promise<IpfsResponse> {
        return await this.buildersService.createCourse(
            createCourseDto,
            req.user,
        );
    }
}
