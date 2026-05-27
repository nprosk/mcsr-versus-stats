import { Center, Grid, Text } from "@mantine/core";
import { PlayerHead } from "./PlayerHead";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import { MatchTimes } from "./MatchTimes";

export const OneOpponent = ({ player, opponent, matches }: { player: UserIdentifier; opponent: UserIdentifier; matches: MatchInfo[] }) => {
    console.log("Rendering OneOpponent", player, opponent, matches);
    const opponentNickname = matches[0].players.find(p => p.uuid === opponent)?.nickname || opponent;
    return (
        <Grid columns={12}>
            <Grid.Col span={2}><Center><PlayerHead identifier={opponent} /></Center></Grid.Col>
            <Grid.Col span={2}><Text>{opponentNickname}</Text></Grid.Col>
            <Grid.Col span={8}><MatchTimes player={player} matches={matches} /></Grid.Col>
        </Grid>
    );
}