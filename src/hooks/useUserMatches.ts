import { useQuery } from "@tanstack/react-query"
import type { UserIdentifier } from "../types/mscrRankedObjects"
import { getUserMatches, type GetUserMatchesParams } from "../api/getUserMatches"

export const useUserMatches = (identifier: UserIdentifier, params?: GetUserMatchesParams) => {
    return useQuery({
        queryKey: ['userMatches', identifier, params],
        queryFn: () => getUserMatches(identifier, params),
        enabled: !!identifier
    });
}