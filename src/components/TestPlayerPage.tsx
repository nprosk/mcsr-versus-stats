import { useProfileFromNickname } from "../hooks/useProfileFromNickname";
import { getTestGroupedMatches } from "../util/getTestGroupedMatches";
import { ManyOpponents } from "./ManyOpponents";
import { Container } from "@mantine/core";

export const TestPlayerPage = () => {
    const groupedMatches = getTestGroupedMatches();

    const nproskUuidQuery = useProfileFromNickname("nprosk");
    const nproskUuid = nproskUuidQuery.data?.id;

    return (
        <Container fluid p="md">
            {nproskUuid && <ManyOpponents player={nproskUuid} oppMatches={groupedMatches} />}
        </Container>
    )
}