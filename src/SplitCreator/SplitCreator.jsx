import { Button, Container, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import MesoLengthSelector from "./MesoLengthSelector"
import WorkoutSelectionTable from "./WorkoutSelectionTable/WorkoutSelectionTable"

export default function SplitCreator() {
    const [workoutDays, setWorkoutDays] = useState([
        { id: 'A', workouts: [{ id: Date.now(), muscle: { id: 1 }, excer: { id: 1 } }] },
        { id: 'B', workouts: [{ id: Date.now(), muscle: { id: 2 }, excer: { id: 3 } }] },
    ])
    const [workoutDayId, setWorkoutDayId] = useState(65)

    useEffect(() => { console.log(workoutDays) }, [workoutDays])

    const handleSelectionChange = (id, updatedWorkouts) => {
        setWorkoutDays(workoutDays =>
            workoutDays.map(workoutDay => (workoutDay.id === id ? { ...workoutDay, workouts: updatedWorkouts } : workoutDay))
        );
    }
    return (
        <Container sx={{ py: 5 }}>

            <Stack spacing={5}>

                <MesoLengthSelector></MesoLengthSelector>
                {workoutDays.map(day =>
                    <WorkoutSelectionTable defaultWorkouts={day.workouts} name={day.id} key={day.id} onSelectionChange={updatedWorkouts => handleSelectionChange(day.id, updatedWorkouts)} />
                )}



                <Button variant='contained' color="secondary" fullWidth onClick={() => {
                    setWorkoutDays(workoutDays => [...workoutDays, { id: String.fromCharCode(workoutDayId), workouts: [] }])
                    setWorkoutDayId(dayId => dayId + 1)
                }}>
                    Add day
                </Button>

                <Button variant='contained' fullWidth >Create Meso</Button>
            </Stack>

        </Container >

    )
}