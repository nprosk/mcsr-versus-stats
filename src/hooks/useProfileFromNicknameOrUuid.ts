import { useQuery } from "@tanstack/react-query"
import { getProfileFromNicknameOrUuid } from "../api/getProfileFromNicknameOrUuid";

export const useProfileFromNicknameOrUuid = (identifier: string) => {
    return useQuery({
        queryKey: ['profileFromNicknameOrUuid', identifier],
        queryFn: () => getProfileFromNicknameOrUuid(identifier),
        enabled: !!identifier
    });
}