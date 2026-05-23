import { getAllUserMatches } from "../api/getAllUserMatches"
import { groupMatchesByOpponent } from "../util/groupMatchesByOpponent"

const allMatches = await getAllUserMatches("nprosk");
const grouped = groupMatchesByOpponent("nprosk", allMatches);

console.log(grouped);
