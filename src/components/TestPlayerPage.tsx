import { useUuidFromNickname } from "../hooks/useUuidFromNickname";
import { getTestGroupedMatches } from "../util/getTestGroupedMatches";
import { OneOpponent } from "./OneOpponent";

export const TestPlayerPage = () => {
    const groupedMatches = getTestGroupedMatches();

    const slickUuidQuery = useUuidFromNickname("Slickburrito735");
    const slickUuid = slickUuidQuery.data;
    const twoOpps = { [slickUuid]: groupedMatches[slickUuid], "Qwertycube10": groupedMatches["Qwertycube10"] };
    console.log("twoOpps", twoOpps);

    return (
        !slickUuidQuery.isLoading && <OneOpponent identifier={slickUuid} matches={twoOpps[slickUuid]}></OneOpponent>
    )
}