import { Group } from "@mantine/core";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import { MatchTime } from "./MatchTime";

export const MatchTimes = ({ player, matches }: { player: UserIdentifier; matches: MatchInfo[] }) => {
    return (
        <Group>
            {matches.map(match => <MatchTime player={player} match={match} />)}
        </Group>
    )
}