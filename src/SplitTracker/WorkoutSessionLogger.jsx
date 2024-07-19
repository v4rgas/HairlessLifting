import { Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ExerciseSelectorDialog from "./ExerciseSelectorDialog/ExerciseSelectorDialog";
import ExerciseStatsTable from "./ExerciseStatsTable";
import GoBackButton from "../GoBackButton";
import SplitSelectorDialog from "./SplitSelectorDialog/SplitSelectorDialog";
import useStorage from "../utils/useStorage";

export default function WorkoutSessionLogger() {
    const { sessionId } = useParams();
    const { getSession, saveSession } = useStorage();
    const [session, setSession] = useState({ exercises: [] })
    const [open, setOpen] = useState(false);
    const [openExerciseSelector, setOpenExerciseSelector] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionId)
            setSession(getSession(sessionId))
    }, [sessionId, getSession])

    const setSessionAndSave = (session) => {
        setSession(session)
        saveSession(session)
    }

    return (
        <Container>

            <SplitSelectorDialog open={open} onClose={() => setOpen(false)} onSelectWorkout={(workout) => {
                setOpen(false)
                session.exercises.push(...workout.exercises)
                setSessionAndSave({ ...session })
            }} />

            <ExerciseSelectorDialog open={openExerciseSelector} onClose={() => setOpenExerciseSelector(false)} onSelectExercise={(exercise) => {
                setOpenExerciseSelector(false)
                session.exercises.push(exercise)
                setSessionAndSave({ ...session })
            }
            } />

            <Grid spacing={5} container>



                {session?.exercises.map((exercise, index) => {
                    return (
                        <Grid item xs={12} key={index}>
                            <ExerciseStatsTable key={index} exercise={exercise}
                                sets={exercise.sets || []}
                                onSetsUpdate={(sets) => {
                                    console.log('setting sets')
                                    session.exercises[index].sets = sets
                                    setSessionAndSave({ ...session })
                                }}
                                onLastSetRemove={() => {
                                    console.log('removing exercise')
                                    session.exercises = session.exercises.filter((_, i) => i !== index)
                                    setSessionAndSave({ ...session })
                                }} />
                        </Grid>
                    )
                })}

                <Grid item xs={3} >
                    <Button fullWidth onClick={() => {
                        setOpen(true)
                    }}>Add workout from split</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button fullWidth onClick={() => {
                        setOpenExerciseSelector(true)
                    }}>Add Exercise</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button fullWidth onClick={() => {
                        session.finishDate = Date.now()
                        saveSession(session)
                        navigate('/tracker')
                    }}>End session</Button>
                </Grid>



                <Grid item xs={12}>
                    <GoBackButton />
                </Grid>

            </Grid>


        </Container>
    );
}