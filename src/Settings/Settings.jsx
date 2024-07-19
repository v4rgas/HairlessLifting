import { Button, Container, Dialog, DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { colorSchemeAtom, splitsAtom, workoutSessionsAtom } from "../utils/atoms";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";

import DeletionDialog from "../DeletionDialog";
import colorSchemes from '../utils/colorSchemes'

export default function Settings() {
    const [colorScheme, setColorScheme] = useAtom(colorSchemeAtom)
    const splits = useAtomValue(splitsAtom)
    const workoutSessions = useAtomValue(workoutSessionsAtom)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setColorScheme(colorSchemes.find(cs => cs.name === colorScheme.name) || colorSchemes[0])
    }, [colorScheme])

    return (
        <Container>
            <DeletionDialog open={open} onClose={() => { setOpen(false) }} onConfirm={() => {
                localStorage.clear()
                setOpen(false)
            }}
                content={"Are you sure you want to reset all data?"}

            />

            <Stack spacing={5}>
                <Typography variant='h4'>Settings</Typography>
                <FormControl fullWidth>
                    <InputLabel id="colorScheme-select">Color Scheme</InputLabel>
                    <Select
                        labelId="colorScheme-select"
                        id="colorScheme-selector"
                        value={colorScheme}
                        label="Color Scheme"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setColorScheme(e.target.value)
                        }}

                    >
                        {colorSchemes.map((colorScheme, i) => <MenuItem key={i} value={colorScheme}>{colorScheme.name}</MenuItem>)}
                    </Select>

                </FormControl >

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        const input = document.createElement('input');
                        input.type = 'file';
                        input.accept = '.json';
                        input.onchange = (e) => {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                const data = JSON.parse(e.target.result);
                                localStorage.setItem('splits', JSON.stringify(data.splits))
                                localStorage.setItem('workoutSessions', JSON.stringify(data.workoutSessions))
                                window.location.reload()
                            }
                            reader.readAsText(file);
                        }
                        input.click();
                    }}

                >
                    Import Data from JSON (will overwrite all current data)
                </Button>

                <Button onClick={() => {
                    const data = {
                        splits: splits,
                        workoutSessions: workoutSessions
                    }
                    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'split-tracker-data.json';
                    a.click();
                    URL.revokeObjectURL(url);
                }} variant="contained" color="primary">
                    Export Data as JSON
                </Button>
                <Button onClick={() => {
                    setOpen(true)
                }} variant="contained" color="error">
                    Reset All Data
                </Button>

            </Stack>
        </Container >
    )
}