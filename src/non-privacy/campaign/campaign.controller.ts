import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { Network } from 'src/network/network';
import { ApiTags } from '@nestjs/swagger';
import { CampaignEntity } from 'src/entities/campaign.entity';
import { CampaignState } from 'src/constants';
import { GetCampaignsDto } from 'src/dtos/get-campaigns.dto';

@Controller('non-privacy/campaigns')
export class CampaignController {
    constructor(
        private readonly network: Network,
        private readonly campaignService: CampaignService,
    ) {}

    @Get('')
    @ApiTags('Campaign')
    async getCampaigns(
        @Query() getCampaignsDto: GetCampaignsDto,
    ): Promise<CampaignEntity[]> {
        if (getCampaignsDto.organizer) {
            return await this.campaignService.getCampaignsByOrganizer(
                getCampaignsDto.organizer,
            );
        } else {
            return await this.campaignService.getCampaigns();
        }
    }

    @Get(':campaignId')
    @ApiTags('Campaign')
    async getCampaign(
        @Param('campaignId', ParseIntPipe) campaignId: number,
    ): Promise<CampaignEntity> {
        return await this.campaignService.getCampaign(campaignId);
    }

    @Get(':campaignId/state')
    @ApiTags('Campaign')
    async getCampaignState(
        @Param('campaignId', ParseIntPipe) campaignId: number,
    ): Promise<CampaignState> {
        return await this.campaignService.getCampaignState(campaignId);
    }
}
