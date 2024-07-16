import { TableCell, TableRow, Typography } from "@mui/material"

import DeleteButton from "../../DeleteButton"
import ExcerSelector from "./ExcerSelector"
import MuscleSelector from "./MuscleSelector"
import PlayVideoButton from "../../PlayVideoButton"
import { useState } from "react"

export default function WorkoutSelectionTableRow({ onSelectionChange, onDelete, defaultMuscle = {}, defaultExcer = {} }) {
    const [currentSelectedMuscle, setCurrentSelectedMuscle] = useState(defaultMuscle)
    const [currentSelectedExcer, setCurrentSelectedExcer] = useState(defaultExcer)

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
                    setCurrentSelectedExcer(e.target.value)
                    onSelectionChange({ muscle: currentSelectedMuscle, excer: e.target.value })
                }} />
            </TableCell>
            <TableCell>
                {currentSelectedExcer.link && <PlayVideoButton videoUrl={currentSelectedExcer.link} />}
            </TableCell>
            <TableCell>
                <DeleteButton onClick={onDelete} />
            </TableCell>
        </TableRow>
    )
}