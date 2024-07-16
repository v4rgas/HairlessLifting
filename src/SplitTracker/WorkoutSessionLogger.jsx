import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";

import GoBackButton from "../GoBackButton";
import { useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";

export default function WorkoutSessionLogger() {
    const { sessionId } = useParams();
    const { getSession, saveSession } = useStorage();
    const [session, setSession] = useState({})

    useEffect(() => {
        setSession(getSession(sessionId))
        console.log(sessionId)
    }, [sessionId, getSession])


    return (
        <Container>
            <Button onClick={() => {
                
            }}>Add exercises from split</Button>
            <Button onClick={() => {
                session.finishDate = Date.now()
                saveSession(session)
            }}>End session</Button>
            <GoBackButton />
        </Container>
    );
}