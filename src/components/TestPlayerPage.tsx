import { getTestGroupedMatches } from "../util/getTestGroupedMatches";
import PlayerVersusPage from "./PlayerVersusPage";

export const TestPlayerPage = () => {
    const groupedMatches = getTestGroupedMatches();

    return (
        <PlayerVersusPage identifierNickname={"nprosk"} groupedMatchesTest={groupedMatches} />
    )
}