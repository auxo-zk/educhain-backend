export const ContractAddresses = {
    'non-privacy': {
        campaign: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        governorFactory: '0xa16E02E87b7454126E5E10d957A927A7F5B5d2be',
    },
};

export enum CampaignState {
    Pending,
    Active,
    Succeeded,
    Allocated,
}

export enum ProposalState {
    Pending,
    Active,
    Canceled,
    Defeated,
    Succeeded,
    Queued,
    Expired,
    Executed,
}

export const authTimeLimit = 120 * 1000;

export enum AuthRoleEnum {
    BUILDER,
    ORGANIZER,
    INVESTOR,
}
