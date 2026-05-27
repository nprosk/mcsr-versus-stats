import data from "../scripts/testData/nproskGroupedMatches.json";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";

export const getTestGroupedMatches = (): Record<UserIdentifier | "NO_OPPONENT", MatchInfo[]> => {
    return data;
}