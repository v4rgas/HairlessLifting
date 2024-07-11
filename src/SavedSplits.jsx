import { Button, Container, Stack, Typography } from "@mui/material"
import useStorage from "./useStorage"
import { useEffect, useState } from "react"
import { useAtomValue } from "jotai"
import { splitsAtom } from "./atoms"

export default function SavedSplits(){
    const splits = useAtomValue(splitsAtom)

    useEffect(()=>console.log(splits), [])

    return (

        <Container>
            <Stack spacing={6}>
                <Typography variant="h3">
                    Saved splits
                </Typography>
                {splits.map((split)=><Button variant="contained">{split.name}</Button>) }
            </Stack>
        </Container>
       
      
            
    )
}
