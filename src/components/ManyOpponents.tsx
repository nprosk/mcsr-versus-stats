import { Button, Divider, Stack } from "@mantine/core"
import type { UserIdentifier } from "../types/mscrRankedObjects"
import { OneOpponent } from "./OneOpponent";
import { Fragment } from "react/jsx-runtime";
import type { GroupedMatches } from "../util/groupMatchesByOpponent";
import { sortMatchesByTotalMatches } from "../util/sortUtil";
import { filterOutPrivateMatches } from "../util/filterUtil";
import { useState } from "react";


export const ManyOpponents = ({ player, oppMatches }: { player: UserIdentifier, oppMatches: GroupedMatches }) => {
    const [displayedMatches, setDisplayedMatches] = useState<GroupedMatches>(oppMatches);

    return (
        <>
            <Button my="md" variant="outline" onClick={() => setDisplayedMatches(sortMatchesByTotalMatches(displayedMatches))}>
                Sort by total matches
            </Button>
            <Button my="md" variant="outline" onClick={() => setDisplayedMatches(filterOutPrivateMatches(displayedMatches))}>
                Filter private matches
            </Button>
            <Button my="md" variant="outline" onClick={() => setDisplayedMatches(oppMatches)}>
                Reset sorting/filtering
            </Button>
            <Divider mb="md" />
            <Stack gap="md">
                {displayedMatches.map(({ opponent, matches }, i) => {
                    return (
                        <Fragment key={opponent}>
                            {matches.length > 0 && i > 0 && <Divider />}
                            {matches.length > 0 && <OneOpponent player={player} opponent={opponent} matches={matches} />}
                        </Fragment>
                    )
                })}
            </Stack>
        </>
    );
}