export class CampaignEntity {
    totalFunded: string;
    descriptionHash: string;
    fundStart: number;
    fundDuration: number;
    allocated: boolean;
    courses?: Course[];
}

export class Course {
    governorId: number;
    governor: string;
    fund: string;
    minted: number;
}
