import { Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import ExerciseStatsTable from "./ExerciseStatsTable";
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
        if (sessionId)
            setSession(getSession(sessionId))
    }, [sessionId, getSession])


    return (
        <Container>

            <SplitSelectorDialog open={open} onClose={() => setOpen(false)} onSelectWorkout={(workout) => {
                setOpen(false)
                session.exercises.push(...workout.exercises)
            }} />
            <Grid spacing={5} container>



                {session.exercises.map((exercise, index) => {
                    return (
                        <Grid item xs={12} md={6} key={index}>
                            <ExerciseStatsTable key={index} exercise={exercise} />
                        </Grid>
                    )
                })}

                <Grid item xs={3} >
                    <Button onClick={() => {
                        setOpen(true)
                    }}>Add workout from split</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button onClick={() => {
                        session.finishDate = Date.now()
                        saveSession(session)
                    }}>End session</Button>
                </Grid>

                <Grid item xs={12}>
                    <GoBackButton />
                </Grid>

            </Grid>


        </Container>
    );
}