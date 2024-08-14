export const ContractAddresses = {
    'non-privacy': {
        campaign: '0x8addD204ef28ebC1467f67AE9AB73a3d4b718459',
        governorFactory: '0x5C1731263FB90AB046282aaa789109DdF15755ba',
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
