export const ContractAddresses = {
    'non-privacy': {
        campaign: '0xC79CF42Eeb80db2670AF59aF26B4069c55B01eb5',
        governorFactory: '0x1575db1584584Df9011d54E5d8d0Df7F2949d1bA',
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

export const authTimeLimit = 120 * 10000;

export enum AuthRoleEnum {
    BUILDER,
    ORGANIZER,
    INVESTOR,
}
