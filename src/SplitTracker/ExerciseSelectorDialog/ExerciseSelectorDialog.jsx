import { Autocomplete, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import useBackendApi from '../../utils/useBackendApi';

export default function ExerciseSelectorDialog({ open, onClose, onSelectExercise }) {
    const { getExercises } = useBackendApi();
    const [exercises, setExercises] = useState([]);


    useEffect(() => {
        if (open) {
            getExercises().then((exercises) => {
                console.log(exercises)
                setExercises(exercises)
            })
        }
    }, [open])

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Find an exercise</DialogTitle>
            <DialogContent>

                <Autocomplete
                    options={exercises}
                    getOptionLabel={(option) => option.movement.name}
                    renderInput={(params) => <TextField {...params}>Exercise</TextField>}
                    onChange={(event, value) => onSelectExercise(value)}
                />

            </DialogContent>
        </Dialog>
    )

}