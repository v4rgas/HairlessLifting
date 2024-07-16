import { TableCell, TableRow, Typography } from "@mui/material"

import DeleteButton from "../../DeleteButton"
import ExerSelector from "./ExerSelector"
import MuscleSelector from "./MuscleSelector"
import PlayVideoButton from "../../PlayVideoButton"
import { useState } from "react"

export default function WorkoutSelectionTableRow({ onSelectionChange, onDelete, defaultMuscle = {}, defaultExer = {} }) {
    const [currentSelectedMuscle, setCurrentSelectedMuscle] = useState(defaultMuscle)
    const [currentSelectedExer, setCurrentSelectedExer] = useState(defaultExer)

    return (
        <TableRow>
            <TableCell>
                <MuscleSelector defaultMuscle={defaultMuscle} handleChange={(e) => {
                    setCurrentSelectedMuscle(e.target.value)
                    onSelectionChange({ muscle: e.target.value, exer: null })
                }} />
            </TableCell>

            <TableCell>
                <ExerSelector defaultExer={defaultExer} muscleId={currentSelectedMuscle.id} handleChange={(e) => {
                    setCurrentSelectedExer(e.target.value)
                    onSelectionChange({ muscle: currentSelectedMuscle, exer: e.target.value })
                }} />
            </TableCell>
            <TableCell align="center" sx={{ justifyContent: 'space-between', display: 'flex' }}>
                <PlayVideoButton videoUrl={currentSelectedExer.link} />
                <DeleteButton onClick={onDelete} />
            </TableCell>
            {/* <TableCell align="center">

            </TableCell> */}
        </TableRow>
    )
}