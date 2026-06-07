import { Button, Divider, Stack } from "@mantine/core"
import type { UserIdentifier } from "../types/mscrRankedObjects"
import { OneOpponent } from "./OneOpponent";
import { Fragment } from "react/jsx-runtime";
import type { GroupedMatches } from "../util/groupMatchesByOpponent";
import { sortMatchesByTotalMatches } from "../util/sortUtil";
import { useState } from "react";


export const ManyOpponents = ({ player, oppMatches }: { player: UserIdentifier, oppMatches: GroupedMatches }) => {
    const [displayedMatches, setDisplayedMatches] = useState<GroupedMatches>(oppMatches);

    return (
        <>
            <Button variant="outline" onClick={() => setDisplayedMatches(sortMatchesByTotalMatches(displayedMatches))}>
                Sort by total matches
            </Button>
            <Stack gap="md">
                {displayedMatches.map(({ opponent, matches }, i) => {
                    return (
                        <Fragment key={opponent}>
                            {i > 0 && <Divider />}
                            <OneOpponent player={player} opponent={opponent} matches={matches} />
                        </Fragment>
                    )
                })}
            </Stack>
        </>
    );
}