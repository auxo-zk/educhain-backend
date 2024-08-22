import { CampaignState } from 'src/constants';
import { Organizer } from 'src/schemas/organizer.schema';

export class CampaignEntity {
    campaignId: number;
    founder: string;
    founderInfo?: Organizer;
    totalFunded: string;
    descriptionHash: string;
    fundStart: number;
    fundDuration: number;
    allocated: boolean;
    courses?: Course[];
    tokenRaising: string;
    ipfsData?: object;
    state: CampaignState;
}

export class Course {
    governorId: number;
    governor: string;
    fund: string;
    minted: number;
    descriptionHash: string;
    campaignId?: number;
    ipfsData?: object;
}
