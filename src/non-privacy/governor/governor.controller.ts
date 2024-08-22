import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
} from '@nestjs/common';
import { GovernorService } from './governor.service';
import { ApiTags } from '@nestjs/swagger';
import {
    GovernorEntity,
    ProposalEntity,
    RevenuePoolEntity,
    RevenuePoolFactoryEntity,
} from 'src/entities/governor.entity';
import { TokenEntity } from 'src/entities/token.entity';
import { CreateRevenuePoolDto } from 'src/dtos/create-revenue-pool.dto';
import { ActionEntity } from 'src/entities/action.entity';
import { CreateVestingDto } from 'src/dtos/create-vesting.dto';
import { Course } from 'src/entities/campaign.entity';
import { GetJoinedCampaignsDto } from 'src/dtos/get-joined-campaigns.dto';
import { GetJoinedCampaignDto } from 'src/dtos/get-joined-campaign.dto';

@Controller('non-privacy/governors')
export class GovernorController {
    constructor(private readonly governorService: GovernorService) {}

    @Get('')
    @ApiTags('Governor')
    async getGovernors(): Promise<GovernorEntity[]> {
        return await this.governorService.getGovernors();
    }

    @Get('joined-campaign')
    @ApiTags('Governor')
    async getJoinedCampaign(
        @Query() getJoinedCampaignDto: GetJoinedCampaignDto,
    ): Promise<Course> {
        return await this.governorService.getJoinedCampaign(
            getJoinedCampaignDto.governorAddress,
            getJoinedCampaignDto.campaignId,
        );
    }

    @Get('joined-campaigns')
    @ApiTags('Governor')
    async getJoinedCampaigns(
        @Query() getJoinedCampaignsDto: GetJoinedCampaignsDto,
    ): Promise<Course[]> {
        return await this.governorService.getJoinedCampaigns(
            getJoinedCampaignsDto.governorAddress,
        );
    }

    @Get(':governorId')
    @ApiTags('Governor')
    async getGovernor(
        @Param('governorId', ParseIntPipe) governorId: number,
    ): Promise<GovernorEntity> {
        return await this.governorService.getGovernor(governorId);
    }

    @Get(':governorId/proposals')
    @ApiTags('Governor')
    async getProposals(
        @Param('governorId', ParseIntPipe) governorId: number,
    ): Promise<ProposalEntity[]> {
        return await this.governorService.getProposals(governorId);
    }

    @Get(':governorId/revenue-pool-factory')
    @ApiTags('Governor')
    async getRevenuePoolFactory(
        @Param('governorId', ParseIntPipe) governorId: number,
    ): Promise<RevenuePoolFactoryEntity> {
        return await this.governorService.getRevenuePoolFactory(governorId);
    }

    @Get(':governorId/revenue-pool-factory/:poolIndex')
    @ApiTags('Governor')
    async getRevenuePool(
        @Param('governorId', ParseIntPipe) governorId: number,
        @Param('poolIndex', ParseIntPipe) poolIndex: number,
    ): Promise<RevenuePoolEntity> {
        return await this.governorService.getRevenuePool(governorId, poolIndex);
    }

    @Get(':governorId/revenue-pool-factory/:poolIndex/is-claimed/:tokenId')
    @ApiTags('Governor')
    async isClaimed(
        @Param('governorId', ParseIntPipe) governorId: number,
        @Param('poolIndex', ParseIntPipe) poolIndex: number,
        @Param('tokenId', ParseIntPipe) tokenId: number,
    ): Promise<boolean> {
        return await this.governorService.isClaimed(
            governorId,
            poolIndex,
            tokenId,
        );
    }

    @Get(':governorId/tokens/all')
    @ApiTags('Governor')
    async getAllTokens(
        @Param('governorId', ParseIntPipe) governorId: number,
    ): Promise<TokenEntity[]> {
        return await this.governorService.getAllTokens(governorId);
    }

    @Get(':governorId/tokens/:account')
    @ApiTags('Governor')
    async getTokens(
        @Param('governorId', ParseIntPipe) governorId: number,
        @Param('account') account: string,
    ): Promise<TokenEntity[]> {
        return await this.governorService.getTokens(governorId, account);
    }

    @Post('bytecode/create-revenue-pool')
    @ApiTags('Governor')
    async createRevenuePool(
        @Body() createRevenuePoolDto: CreateRevenuePoolDto,
    ): Promise<ActionEntity> {
        return await this.governorService.createRevenuePool(
            createRevenuePoolDto,
        );
    }

    @Post('bytecode/create-vesting')
    @ApiTags('Governor')
    async createVesting(
        @Body() createVestingDto: CreateVestingDto,
    ): Promise<ActionEntity> {
        return await this.governorService.createVesting(createVestingDto);
    }
}
