import { useParams } from "react-router-dom";
import { useAllUserMatches } from "../hooks/useAllUserMatches";
import { useProfileFromNickname } from "../hooks/useProfileFromNickname";
import { ManyOpponents } from "./ManyOpponents";
import { groupMatchesByOpponent } from "../util/groupMatchesByOpponent";
import { Container } from "@mantine/core";

export default function PlayerVersusPage() {
    const { identifier } = useParams<{ identifier: string }>();

    const { data } = useAllUserMatches(identifier!);
    const nproskUuidQuery = useProfileFromNickname(identifier!);
    const nproskUuid = nproskUuidQuery.data?.id;


    return (
        <Container fluid p="md">
            <div>Player Versus Page for {identifier}</div>
            {(!data || !nproskUuid) && <div>Loading matches...</div>}
            {data && nproskUuid && (<ManyOpponents player={nproskUuid} oppMatches={groupMatchesByOpponent(nproskUuid, data)} />
            )}
        </Container>
    );
}