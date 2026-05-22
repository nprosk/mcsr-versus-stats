import { useParams } from "react-router-dom";

export default function PlayerVersusPage() {
    const { identifier } = useParams<{ identifier: string }>();

    return <div>Player Versus Page for {identifier}</div>;
}