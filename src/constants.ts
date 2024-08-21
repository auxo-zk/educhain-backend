export const ContractAddresses = {
    'non-privacy': {
        campaign: '0x17049dC67055b8D8d762eC5D8c331077e44eBB83',
        governorFactory: '0xf6023C063E71a20B49F646b16D0ce8B8fEe639c5',
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
