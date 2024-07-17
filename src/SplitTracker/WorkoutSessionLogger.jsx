import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";

import GoBackButton from "../GoBackButton";
import SplitSelectorDialog from "./SplitSelectorDialog/SplitSelectorDialog";
import { useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";

export default function WorkoutSessionLogger() {
    const { sessionId } = useParams();
    const { getSession, saveSession } = useStorage();
    const [session, setSession] = useState({ exercises: [] })
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSession(getSession(sessionId))
    }, [sessionId, getSession])


    return (
        <Container>
            <SplitSelectorDialog open={open} onClose={() => setOpen(false)} onSelectWorkout={(workout) => {
                setOpen(false)
                session.exercises.push(...workout.exercises)
            }} />
            <Button onClick={() => {

                setOpen(true)

            }}>Add workout from split</Button>
            <Button onClick={() => {
                session.finishDate = Date.now()
                saveSession(session)
            }}>End session</Button>
            {session.exercises.map((exercise, index) => {
                return <div key={index}>{exercise.movement.name}</div>
            })}
            <GoBackButton />
        </Container>
    );
}