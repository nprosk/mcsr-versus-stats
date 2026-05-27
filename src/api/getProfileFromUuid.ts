import { mojangApiFetch } from "./apiFetch";

export const getProfileFromUuid = async (uuid: string) => {
    const endpoint = `/minecraft/profile/lookup/${uuid}`;
    return (await mojangApiFetch<{ id: string, name: string }>(endpoint));
}