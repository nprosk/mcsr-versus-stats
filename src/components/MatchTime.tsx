import { Badge, Text } from "@mantine/core";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import prettyMilliseconds from "pretty-ms";
import { FlagBannerFoldIcon } from "@phosphor-icons/react";

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
        <Badge color={color} variant="light" rightSection={icon}>
            <Text size="sm">
                {prettyMilliseconds(match.result.time, {
                    colonNotation: true,
                    secondsDecimalDigits: 1,
                    keepDecimalsOnWholeSeconds: true
                })}
            </Text>
        </Badge >
    );
}