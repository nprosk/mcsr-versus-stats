import { useParams } from "react-router-dom";
import { useAllUserMatches } from "../hooks/useAllUserMatches";
import { useProfileFromNicknameOrUuid } from "../hooks/useProfileFromNicknameOrUuid";
import { ManyOpponents } from "./ManyOpponents";
import { groupMatchesByOpponent, type GroupedMatches } from "../util/groupMatchesByOpponent";
import { Container, Text } from "@mantine/core";
import { prettyMatchTime } from "../util/generalUtil";
import { calculateStatsForPlayer } from "../util/statsUtil";

export default function PlayerVersusPage({ identifierNickname, groupedMatchesTest }: { identifierNickname?: string, groupedMatchesTest?: GroupedMatches }) {
    const identifier = identifierNickname || useParams<{ identifier: string }>().identifier;
    const playerUuidQuery = identifier ? useProfileFromNicknameOrUuid(identifier!) : undefined;
    console.log("Player UUID Query:", playerUuidQuery);
    const playerUuid = playerUuidQuery?.data?.id;

    let groupedMatches = groupedMatchesTest;
    if (!groupedMatches && identifier) {
        const userMatches = useAllUserMatches(identifier!).data;
        groupedMatches = userMatches && groupMatchesByOpponent(identifier!, userMatches);
    }

    const stats = playerUuid && groupedMatches && calculateStatsForPlayer(playerUuid, groupedMatches.flatMap(group => group.matches));
    const stringifiedStats = stats && `W: ${stats.wins}, D: ${stats.draws}, L: ${stats.losses}, Elo Change: ${stats.eloChange}, Avg Win Time: ${stats.avgWinCompletionTime ? prettyMatchTime(stats.avgWinCompletionTime, 0) : "N/A"}, Avg Loss Time: ${stats.avgLossCompletionTime ? prettyMatchTime(stats.avgLossCompletionTime, 0) : "N/A"}`;

    console.log("Grouped Matches:", groupedMatches);
    console.log("playerUuid:", playerUuid);

    return (
        <Container fluid p="md">
            <div>Player Versus Page for {identifier}</div>
            <Text>{stringifiedStats}</Text>
            {(!groupedMatches || !playerUuid) && <div>Loading matches...</div>}
            {groupedMatches && playerUuid && (<ManyOpponents player={playerUuid} oppMatches={groupedMatches} />
            )}
        </Container>
    );
}