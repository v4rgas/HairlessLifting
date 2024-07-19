import { Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DeleteButton from "../DeleteButton";
import DeletionDialog from "../DeletionDialog";
import ExerciseSelectorDialog from "./ExerciseSelectorDialog/ExerciseSelectorDialog";
import ExerciseStatsTable from "./ExerciseStatsTable";
import GoBackButton from "../GoBackButton";
import SplitSelectorDialog from "./SplitSelectorDialog/SplitSelectorDialog";
import dayjs from "dayjs";
import useStorage from "../utils/useStorage";

export default function WorkoutSessionLogger() {
    const { sessionId } = useParams();
    const { getSession, saveSession, deleteSession } = useStorage();
    const [session, setSession] = useState({ exercises: [] })
    const [open, setOpen] = useState(false);
    const [openExerciseSelector, setOpenExerciseSelector] = useState(false);
    const [openDeletionDialog, setOpenDeletionDialog] = useState(false);
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

            <DeletionDialog open={openDeletionDialog} onConfirm={() => {
                deleteSession(sessionId)
                navigate('/tracker')
            }} onCancel={() => {
                setOpenDeletionDialog(false)
            }}
                content={"Are you sure you want to delete this session?"}
            />

            <SplitSelectorDialog open={open} onClose={() => setOpen(false)} onSelectWorkout={(workout) => {
                setOpen(false)
                const excercisesToAdd = workout.exercises.filter(exercise => !session.exercises.find(e => e.id === exercise.id))
                session.exercises.push(...excercisesToAdd)
                setSessionAndSave({ ...session })
            }} />

            <ExerciseSelectorDialog open={openExerciseSelector} onClose={() => setOpenExerciseSelector(false)} onSelectExercise={(exercise) => {
                setOpenExerciseSelector(false)
                if (!session.exercises.find(e => e.id === exercise.id)) {
                    session.exercises.push(exercise)
                    setSessionAndSave({ ...session })
                }

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
                                    console.log(session)
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
                        session.finishDate = dayjs().format()
                        saveSession(session)
                        navigate('/tracker')
                    }}>End session</Button>
                </Grid>

                <Grid item xs={3}>
                    <Button
                        color="error"
                        fullWidth onClick={() => {
                            setOpenDeletionDialog(true)
                        }}>Delete session</Button>
                </Grid>



                <Grid item xs={12}>
                    <GoBackButton />
                </Grid>

            </Grid>


        </Container>
    );
}