import { getTestGroupedMatches } from "../util/getTestGroupedMatches";
import { OneOpponent } from "./OneOpponent";

export const TestPlayerPage = () => {
    console.log("Rendering TestPlayerPage");
    const groupedMatches = getTestGroupedMatches();
    const twoOpps = { "Slickburrito735": groupedMatches["Slickburrito735"], "Qwertycube10": groupedMatches["Qwertycube10"] };

    return (
        <OneOpponent></OneOpponent>
    )
}