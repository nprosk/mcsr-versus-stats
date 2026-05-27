import { mojangApiFetch } from "./apiFetch";

export const getUuidFromNickname = async (nickname: string): Promise<string | null> => {
    const endpoint = `/users/profiles/minecraft/${nickname}`;
    return await mojangApiFetch<string>(endpoint);
}