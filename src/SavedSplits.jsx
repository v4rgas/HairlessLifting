import { Typography } from "@mui/material"
import useStorage from "./useStorage"
import { useEffect, useState } from "react"
import { useAtomValue } from "jotai"
import { splitsAtom } from "./atoms"

export default function SavedSplits(){
    const splits = useAtomValue(splitsAtom)

    useEffect(()=>console.log(splits), [])

    return (
        <Typography>

            {splits.forEach(()=><Typography>Split</Typography>) }
        
        </Typography>
    )
}