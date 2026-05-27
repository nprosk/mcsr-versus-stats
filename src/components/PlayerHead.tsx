import { Image } from "@mantine/core"

export const PlayerHead = ({ identifier }: { identifier: string }) => {
    return <Image src={`https://api.mineatar.io/face/${identifier}?scale=24`} fallbackSrc="https://api.mineatar.io/face/unknown?scale=24" w={48}></Image>;
}