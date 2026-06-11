import { playerdbApiFetch } from "./apiFetch";

export const getProfileFromNicknameOrUuid = async (identifier: string) => {
    const endpoint = `/player/minecraft/${identifier}`;
    const val = await playerdbApiFetch<{ player: { raw_id: string, username: string } }>(endpoint);
    return { id: val.player.raw_id, username: val.player.username };
}