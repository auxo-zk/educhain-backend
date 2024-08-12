import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthRoleEnum } from 'src/constants';
import { CreateCourseDraftDto } from 'src/dtos/create-course-draft.dto';
import { UpdateBuilderDto } from 'src/dtos/update-builder.dto';
import { UpdateCourseDraftDto } from 'src/dtos/update-course-draft.dto';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { ObjectStorageService } from 'src/non-privacy/object-storage/object-storage.service';
import { Builder } from 'src/schemas/builder.schema';
import { CourseDraft } from 'src/schemas/course-draft';

@Injectable()
export class BuildersService {
    constructor(
        private readonly objectStorageService: ObjectStorageService,
        @InjectModel(Builder.name)
        private readonly builderModel: Model<Builder>,
        @InjectModel(CourseDraft.name)
        private readonly courseDraftModel: Model<CourseDraft>,
    ) {}

    async getBuilder(address: string): Promise<Builder> {
        return (
            (await this.builderModel.findOne({ address: address })) ||
            ({} as any)
        );
    }

    async updateAvatar(
        avatar: Express.Multer.File,
        jwtPayload: JwtPayload,
    ): Promise<string> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            const fileInfo = await this.objectStorageService.uploadFile(avatar);
            await this.builderModel.findOneAndUpdate(
                { address: jwtPayload.sub },
                {
                    img: fileInfo.URL,
                },
                { new: true, upsert: true },
            );
            return fileInfo.URL;
        }
    }

    async updateBuilder(
        updateBuilderDto: UpdateBuilderDto,
        jwtPayload: JwtPayload,
    ): Promise<Builder> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            return await this.builderModel.findOneAndUpdate(
                { address: jwtPayload.sub },
                {
                    address: jwtPayload.sub,
                    name: updateBuilderDto.name,
                    role: updateBuilderDto.role,
                    link: updateBuilderDto.link,
                    description: updateBuilderDto.description,
                },
                { new: true, upsert: true },
            );
        }
    }

    async getDrafts(jwtPayload: JwtPayload): Promise<CourseDraft[]> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            return await this.courseDraftModel.find({
                address: jwtPayload.sub,
            });
        }
    }

    async getDraft(
        draftId: string,
        jwtPayload: JwtPayload,
    ): Promise<CourseDraft> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            return (
                (await this.courseDraftModel.findOne({
                    _id: draftId,
                    address: jwtPayload.sub,
                })) || ({} as any)
            );
        }
    }

    async createDraft(
        createProjectDraftDto: CreateCourseDraftDto,
        jwtPayload: JwtPayload,
    ): Promise<CourseDraft> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            return await this.courseDraftModel.create({
                address: jwtPayload.sub,
                name: createProjectDraftDto.name,
                avatarImage: createProjectDraftDto.avatarImage,
                coverImage: createProjectDraftDto.coverImage,
                publicKey: createProjectDraftDto.publicKey,
                description: createProjectDraftDto.description,
                problemStatement: createProjectDraftDto.problemStatement,
                solution: createProjectDraftDto.solution,
                challengeAndRisk: createProjectDraftDto.challengeAndRisk,
                members: createProjectDraftDto.members,
                documents: createProjectDraftDto.documents,
            });
        }
    }

    async updateDraft(
        draftId: string,
        updateProjectDraftDto: UpdateCourseDraftDto,
        jwtPayload: JwtPayload,
    ): Promise<CourseDraft> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            const exist = await this.courseDraftModel.exists({
                _id: draftId,
                address: jwtPayload.sub,
            });
            if (exist) {
                return await this.courseDraftModel.findOneAndUpdate(
                    { _id: draftId, address: jwtPayload.sub },
                    {
                        name: updateProjectDraftDto.name,
                        avatarImage: updateProjectDraftDto.avatarImage,
                        coverImage: updateProjectDraftDto.coverImage,
                        publicKey: updateProjectDraftDto.publicKey,
                        description: updateProjectDraftDto.description,
                        problemStatement:
                            updateProjectDraftDto.problemStatement,
                        solution: updateProjectDraftDto.solution,
                        challengeAndRisk:
                            updateProjectDraftDto.challengeAndRisk,
                        members: updateProjectDraftDto.members,
                        documents: updateProjectDraftDto.documents,
                    },
                    { new: true, upsert: true },
                );
            } else {
                throw new NotFoundException();
            }
        }
    }

    async deleteDraft(draftId: string, jwtPayload: JwtPayload): Promise<void> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            const exist = await this.courseDraftModel.exists({
                _id: draftId,
                address: jwtPayload.sub,
            });
            if (exist) {
                await this.courseDraftModel.deleteOne({
                    _id: draftId,
                    address: jwtPayload.sub,
                });
            } else {
                throw new NotFoundException();
            }
        }
    }
}
