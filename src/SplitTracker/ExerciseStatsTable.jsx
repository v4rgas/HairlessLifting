import { Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

export default function ExerciseStatsTable({ exercise }) {
    const [sets, setSets] = useState([])
    const removeLastSet = () => {
        setSets(sets => sets.slice(0, sets.length - 1))
    }

    return (
        <TableContainer component={Paper}>
            <Typography variant="h5" sx={{ p: 1, textAlign: "center" }}>{exercise?.movement.name}</Typography>
            <IconButton onClick={() => setSets(sets => [...sets, { reps: 0, weight: 0 }])}>
                <AddIcon />
            </IconButton>
            <IconButton onClick={removeLastSet}>
                <RemoveIcon />
            </IconButton>
            <Divider />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <Typography variant="h6">Reps</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6">Weight (kg)</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sets.map((set, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell align="center">
                                    <TextField type="number" inputProps={{ min: 0 }} variant="outlined" />
                                </TableCell>
                                <TableCell align="center">
                                    <TextField type="number" inputProps={{ min: 0 }} variant="outlined" />
                                </TableCell>
                            </TableRow>
                        )
                    })}


                </TableBody>
            </Table>

        </TableContainer>
    )

}