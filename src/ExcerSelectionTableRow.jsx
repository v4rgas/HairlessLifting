import { TableCell, TableRow, Typography } from "@mui/material"

import ExcerSelector from "./ExcerSelector"
import MuscleSelector from "./MuscleSelector"
import { useState } from "react"

export default function ExcerSelectionTableRow() {
    const [currentSelectedMuscle, setCurrentSelectedMuscle] = useState(null)
    return (
        <TableRow>
            <TableCell>
                <MuscleSelector handleChange={(e) => {
                    setCurrentSelectedMuscle(e.target.value)
                    console.log(currentSelectedMuscle, e.target.value)
                }} />
            </TableCell>
            {/* <TableCell>
                <TypeSelector handleChange={(e) => { console.log(e.target.value) }} />
                </TableCell> */}
            <TableCell>
                <ExcerSelector muscleId={currentSelectedMuscle} handleChange={(e) => { console.log(e.target.value) }} />
            </TableCell>
            {/* <TableCell>
                <Typography variant="body1">42</Typography>
            </TableCell> */}
        </TableRow>
    )
}