import { Divider, Stack } from "@mantine/core"
import type { UserIdentifier } from "../types/mscrRankedObjects"
import { OneOpponent } from "./OneOpponent";
import { Fragment } from "react/jsx-runtime";
import type { GroupedMatches } from "../util/groupMatchesByOpponent";


export const ManyOpponents = ({ player, oppMatches }: { player: UserIdentifier, oppMatches: GroupedMatches }) => {
    return (
        <Stack gap="md">
            {oppMatches.map(({ opponent, matches }, i) => {
                return (
                    <Fragment key={opponent}>
                        {i > 0 && <Divider />}
                        <OneOpponent player={player} opponent={opponent} matches={matches} />
                    </Fragment>
                )
            })}
        </Stack>
    );
}