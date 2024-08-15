export const ContractAddresses = {
    'non-privacy': {
        campaign: '0x6dF9314e6849aC82bFe7b71898A0AA46134175bE',
        governorFactory: '0xe04F111eE5616B7741b5d9aA8836528c29B837AE',
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
