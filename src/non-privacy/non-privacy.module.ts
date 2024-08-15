import { Module } from '@nestjs/common';
import { CampaignService } from './campaign/campaign.service';
import { CampaignController } from './campaign/campaign.controller';
import { Network } from 'src/network/network';
import { GovernorController } from './governor/governor.controller';
import { GovernorService } from './governor/governor.service';
import { Ipfs } from 'src/ipfs/ipfs';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [CampaignService, Network, GovernorService, Ipfs],
    controllers: [CampaignController, GovernorController],
})
export class NonPrivacyModule {}
