import type { GroupedMatches } from "./groupMatchesByOpponent";
import { MatchTypes, type MatchInfo } from "../types/mscrRankedObjects";

export type MatchFilterFn = (match: MatchInfo) => boolean;

export const applyFilters = (matches: GroupedMatches, ...filterFns: MatchFilterFn[]): GroupedMatches => {
    if (filterFns.length === 0) return matches;
    const combined = (match: MatchInfo) => filterFns.every(fn => fn(match));
    return matches.map(matchGroup => ({
        ...matchGroup,
        matches: matchGroup.matches.filter(combined),
    }));
};

export const applyFilter = (matches: GroupedMatches, filterFn: MatchFilterFn): GroupedMatches =>
    applyFilters(matches, filterFn);

export const privateMatchFilterFn = (match: MatchInfo) => match.type !== MatchTypes.private;

export const seasonFilterFn = (seasons: number[]): MatchFilterFn => (match: MatchInfo) => seasons.includes(match.season);