import { Button, Container, Stack } from "@mui/material"

import WorkoutSelectionTable from "./WorkoutSelectionTable"
import { useState } from "react"

export default function MesoCreator() {
    const [days, setDays] = useState([])
    const [dayId, setDayId] = useState(1)
    return (
        <Container sx={{ py: 5 }}>
            <Stack spacing={5}>
                {days.map(day => <WorkoutSelectionTable name={day.id} key={day.id} />)}
                <Button variant='contained' color="secondary" fullWidth onClick={() => { setDays([...days, { id: dayId }]); setDayId(dayId => dayId + 1) }}>Add day</Button>
                <Button variant='contained' fullWidth >Create Meso</Button>
            </Stack>

        </Container>

    )
}