import { Button, Container, Stack, Typography } from "@mui/material"
import useStorage from "../utils/useStorage"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import GoBackButton from "../GoBackButton"

export default function SavedSplits(){
    const { getSplits } = useStorage()
    const splits = getSplits()

    const navigate = useNavigate()

    useEffect(()=>console.log(splits), [])

    return (

        <Container>
            <Stack spacing={5}>
                <Typography variant="h3">
                    Saved splits
                </Typography>
                {Object.values(splits).map((split)=>
                <Button onClick={()=>navigate("/split/"+split.id)} variant="contained">
                <Typography variant="h4">
                    {split.splitName}
                </Typography>
                </Button>) }
                <GoBackButton />
            </Stack>
        </Container>
       
      
            
    )
}
