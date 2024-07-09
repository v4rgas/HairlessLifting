import { Button, Container, Stack } from "@mui/material"

import ExcerSelectionTable from "./ExcerSelectionTable"
import { useState } from "react"

export default function MesoCreator() {
    const [days, setDays] = useState([])
    const [dayId, setDayId] = useState(1)
    return (
        <Container sx={{ py: 5 }}>
            <Stack spacing={5}>
                {days.map(day => <ExcerSelectionTable name={day.id} key={day.id} />)}
                <Button variant='contained' fullWidth onClick={() => { setDays([...days, { id: dayId }]); setDayId(dayId => dayId + 1) }}>Add day</Button>
            </Stack>

        </Container>

    )
}