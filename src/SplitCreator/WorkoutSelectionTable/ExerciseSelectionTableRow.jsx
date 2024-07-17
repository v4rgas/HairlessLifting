import { TableCell, TableRow, Typography } from "@mui/material"

import DeleteButton from "../../DeleteButton"
import MovementSelector from "./MovementSelector"
import MuscleSelector from "./MuscleSelector"
import PlayVideoButton from "../../PlayVideoButton"
import { useState } from "react"

export default function ExerciseSelectionTableRow({ onSelectionChange, onDelete, defaultMuscle = {}, defaultMovement = {} }) {
    const [currentSelectedMuscle, setCurrentSelectedMuscle] = useState(defaultMuscle)
    const [currentSelectedMovement, setCurrentSelectedMovement] = useState(defaultMovement)

    return (
        <TableRow>
            <TableCell>
                <MuscleSelector defaultMuscle={defaultMuscle} handleChange={(e) => {
                    setCurrentSelectedMuscle(e.target.value)
                    onSelectionChange({ muscle: e.target.value, exer: null })
                }} />
            </TableCell>

            <TableCell>
                <MovementSelector defaultMovement={defaultMovement} muscleId={currentSelectedMuscle.id} handleChange={(e) => {
                    setCurrentSelectedMovement(e.target.value)
                    onSelectionChange({ muscle: currentSelectedMuscle, movement: e.target.value })
                }} />
            </TableCell>
            <TableCell align="center" sx={{ justifyContent: 'space-between', display: 'flex' }}>
                <PlayVideoButton videoUrl={currentSelectedMovement.link} />
                <DeleteButton onClick={onDelete} />
            </TableCell>
        </TableRow>
    )
}