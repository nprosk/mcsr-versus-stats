import { Center, Grid, Text } from "@mantine/core";
import { PlayerHead } from "./PlayerHead";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import { MatchTimes } from "./MatchTimes";
import { calculateStats } from "../util/statsUtil";
import { prettyMatchTime } from "../util/generalUtil";

export const OneOpponent = ({ player, opponent, matches }: { player: UserIdentifier; opponent: UserIdentifier; matches: MatchInfo[] }) => {
    const opponentNickname = matches[0]?.players.find(p => p.uuid === opponent)?.nickname || opponent;
    const playerNickname = matches[0]?.players.find(p => p.uuid === player)?.nickname || player;

    const stats = calculateStats(player, opponent, matches);
    const stringifiedStats = `W: ${stats.wins}, D: ${stats.draws}, L: ${stats.losses}, Elo Change: ${stats.eloChange}, Avg Win Time: ${stats.avgWinCompletionTime ? prettyMatchTime(stats.avgWinCompletionTime, 0) : "N/A"}, Avg Loss Time: ${stats.avgLossCompletionTime ? prettyMatchTime(stats.avgLossCompletionTime, 0) : "N/A"}`;
    return (
        <Grid columns={12}>
            <Grid.Col span={1}><Center><PlayerHead identifier={opponent === "NO_OPPONENT" ? player : opponent} /></Center></Grid.Col>
            <Grid.Col span={1}><Center><Text>{opponent === "NO_OPPONENT" ? playerNickname : opponentNickname}</Text></Center></Grid.Col>
            <Grid.Col span={2}><Center><Text style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>Stats: {stringifiedStats}</Text></Center></Grid.Col>
            <Grid.Col span={8}><MatchTimes player={player} matches={matches} /></Grid.Col>
        </Grid>
    );
}