import { useQuery } from "@tanstack/react-query"
import { getProfileFromUuid } from "../api/getProfileFromUuid";

export const useProfileFromUuid = (uuid: string) => {
    return useQuery({
        queryKey: ['profileFromUuid', uuid],
        queryFn: () => getProfileFromUuid(uuid),
        enabled: !!uuid
    });
}