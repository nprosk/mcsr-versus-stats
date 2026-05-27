import { mojangApiFetch } from "./apiFetch";

export const getProfileFromNickname = async (nickname: string) => {
    const endpoint = `/users/profiles/minecraft/${nickname}`;
    return (await mojangApiFetch<{ id: string, name: string }>(endpoint));
}