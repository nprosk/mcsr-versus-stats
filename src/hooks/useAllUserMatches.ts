import { useQuery } from "@tanstack/react-query"
import type { UserIdentifier } from "../types/mscrRankedObjects"
import { getAllUserMatches } from "../api/getAllUserMatches";

export const useAllUserMatches = (identifier: UserIdentifier) => {
    return useQuery({
        queryKey: ['userMatches', identifier],
        queryFn: () => getAllUserMatches(identifier),
        enabled: !!identifier
    });
}