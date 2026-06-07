import { Center, Grid, Text } from "@mantine/core";
import { PlayerHead } from "./PlayerHead";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import { MatchTimes } from "./MatchTimes";

export const OneOpponent = ({ player, opponent, matches }: { player: UserIdentifier; opponent: UserIdentifier; matches: MatchInfo[] }) => {
    console.log("Rendering OneOpponent", player, opponent, matches);
    const opponentNickname = matches[0]?.players.find(p => p.uuid === opponent)?.nickname || opponent;
    const playerNickname = matches[0]?.players.find(p => p.uuid === player)?.nickname || player;
    return (
        <Grid columns={12}>
            <Grid.Col span={2}><Center><PlayerHead identifier={opponent === "NO_OPPONENT" ? player : opponent} /></Center></Grid.Col>
            <Grid.Col span={2}><Center><Text>{opponent === "NO_OPPONENT" ? playerNickname : opponentNickname}</Text></Center></Grid.Col>
            <Grid.Col span={8}><MatchTimes player={player} matches={matches} /></Grid.Col>
        </Grid>
    );
}