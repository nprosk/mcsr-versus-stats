import type { GroupedMatches } from "./groupMatchesByOpponent";
import { MatchTypes } from "../types/mscrRankedObjects";

export const filterOutPrivateMatches = (matches: GroupedMatches): GroupedMatches => {
    return matches.map(matchGroup => ({
        ...matchGroup,
        matches: matchGroup.matches.filter(match => match.type !== MatchTypes.private),
    }));
}