import { useQuery } from "@tanstack/react-query"
import { getProfileFromNickname } from "../api/getProfileFromNickname";

export const useProfileFromNickname = (identifier: string) => {
    return useQuery({
        queryKey: ['profileFromNickname', identifier],
        queryFn: () => getProfileFromNickname(identifier),
        enabled: !!identifier
    });
}