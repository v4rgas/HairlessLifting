import { TableCell, TableRow, Typography } from "@mui/material"

import ExcerSelector from "./ExcerSelector"
import MuscleSelector from "./MuscleSelector"
import { useState } from "react"

export default function WorkoutSelectionTableRow({ onSelectionChange }) {
    const [currentSelectedMuscle, setCurrentSelectedMuscle] = useState({})

    return (
        <TableRow>
            <TableCell>
                <MuscleSelector handleChange={(e) => {
                    setCurrentSelectedMuscle(e.target.value)
                    onSelectionChange({ muscle: e.target.value, excer: null })
                }} />
            </TableCell>

            <TableCell>
                <ExcerSelector muscleId={currentSelectedMuscle.id} handleChange={(e) => {
                    onSelectionChange({ muscle: currentSelectedMuscle, excer: e.target.value })
                }} />
            </TableCell>

        </TableRow>
    )
}