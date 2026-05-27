import { Button } from "@mantine/core";
import type { MatchInfo, UserIdentifier } from "../types/mscrRankedObjects";
import prettyMilliseconds from "pretty-ms";
import { FlagBannerFoldIcon, FlagIcon, HandshakeIcon } from "@phosphor-icons/react";

const matchResultIcon = (player: UserIdentifier, match: MatchInfo) => {
    if (match.result.uuid) {
        if (match.forfeited) {
            if (match.result.uuid === player) {
                return <FlagBannerFoldIcon color="green" />;
            }
            return <FlagBannerFoldIcon color="red" />;
        } else {
            if (match.result.uuid === player) {
                return <FlagIcon color="green" />;
            }
            return <FlagIcon color="red" />;
        }
    }
    return <HandshakeIcon />;
};

export const MatchTime = ({ player, match }: { player: UserIdentifier; match: MatchInfo }) => {
    const icon = matchResultIcon(player, match);

    return (<Button variant="light" size="xs">
        {prettyMilliseconds(match.result.time, {
            colonNotation: true,
            secondsDecimalDigits: 1,
            keepDecimalsOnWholeSeconds: true
        })}
        {icon}
    </Button>);
}