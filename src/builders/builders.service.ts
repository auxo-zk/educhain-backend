import {
    BadRequestException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthRoleEnum } from 'src/constants';
import { CreateCourseDraftDto } from 'src/dtos/create-course-draft.dto';
import { CreateCourseDto } from 'src/dtos/create-course.dto';
import { UpdateBuilderDto } from 'src/dtos/update-builder.dto';
import { UpdateCourseDraftDto } from 'src/dtos/update-course-draft.dto';
import { IpfsResponse } from 'src/entities/ipfs-response.entity';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { Ipfs } from 'src/ipfs/ipfs';
import { ObjectStorageService } from 'src/object-storage/object-storage.service';
import { Builder } from 'src/schemas/builder.schema';
import { CourseDraft } from 'src/schemas/course-draft.schema';

@Injectable()
export class BuildersService {
    constructor(
        private readonly objectStorageService: ObjectStorageService,
        private readonly ipfs: Ipfs,
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
        createCourseDraftDto: CreateCourseDraftDto,
        jwtPayload: JwtPayload,
    ): Promise<CourseDraft> {
        if (jwtPayload.role != AuthRoleEnum.BUILDER) {
            throw new UnauthorizedException();
        } else {
            return await this.courseDraftModel.create({
                address: jwtPayload.sub,
                name: createCourseDraftDto.name,
                avatarImage: createCourseDraftDto.avatarImage,
                coverImage: createCourseDraftDto.coverImage,
                publicKey: createCourseDraftDto.publicKey,
                description: createCourseDraftDto.description,
                problemStatement: createCourseDraftDto.problemStatement,
                solution: createCourseDraftDto.solution,
                challengeAndRisk: createCourseDraftDto.challengeAndRisk,
                members: createCourseDraftDto.members,
                documents: createCourseDraftDto.documents,
                tokenFunding: createCourseDraftDto.tokenFunding,
            });
        }
    }

    async updateDraft(
        draftId: string,
        updateCourseDraftDto: UpdateCourseDraftDto,
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
                        name: updateCourseDraftDto.name,
                        avatarImage: updateCourseDraftDto.avatarImage,
                        coverImage: updateCourseDraftDto.coverImage,
                        publicKey: updateCourseDraftDto.publicKey,
                        description: updateCourseDraftDto.description,
                        problemStatement: updateCourseDraftDto.problemStatement,
                        solution: updateCourseDraftDto.solution,
                        challengeAndRisk: updateCourseDraftDto.challengeAndRisk,
                        members: updateCourseDraftDto.members,
                        documents: updateCourseDraftDto.documents,
                        tokenFunding: updateCourseDraftDto.tokenFunding,
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

    async createCourse(
        createCourseDto: CreateCourseDto,
        jwtPayload: JwtPayload,
    ): Promise<IpfsResponse> {
        if (jwtPayload.role == AuthRoleEnum.BUILDER) {
            const result = await this.ipfs.uploadJson(createCourseDto);
            if (result == null) {
                throw new BadRequestException();
            }
            return result;
        } else {
            throw new UnauthorizedException();
        }
    }
}
