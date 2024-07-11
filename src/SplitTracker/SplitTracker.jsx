import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";
import GoBackButton from "../GoBackButton";

export default function SplitTracker() {
    const { splitId } = useParams();

    const { getSplits } = useStorage();
    const split = getSplits().find(s => s.id == splitId);

    return (
        <Container>
            <pre>{JSON.stringify(split, null, 2)}</pre>
            <GoBackButton/>
        </Container>
    );
}
