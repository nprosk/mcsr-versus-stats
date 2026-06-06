import { Stack } from "@mantine/core"
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects"
import { OneOpponent } from "./OneOpponent";


export const ManyOpponents = ({ player, oppMatches }: { player: UserIdentifier, oppMatches: Record<string, MatchInfo[]> }) => {
    return (
        <Stack>
            {Object.entries(oppMatches).map(([opp, matches]) => <OneOpponent key={opp} player={player} opponent={opp} matches={matches} />)}
        </Stack>
    );
}