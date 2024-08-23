export const ContractAddresses = {
    'non-privacy': {
        campaign: '0xF13f328C397891dF0207eD628976fA4a2Af9d835',
        governorFactory: '0xfa8E1595Df8e7c1952686e153B6c16B1d582B59f',
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
