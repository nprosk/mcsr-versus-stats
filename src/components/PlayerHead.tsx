import { Image } from "@mantine/core"
import { useUuidFromNickname } from "../hooks/useUuidFromNickname";

export const PlayerHead = ({ identifier }: { identifier: string }) => {
    const { data, isLoading, error } = useUuidFromNickname(identifier!);
    console.log(data, isLoading, error);

    return !isLoading ? <Image src={`https://api.mineatar.io/face/${data}`} fallbackSrc="https://api.mineatar.io/face/unknown"></Image> : null;
}