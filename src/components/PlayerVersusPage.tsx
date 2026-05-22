import { useParams } from "react-router-dom";
import { useAllUserMatches } from "../hooks/useAllUserMatches";

export default function PlayerVersusPage() {
    const { identifier } = useParams<{ identifier: string }>();

    const { data, isLoading, error } = useAllUserMatches(identifier!);

    console.log("total matches for user:", data?.length);
    console.log("User matches data:", data);
    console.log("Loading state:", isLoading);
    console.log("Error state:", error);

    return (
        <div>
            <div>Player Versus Page for {identifier}</div>
            {isLoading && <div>Loading matches...</div>}
            {error && <div>Error loading matches: {error.message}</div>}
            {data && (
                <div>
                    <h2>Total Matches: {data.length}</h2>
                    <div>{JSON.stringify(data)}</div>
                </div>
            )}
        </div>
    );
}