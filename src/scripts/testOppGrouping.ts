import { getAllUserMatches } from "../api/getAllUserMatches"
import { groupMatchesByOpponent } from "../util/groupMatchesByOpponent"
import * as fs from "fs";

const allMatches = await getAllUserMatches("nprosk");
const grouped = groupMatchesByOpponent("nprosk", allMatches);

fs.writeFileSync("groupedMatches.json", JSON.stringify(grouped, null, 2));
