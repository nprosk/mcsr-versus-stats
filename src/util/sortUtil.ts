import type { GroupedMatches } from "./groupMatchesByOpponent";

export const sortMatchesByTotalMatches = (matches: GroupedMatches): GroupedMatches => {

    const sorted = [...matches].sort((a, b) => b.matches.length - a.matches.length);

    return sorted;
}