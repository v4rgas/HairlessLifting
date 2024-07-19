import { Button, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"

import GoBackButton from "../GoBackButton"
import { useNavigate } from "react-router-dom"
import useStorage from "../utils/useStorage"

export default function SavedSplits() {
    const { getSplits } = useStorage()
    const splits = getSplits()

    const navigate = useNavigate()

    useEffect(() => console.log(splits), [])

    return (

        <Container>
            <Stack spacing={5}>
                <Typography variant="h3">
                    Saved splits
                </Typography>
                {Object.values(splits).map((split) =>
                    <Button key={split.id} onClick={() => navigate("/split/" + split.id)} variant="contained">
                        <Typography variant="h4">
                            {split.splitName}
                        </Typography>
                    </Button>)}
                <GoBackButton />
            </Stack>

        </Container>



    )
}
