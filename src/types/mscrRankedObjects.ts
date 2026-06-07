export type UserIdentifier = string; //one of uuid, nickname, or discord.discordId

export const MatchTypes = {
    "casual": 1,
    "ranked": 2,
    "private": 3,
    "event": 4,
}

export type MatchType = typeof MatchTypes[keyof typeof MatchTypes];

export type MCSRDate = number; // Displays a specific date as an epoch time (timestamp) in seconds. (NOT milliseconds!)

export type MCSRTime = number; // Displays a specific time as an epoch time (timestamp) in milliseconds

export type UserProfile = {
    uuid: string;
    nickname: string;
    roleType: number;
    eloRate?: number | null;
    eloRank?: number | null;
    country?: string | null; //country code
}

export type MatchSeed = {
    id?: string;
    overworld?: string;
    nether?: string;
    endTowers: number[]; // https://docs.mcsrranked.com/assets/img/endTowers.png 
    variations: string[];
}

export type MatchInfo = {
    id: number;
    type: MatchType;
    season: number;
    category: string;
    date: MCSRDate;
    players: UserProfile[];
    spectators: UserProfile[];
    seed?: MatchSeed;
    result: {
        uuid: string | null; //uuid of the winner
        time: MCSRTime;
    }
    forfeited: boolean;
    decayed: boolean;
    rank: {
        season: number | null;
        allTime: number | null;
    },
    changes: {
        uuid: string;
        change: number | null; //null if no change, otherwise the amount of elo change
        eloRate: number | null; //null if no change, otherwise the new elo rate after the match
    }[];
    tag: string | null;
    beginner: boolean;
    vod: {
        uuid: string; //uuid of the player who uploaded the vod
        url: string;
        startsAt: MCSRDate;
    }[];
}

export type AdvancedMatchInfo = MatchInfo & {
    completions: {
        uuid: string; //uuid of the player who completed the match
        time: MCSRTime;
    }[];
    timelines: {
        uuid: string; //uuid of the player whose timeline it is
        time: MCSRTime;
        type: string;
    }[];
    replayExist: boolean;
}

export type MatchSortOptions = "newest" | "oldest" | "fastest" | "slowest";