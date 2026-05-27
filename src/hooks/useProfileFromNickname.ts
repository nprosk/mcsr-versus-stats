import { useQuery } from "@tanstack/react-query"
import { getProfileFromNickname } from "../api/getProfileFromNickname";

export const useProfileFromNickname = (nickname: string) => {
    return useQuery({
        queryKey: ['profileFromNickname', nickname],
        queryFn: () => getProfileFromNickname(nickname),
        enabled: !!nickname
    });
}