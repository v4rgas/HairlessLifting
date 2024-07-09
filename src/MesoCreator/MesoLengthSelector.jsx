import { Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"

import { useState } from "react"

export default function MesoLengthSelector() {
    const mesoLengthOptions = [4, 5, 6]
    const [mesoLength, setMesoLength] = useState(4)
    return (
        <Stack>
            <Typography variant='h6'>Training weeks (includes deload)</Typography>
            <ToggleButtonGroup value={mesoLength} exclusive color="primary" fullWidth>
                {mesoLengthOptions.map(option =>
                    <ToggleButton key={option} value={option} selected={mesoLength === option} onClick={() => setMesoLength(option)}>
                        {option}
                    </ToggleButton>)
                }
            </ToggleButtonGroup>
        </Stack>

    )
}