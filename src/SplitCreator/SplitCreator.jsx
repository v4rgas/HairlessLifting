import { Button, Container, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import MesoLengthSelector from "./MesoLengthSelector"
import WorkoutSelectionTable from "./WorkoutSelectionTable/WorkoutSelectionTable"
import useStorage from "../utils/useStorage"
import { useAtom } from "jotai"
import { splitsAtom } from "../utils/atoms"
import { useNavigate } from "react-router-dom"

export default function SplitCreator() {
    const [splitName, setSplitName] = useState(Date.now().toString())
    const [workoutDays, setWorkoutDays] = useState([])
    const [workoutDayId, setWorkoutDayId] = useState(65 + workoutDays.length)

    const navigate = useNavigate()
    const { saveSplit } = useStorage()

    useEffect(() => { console.log(workoutDays) }, [workoutDays])

    const handleSelectionChange = (id, updatedWorkouts) => {
        setWorkoutDays(workoutDays =>
            workoutDays.map(workoutDay => (workoutDay.id === id ? { ...workoutDay, workouts: updatedWorkouts } : workoutDay))
        );
    }
    return (
        <Container sx={{ py: 5 }}>
            
            <TextField value={splitName} onChange={(e)=>setSplitName(e.target.value)} fullWidth></TextField>

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



                <Button variant='contained' fullWidth onClick={()=> {
                    saveSplit({id: Date.now(),splitName, workoutDays})
                    navigate("/saved")
                    }}>
                        Create Meso
                </Button>
            </Stack>

        </Container >

    )
}