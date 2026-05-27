import { join, dirname } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { getAllUserMatches } from "../api/getAllUserMatches";
import { groupMatchesByOpponent } from "../util/groupMatchesByOpponent";
import { fileURLToPath } from "url";

(async () => {
    const allMatches = await getAllUserMatches("nprosk");
    const grouped = groupMatchesByOpponent("nprosk", allMatches);


    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, "testData/nproskGroupedMatches.json");
    if (!existsSync(dirname(filePath))) {
        mkdirSync(dirname(filePath), { recursive: true });
    }

    writeFileSync(filePath, JSON.stringify(grouped, null, 2));
})();