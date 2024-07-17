import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";

import GoBackButton from "../GoBackButton";
import SplitSelectorDialog from "./SplitSelectorDialog";
import { useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";

export default function WorkoutSessionLogger() {
    const { sessionId } = useParams();
    const { getSession, saveSession } = useStorage();
    const [session, setSession] = useState({})
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSession(getSession(sessionId))
        console.log(sessionId)
    }, [sessionId, getSession])


    return (
        <Container>
            <SplitSelectorDialog open={open} onClose={() => setOpen(false)} />
            <Button onClick={() => {

                setOpen(true)

            }}>Add workout from split</Button>
            <Button onClick={() => {
                session.finishDate = Date.now()
                saveSession(session)
            }}>End session</Button>
            <GoBackButton />
        </Container>
    );
}