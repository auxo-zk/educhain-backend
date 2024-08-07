import { Module } from '@nestjs/common';
import { CampaignService } from './campaign/campaign.service';
import { CampaignController } from './campaign/campaign.controller';
import { Network } from 'src/network/network';
import { GovernorController } from './governor/governor.controller';
import { GovernorService } from './governor/governor.service';
import { ObjectStorageService } from './object-storage/object-storage.service';
import { ObjectStorageController } from './object-storage/object-storage.controller';

@Module({
    providers: [CampaignService, Network, GovernorService, ObjectStorageService],
    controllers: [CampaignController, GovernorController, ObjectStorageController],
})
export class NonPrivacyModule {}
