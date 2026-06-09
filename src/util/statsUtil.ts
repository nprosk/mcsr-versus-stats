import type { UserIdentifier, MatchInfo } from "../types/mscrRankedObjects";

export type MatchupStats = {
    totalMatches: number;
    wins: number;
    draws: number;
    losses: number;
    eloChange: number;
    avgWinCompletionTime: number | null;
    avgLossCompletionTime: number | null;
};

export const calculateStats = (player: UserIdentifier, opponent: UserIdentifier, matches: MatchInfo[]) => {
    let wins = 0;
    let draws = 0;
    let losses = 0;
    let totalEloChange = 0;
    let totalWinCompletionTime = 0;
    let totalLossCompletionTime = 0;
    let winCompletionsForAvg = 0;
    let lossCompletionsForAvg = 0;

    matches.forEach(match => {
        const playerInfo = match.players.find(p => p.uuid === player);
        const opponentInfo = match.players.find(p => p.uuid === opponent);

        if (!playerInfo || !opponentInfo) {
            console.warn(`Player or opponent not found in match ${match.id}`);
            return;
        }

        totalEloChange += match.changes.find(c => c.uuid === player)?.change || 0;

        if (!match.result.uuid) {
            draws++;
        } else if (match.result.uuid === player) {
            wins++;
            if (!match.forfeited) {
                totalWinCompletionTime += match.result.time;
                winCompletionsForAvg++;
            }
        } else {
            losses++;
            if (!match.forfeited) {
                totalLossCompletionTime += match.result.time;
                lossCompletionsForAvg++;
            }
        }
    });

    return {
        totalMatches: wins + draws + losses,
        wins,
        draws,
        losses,
        eloChange: totalEloChange,
        avgWinCompletionTime: winCompletionsForAvg > 0 ? totalWinCompletionTime / winCompletionsForAvg : null,
        avgLossCompletionTime: lossCompletionsForAvg > 0 ? totalLossCompletionTime / lossCompletionsForAvg : null
    };
};