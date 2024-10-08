import { Module } from '@nestjs/common';
import { CampaignService } from './campaign/campaign.service';
import { CampaignController } from './campaign/campaign.controller';
import { Network } from 'src/network/network';
import { GovernorController } from './governor/governor.controller';
import { GovernorService } from './governor/governor.service';
import { Ipfs } from 'src/ipfs/ipfs';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Builder, BuilderSchema } from 'src/schemas/builder.schema';
import { Organizer, OrganizerSchema } from 'src/schemas/organizer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Builder.name,
                schema: BuilderSchema,
            },
            {
                name: Organizer.name,
                schema: OrganizerSchema,
            },
        ]),
        HttpModule,
    ],
    providers: [CampaignService, Network, GovernorService, Ipfs],
    controllers: [CampaignController, GovernorController],
})
export class NonPrivacyModule {}
