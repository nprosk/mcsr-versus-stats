import prettyMilliseconds from "pretty-ms";

export const prettyMatchTime = (matchTime: number, decimals: number): string => {
    return prettyMilliseconds(matchTime, {
        colonNotation: true,
        secondsDecimalDigits: decimals,
        keepDecimalsOnWholeSeconds: true
    });
}