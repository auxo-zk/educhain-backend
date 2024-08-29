export const ContractAddresses = {
    'non-privacy': {
        campaign: '0x2890C43A533CE1fEEcB92BD6751831183C506E3f',
        governorFactory: '0x46807C2576FA86C5740e7f580940596D0fD4B3EF',
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
