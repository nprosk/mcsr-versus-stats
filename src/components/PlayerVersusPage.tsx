import { useParams } from "react-router-dom";
import { useAllUserMatches } from "../hooks/useAllUserMatches";
import { useProfileFromNickname } from "../hooks/useProfileFromNickname";
import { ManyOpponents } from "./ManyOpponents";
import { groupMatchesByOpponent } from "../util/groupMatchesByOpponent";
import { Container, Text } from "@mantine/core";
import { prettyMatchTime } from "../util/generalUtil";
import { calculateStatsForPlayer } from "../util/statsUtil";

export default function PlayerVersusPage() {
    const { identifier } = useParams<{ identifier: string }>();

    const { data } = useAllUserMatches(identifier!);
    const nproskUuidQuery = useProfileFromNickname(identifier!);
    const nproskUuid = nproskUuidQuery.data?.id;

    const stats = nproskUuid && data && calculateStatsForPlayer(nproskUuid, data);
    const stringifiedStats = stats && `W: ${stats.wins}, D: ${stats.draws}, L: ${stats.losses}, Elo Change: ${stats.eloChange}, Avg Win Time: ${stats.avgWinCompletionTime ? prettyMatchTime(stats.avgWinCompletionTime, 0) : "N/A"}, Avg Loss Time: ${stats.avgLossCompletionTime ? prettyMatchTime(stats.avgLossCompletionTime, 0) : "N/A"}`;


    return (
        <Container fluid p="md">
            <div>Player Versus Page for {identifier}</div>
            <Text>{stringifiedStats}</Text>
            {(!data || !nproskUuid) && <div>Loading matches...</div>}
            {data && nproskUuid && (<ManyOpponents player={nproskUuid} oppMatches={groupMatchesByOpponent(nproskUuid, data)} />
            )}
        </Container>
    );
}