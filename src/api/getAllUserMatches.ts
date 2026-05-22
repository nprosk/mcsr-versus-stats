import { maxApiCallsByOneFunction } from "../constants";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import { getUserMatches, type GetUserMatchesParams } from "./getUserMatches";

const fetchAllMatches = async (
    identifier: UserIdentifier,
    params?: GetUserMatchesParams,
    apiCalls = 0
): Promise<{ apiCalls: number; matches: MatchInfo[] }> => {
    const allMatches: MatchInfo[] = [];
    let lastMatchId: string | undefined;
    const countPerPage = 100;

    console.log(`Fetching matches for user ${identifier} with params ${JSON.stringify(params)}...`);

    while (apiCalls < maxApiCallsByOneFunction) {
        const matches = await getUserMatches(identifier, { ...params, count: countPerPage, before: lastMatchId });
        allMatches.push(...matches);
        apiCalls++;

        const hasMore = matches.length === countPerPage;
        if (!hasMore) break;

        lastMatchId = matches.at(-1)?.id;
        if (!lastMatchId) {
            console.warn(`Expected more matches for user ${identifier} but no lastMatchId found. Stopping pagination.`);
            break;
        }
    }

    if (apiCalls >= maxApiCallsByOneFunction) {
        console.warn(`Reached max API calls (${maxApiCallsByOneFunction}) for user ${identifier}. Stopping.`);
    }

    return { apiCalls, matches: allMatches };
};

export const getAllUserMatches = async (identifier: UserIdentifier): Promise<MatchInfo[]> => {
    const allMatches: MatchInfo[] = [];
    let totalApiCalls = 0;

    for (let season = 1; season <= 11; season++) {
        const { apiCalls, matches } = await fetchAllMatches(identifier, { season });

        totalApiCalls += apiCalls;

        if (totalApiCalls >= maxApiCallsByOneFunction) {
            console.warn(`Reached max API calls for user ${identifier}. Returning matches fetched so far.`);
            return [...allMatches, ...matches];
        }

        if (matches.length === 0) {
            console.log(`No matches found for user ${identifier} in season ${season}. Stopping fetch.`);
            continue;
        }

        allMatches.push(...matches);
    }

    console.log("Total api calls made:", totalApiCalls);

    return allMatches;
};