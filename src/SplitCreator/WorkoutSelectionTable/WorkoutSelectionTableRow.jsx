import { TableCell, TableRow, Typography } from "@mui/material"

import ExcerSelector from "./ExcerSelector"
import MuscleSelector from "./MuscleSelector"
import { useState } from "react"
import DeleteButton from "../../DeleteButton"

export default function WorkoutSelectionTableRow({ onSelectionChange, onDelete, defaultMuscle = {}, defaultExcer = {} }) {
    const [currentSelectedMuscle, setCurrentSelectedMuscle] = useState(defaultMuscle)

    return (
        <TableRow>
            <TableCell>
                <MuscleSelector defaultMuscle={defaultMuscle} handleChange={(e) => {
                    setCurrentSelectedMuscle(e.target.value)
                    onSelectionChange({ muscle: e.target.value, excer: null })
                }} />
            </TableCell>

            <TableCell>
                <ExcerSelector defaultExcer={defaultExcer} muscleId={currentSelectedMuscle.id} handleChange={(e) => {
                    onSelectionChange({ muscle: currentSelectedMuscle, excer: e.target.value})
                }} />
            </TableCell>

            <TableCell>
                <DeleteButton onClick={onDelete} />
            </TableCell>
        </TableRow>
    )
}