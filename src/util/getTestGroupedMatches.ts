import data from "../scripts/testData/nproskGroupedMatches.json";
import type { GroupedMatches } from "./groupMatchesByOpponent";

export const getTestGroupedMatches = (): GroupedMatches => {
    return data;
}