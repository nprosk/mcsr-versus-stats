import { Grid, Text } from "@mantine/core";
import { PlayerHead } from "./PlayerHead";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";

export const OneOpponent = ({ identifier, matches }: { identifier: UserIdentifier; matches: MatchInfo[] }) => {
    console.log("Rendering OneOpponent", identifier, matches);
    return (
        <Grid columns={12}>
            <Grid.Col span={2}><PlayerHead identifier={identifier} /></Grid.Col>
            <Grid.Col span={2}><Text>{identifier}</Text></Grid.Col>
            <Grid.Col span={8}><Text>{JSON.stringify(matches)}</Text></Grid.Col>
        </Grid>
    );
}