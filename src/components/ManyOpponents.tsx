import { Button, Divider, Stack, TextInput } from "@mantine/core"
import type { UserIdentifier } from "../types/mscrRankedObjects"
import { OneOpponent } from "./OneOpponent";
import { Fragment } from "react/jsx-runtime";
import type { GroupedMatches } from "../util/groupMatchesByOpponent";
import { sortMatchesByTotalMatches } from "../util/sortUtil";
import { applyFilter, decayedMatchFilterFn, privateMatchFilterFn, seasonFilterFn } from "../util/filterUtil";
import { useState } from "react";

export const ManyOpponents = ({ player, oppMatches }: { player: UserIdentifier, oppMatches: GroupedMatches }) => {
    const [displayedMatches, setDisplayedMatches] = useState<GroupedMatches>(applyFilter(oppMatches, decayedMatchFilterFn));
    const [seasonsValue, setSeasonsValue] = useState('');

    const applySeasonFilter = (seasons: string) => {
        const seasonNumbers = seasons.split(',').map(s => parseInt(s.trim())).filter(s => !isNaN(s));
        if (seasonNumbers.length > 0) {
            setDisplayedMatches(applyFilter(oppMatches, seasonFilterFn(seasonNumbers)));
        }
    }

    return (
        <>
            <Button my="md" variant="outline" onClick={() => setDisplayedMatches(sortMatchesByTotalMatches(displayedMatches))}>
                Sort by total matches
            </Button>
            <Button my="md" variant="outline" onClick={() => setDisplayedMatches(applyFilter(displayedMatches, privateMatchFilterFn))}>
                Filter private matches
            </Button>
            <Button my="md" variant="outline" onClick={() => setDisplayedMatches(oppMatches)}>
                Reset sorting/filtering
            </Button>
            <TextInput
                label="Seasons"
                description="comma separated list"
                placeholder="i.e. 11,10,9"
                value={seasonsValue}
                onChange={(event) => setSeasonsValue(event.currentTarget.value)}
            />
            <Button my="md" variant="outline" onClick={() => applySeasonFilter(seasonsValue)}>
                Apply season filter
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