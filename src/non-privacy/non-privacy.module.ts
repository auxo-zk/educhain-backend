import { Module } from '@nestjs/common';
import { CampaignService } from './campaign/campaign.service';
import { CampaignController } from './campaign/campaign.controller';
import { Network } from 'src/network/network';
import { GovernorController } from './governor/governor.controller';
import { GovernorService } from './governor/governor.service';

@Module({
    providers: [CampaignService, Network, GovernorService],
    controllers: [CampaignController, GovernorController],
})
export class NonPrivacyModule {}
