import type { UserIdentifier, MatchInfo } from "../types/mscrRankedObjects"

export type OpponentGroup = {opponent: UserIdentifier | "NO_OPPONENT", matches:MatchInfo[]};
export type GroupedMatches = OpponentGroup[];

export const groupMatchesByOpponent = (thisPlayer: UserIdentifier, matches: MatchInfo[]): GroupedMatches => {
    const grouped: Record<UserIdentifier | "NO_OPPONENT", MatchInfo[]> = {} as Record<UserIdentifier | "NO_OPPONENT", MatchInfo[]>;

    matches.forEach(match => {
        if (match.players.length === 1) {
            if (!grouped["NO_OPPONENT"]) {
                grouped["NO_OPPONENT"] = [];
            }
            grouped["NO_OPPONENT"].push(match);
        }
        else if (match.players.length === 2) {
            const opponent = match.players.find(player => player.nickname !== thisPlayer && player.uuid !== thisPlayer);
            if (opponent) {
                if (!grouped[opponent.uuid]) {
                    grouped[opponent.uuid] = [];
                }
                grouped[opponent.uuid].push(match);
            }
        }
    });

    const groupedArray = Object.entries(grouped).map(([opponent, matches]) => ({ opponent, matches }));

    return groupedArray;
}