export const ContractAddresses = {
    'non-privacy': {
        campaign: '0x07c2A3893b5c30A32015D8D7f869749b97CEc821',
        governorFactory: '0x7F5BBCc804A94c4d450871612993cBE480Fe0E22',
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
