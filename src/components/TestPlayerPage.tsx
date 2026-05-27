import { useProfileFromNickname } from "../hooks/useProfileFromNickname";
import { getTestGroupedMatches } from "../util/getTestGroupedMatches";
import { OneOpponent } from "./OneOpponent";

export const TestPlayerPage = () => {
    const groupedMatches = getTestGroupedMatches();

    const slickUuidQuery = useProfileFromNickname("Slickburrito735");
    const slickUuid = slickUuidQuery.data?.id;
    const nproskUuidQuery = useProfileFromNickname("Nprosk");
    const nproskUuid = nproskUuidQuery.data?.id;
    const twoOpps = { [slickUuid]: groupedMatches[slickUuid], "Qwertycube10": groupedMatches["Qwertycube10"] };
    console.log("twoOpps", twoOpps);

    return (
        !slickUuidQuery.isLoading && !nproskUuidQuery.isLoading && <OneOpponent player={nproskUuid} opponent={slickUuid} matches={twoOpps[slickUuid]}></OneOpponent>
    )
}