import { useQuery } from "@tanstack/react-query"
import { getUuidFromNickname } from "../api/getUuidFromNickname";

export const useUserMatches = (identifier: string) => {
    return useQuery({
        queryKey: ['uuidFromNickname', identifier],
        queryFn: () => getUuidFromNickname(identifier),
        enabled: !!identifier
    });
}