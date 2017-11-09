export interface MemberEntity {
    id: number;
    name: string;
    avatar_url: string;
}

export const members: MemberEntity[] =
    [
        {
            id: 1457912,
            name: 'brauliodiez',
            avatar_url: 'https://avatars.githubusercontent.com/u/1457912?v=3'
        },
        {
            id: 4374977,
            name: 'Nasdan',
            avatar_url: 'https://avatars.githubusercontent.com/u/4374977?v=3'
        }
    ];

const fetchMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(members);
};

export const memberAPI = {
    fetchMembers,
};