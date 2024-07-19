import { Button, Container, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import ExerciseSelectionTable from "./WorkoutSelectionTable/ExerciseSelectionTable"
import splitNames from "../assets/funnySplitNames.json"
import useStorage from "../utils/useStorage"
import { v4 as uuidv4 } from 'uuid';

export default function SplitCreator() {
    const location = useLocation()
    const initialSplit = location.state?.initialSplit || {}
    const [splitName, setSplitName] = useState(
        initialSplit.splitName || splitNames[Math.floor(Math.random() * splitNames.length)]
    )
    const [workouts, setWorkouts] = useState(initialSplit.workouts || [])
    const [workoutId, setWorkoutId] = useState(65 + workouts.length)

    const navigate = useNavigate()
    const { saveSplit } = useStorage()

    useEffect(() => { console.log(workouts) }, [workouts])

    const handleSelectionChange = (id, updatedExercises) => {
        console.log(updatedExercises, id, "updatedWorkouts")
        setWorkouts(workouts =>
            workouts.map(workout => (workout.id === id ? { ...workout, exercises: updatedExercises } : workout))
        );
    }
    return (
        <Container sx={{ py: 5 }}>
            <Stack spacing={5}>
                <TextField value={splitName} onChange={(e) => setSplitName(e.target.value)} fullWidth></TextField>

                {workouts.map(day =>
                    <ExerciseSelectionTable
                        defaultExercises={day.exercises}
                        name={day.id}
                        key={day.id}
                        onSelectionChange={updatedExercises => handleSelectionChange(day.id, updatedExercises)}
                        onDelete={() => setWorkouts(workout => workout.filter(workout => workout.id !== day.id))}
                    />
                )}

                <Button variant='contained' color="secondary" fullWidth onClick={() => {
                    setWorkouts(workouts => [...workouts, { id: String.fromCharCode(workoutId), workouts: [] }])
                    setWorkoutId(dayId => dayId + 1)
                }}>
                    Add day
                </Button>



                <Button variant='contained' fullWidth onClick={() => {
                    console.log("initial split", initialSplit.id, workouts)
                    saveSplit({ id: initialSplit.id || uuidv4(), splitName, workouts: workouts })
                    navigate("/saved")
                }}>
                    Save split
                </Button>
            </Stack>

        </Container >

    )
}