import { Button, Container } from "@mui/material";

import GoBackButton from "../GoBackButton";
import { useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";

export default function SplitTracker() {




    return (
        <Container>
            <Button variant="contained" onClick={() => console.log("hello")}>Start tracking</Button>
            <GoBackButton />
        </Container>
    );
}
