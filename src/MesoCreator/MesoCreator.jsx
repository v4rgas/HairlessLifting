import { Button, Container, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import MesoLengthSelector from "./MesoLengthSelector"
import WorkoutSelectionTable from "./WorkoutSelectionTable/WorkoutSelectionTable"

export default function MesoCreator() {
    const [workoutDays, setWorkoutDays] = useState([])
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
                    <WorkoutSelectionTable name={day.id} key={day.id} onSelectionChange={updatedWorkouts => handleSelectionChange(day.id, updatedWorkouts)} />
                )}



                <Button variant='contained' color="secondary" fullWidth onClick={() => {
                    setWorkoutDays(workoutDays => [...workoutDays, { id: String.fromCharCode(workoutDayId), workouts: [] }])
                    setWorkoutDayId(dayId => dayId + 1)
                }}>Add day</Button>

                <Button variant='contained' fullWidth >Create Meso</Button>
            </Stack>

        </Container >

    )
}