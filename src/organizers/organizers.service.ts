import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthRoleEnum } from 'src/constants';
import { CreateCampaignDto } from 'src/dtos/create-campaign.dto';
import { UpdateOrganizerDto } from 'src/dtos/update-organizer.dto';
import { IpfsResponse } from 'src/entities/ipfs-response.entity';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { Ipfs } from 'src/ipfs/ipfs';
import { ObjectStorageService } from 'src/non-privacy/object-storage/object-storage.service';
import { Organizer } from 'src/schemas/organizer.schema';

@Injectable()
export class OrganizersService {
    constructor(
        private readonly objectStorageService: ObjectStorageService,
        private readonly ipfs: Ipfs,
        @InjectModel(Organizer.name)
        private readonly organizerModel: Model<Organizer>,
    ) {}

    async updateOrganizer(
        updateOrganizerDto: UpdateOrganizerDto,
        jwtPayload: JwtPayload,
    ): Promise<Organizer> {
        if (jwtPayload.role != AuthRoleEnum.ORGANIZER) {
            throw new UnauthorizedException();
        } else {
            return await this.organizerModel.findOneAndUpdate(
                { address: jwtPayload.sub },
                {
                    address: jwtPayload.sub,
                    name: updateOrganizerDto.name,
                    role: updateOrganizerDto.role,
                    link: updateOrganizerDto.link,
                    description: updateOrganizerDto.description,
                },
                { new: true, upsert: true },
            );
        }
    }

    async updateAvatar(
        avatar: Express.Multer.File,
        jwtPayload: JwtPayload,
    ): Promise<string> {
        if (jwtPayload.role != AuthRoleEnum.ORGANIZER) {
            throw new UnauthorizedException();
        } else {
            const fileInfo = await this.objectStorageService.uploadFile(avatar);
            await this.organizerModel.findOneAndUpdate(
                { address: jwtPayload.sub },
                {
                    img: fileInfo.URL,
                },
                { new: true, upsert: true },
            );
            return fileInfo.URL;
        }
    }

    async getOrganizer(address: string): Promise<Organizer> {
        return (
            (await this.organizerModel.findOne({ address: address })) ||
            ({} as any)
        );
    }

    async createCampaign(
        createCampaignDto: CreateCampaignDto,
        jwtPayload: JwtPayload,
    ): Promise<IpfsResponse> {
        if (jwtPayload.role == AuthRoleEnum.ORGANIZER) {
            const result = await this.ipfs.uploadJson(createCampaignDto);
            if (result == null) {
                throw new BadRequestException();
            }
            return result;
        } else {
            throw new UnauthorizedException();
        }
    }
}
