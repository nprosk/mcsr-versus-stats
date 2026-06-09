import { Badge, Text } from "@mantine/core";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import { FlagBannerFoldIcon } from "@phosphor-icons/react";
import { prettyMatchTime } from "../util/generalUtil";

const badgeColor = (player: UserIdentifier, match: MatchInfo) => {
    if (match.result.uuid) {
        if (match.result.uuid === player) {
            return "green";
        } else {
            return "red";
        }
    }
    return "gray";
};

const matchResultIcon = (player: UserIdentifier, match: MatchInfo) => {
    if (match.result.uuid && match.forfeited) {
        if (match.result.uuid === player) {
            return <FlagBannerFoldIcon color="green" />;
        }
        return <FlagBannerFoldIcon color="red" />;
    }
};

export const MatchTime = ({ player, match }: { player: UserIdentifier; match: MatchInfo }) => {
    const icon = matchResultIcon(player, match);
    const color = badgeColor(player, match);

    return (
        <Badge color={color} variant="light" rightSection={icon} w={90}>
            <Text size="sm">
                {prettyMatchTime(match.result.time, 1)}
            </Text>
        </Badge >
    );
}