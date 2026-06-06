import { Divider, Stack } from "@mantine/core"
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects"
import { OneOpponent } from "./OneOpponent";
import { Fragment } from "react/jsx-runtime";


export const ManyOpponents = ({ player, oppMatches }: { player: UserIdentifier, oppMatches: Record<string, MatchInfo[]> }) => {
    return (
        <Stack gap="md">
            {Object.entries(oppMatches).map(([opp, matches], i) => {
                return (
                    <Fragment key={opp}>
                        {i > 0 && <Divider />}
                        <OneOpponent player={player} opponent={opp} matches={matches} />
                    </Fragment>
                )
            })}
        </Stack>
    );
}