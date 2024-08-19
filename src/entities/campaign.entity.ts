import { CampaignState } from 'src/constants';

export class CampaignEntity {
    campaignId: number;
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
    ipfsData?: object;
}
