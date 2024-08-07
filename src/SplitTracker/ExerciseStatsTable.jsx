import { Divider, IconButton, Paper, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import PlayVideoButton from "../PlayVideoButton";
import RemoveIcon from '@mui/icons-material/Remove';
import useBackendApi from "../utils/useBackendApi";

export default function ExerciseStatsTable({ exercise, onLastSetRemove, onSetsUpdate, sets }) {
    // const [sets, setSets] = useState([])
    const { getLatestSetsOfExercise } = useBackendApi()
    const [latestSets, setLatestSets] = useState([])
    useEffect(() => {
        if (exercise)
            getLatestSetsOfExercise(exercise.movement.id).then((latestSets) => {
                setLatestSets(latestSets)
            })
    }, [exercise])

    const removeLastSet = () => {
        if (sets.length === 0)
            onLastSetRemove()
        else
            onSetsUpdate(sets.slice(0, sets.length - 1))

    }
    return (
        <TableContainer component={Paper}>
            <Stack direction="row" spacing={2} justifyContent={"space-evenly"}>
                <Typography variant="h5" sx={{ p: 1, flexGrow: 1 }}>{exercise?.movement.name}</Typography>
                <PlayVideoButton videoUrl={exercise?.movement.link} />
                <IconButton onClick={() => onSetsUpdate([...sets, { reps: 0, weight: 0, rir: 0 }])}>
                    <AddIcon />
                </IconButton>
                <IconButton onClick={removeLastSet}>
                    <RemoveIcon />
                </IconButton>

            </Stack>
            <Divider />
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            <Typography variant="h6">Reps</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6">Weight (kg)</Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="h6">RIR</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sets.map((set, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell align="center">
                                    <TextField fullWidth type="number" inputProps={{ min: 0 }} variant="outlined" onChange={
                                        (e) => {
                                            const newSets = [...sets]
                                            newSets[index].reps = e.target.value
                                            onSetsUpdate(newSets)
                                        }
                                    }
                                        value={set.reps}
                                        label={"Latest reps: " + latestSets[index]?.reps || 0}
                                    />


                                </TableCell>
                                <TableCell align="center">
                                    <TextField fullWidth type="number" inputProps={{ min: 0 }} variant="outlined"
                                        onChange={
                                            (e) => {
                                                const newSets = [...sets]
                                                newSets[index].weight = e.target.value
                                                onSetsUpdate(newSets)
                                            }}
                                        value={set.weight}
                                        label={"Latest weight: " + latestSets[index]?.weight || 0}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <TextField fullWidth type="number" inputProps={{ min: 0 }} variant="outlined"
                                        onChange={
                                            (e) => {
                                                const newSets = [...sets]
                                                newSets[index].rir = e.target.value
                                                onSetsUpdate(newSets)
                                            }}
                                        value={set.rir}
                                        label={"Latest RIR: " + latestSets[index]?.rir || 0}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </TableContainer>
    )

}