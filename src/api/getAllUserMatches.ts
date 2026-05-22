import type { UserIdentifier } from "../types/mscrRankedObjects";
import { getUserMatches, type GetUserMatchesResponse } from "./getUserMatches";

export const getAllUserMatches = async (identifier: UserIdentifier): Promise<GetUserMatchesResponse> => {
    let allMatches: GetUserMatchesResponse = [];
    let lastMatchId: string | undefined = undefined;
    let hasMore = true;
    const countPerPage = 100;
    const maxApiCalls = 20; // rate limited, so stop after max 2000 matches
    let apiCalls = 0;

    console.log(`Fetching matches for user ${identifier}...`);

    while (hasMore && apiCalls < maxApiCalls) {
        const queryParams = lastMatchId ? { count: countPerPage, before: lastMatchId } : { count: countPerPage };
        const matches = await getUserMatches(identifier, queryParams);
        allMatches.push(...matches);
        lastMatchId = matches[matches.length - 1]?.id;
        hasMore = matches.length === countPerPage;
        if (!lastMatchId && hasMore) {
            console.warn(`Expected more matches for user ${identifier} but no lastMatchId found. Stopping pagination.`);
            break;
        }
        apiCalls++;
    }

    console.log(`Finished fetching matches for user ${identifier}. Total matches found: ${allMatches.length}`);

    return allMatches;
};