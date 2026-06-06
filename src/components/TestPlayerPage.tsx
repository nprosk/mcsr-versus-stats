import { useProfileFromNickname } from "../hooks/useProfileFromNickname";
import { getTestGroupedMatches } from "../util/getTestGroupedMatches";
import { ManyOpponents } from "./ManyOpponents";
import { Container } from "@mantine/core";

export const TestPlayerPage = () => {
    const groupedMatches = getTestGroupedMatches();

    const slickUuidQuery = useProfileFromNickname("Slickburrito735");
    const slickUuid = slickUuidQuery.data?.id;
    const nproskUuidQuery = useProfileFromNickname("Nprosk");
    const nproskUuid = nproskUuidQuery.data?.id;
    const qwertyUuidQuery = useProfileFromNickname("Qwertycube10");
    const qwertyUuid = qwertyUuidQuery.data?.id;
    const twoOpps = { [slickUuid]: groupedMatches[slickUuid], [qwertyUuid]: groupedMatches[qwertyUuid] };
    console.log("twoOpps", twoOpps);

    return (
        <Container fluid p="md">
            <ManyOpponents player={nproskUuid} oppMatches={groupedMatches} />
        </Container>
    )
}