import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { useEffect, useState } from 'react';

import PlayVideoButton from '../../PlayVideoButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useBackendApi from '../../utils/useBackendApi';

export default function ExerSelector({ handleChange, muscleId, defaultExer = {} }) {
    const [exercise, setExercise] = useState(defaultExer);
    const [exercises, setExercises] = useState([defaultExer]);

    const { getExercises } = useBackendApi();

    useEffect(() => {
        const fetchExercises = async () => {
            if (muscleId === undefined) return
            const exercises = await getExercises(muscleId)
            setExercises(exercises)
            setExercise(exercises.find(e => e.id === defaultExer?.id) || {})
        }
        fetchExercises()
    }, [muscleId])




    return (
        <FormControl fullWidth>
            <InputLabel id="exercise-select">Exercise</InputLabel>
            <Select
                labelId="exercise-select"
                id="exercise-selector"
                value={exercise}
                label="Exercise"
                onChange={(e) => {
                    console.log(e.target.value)
                    setExercise(e.target.value)
                    handleChange(e)
                }}
                disabled={muscleId === undefined}
            >
                {exercises.map((exercise, i) => <MenuItem key={i} value={exercise}>{exercise.name}</MenuItem>)}
            </Select>

        </FormControl >
    )


}