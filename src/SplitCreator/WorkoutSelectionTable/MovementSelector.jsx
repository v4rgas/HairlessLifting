import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { useEffect, useState } from 'react';

import PlayVideoButton from '../../PlayVideoButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useBackendApi from '../../utils/useBackendApi';

export default function MovementSelector({ handleChange, muscleId, defaultMovement = {} }) {
    const [movement, setMovement] = useState(defaultMovement);
    const [movements, setMovements] = useState([defaultMovement]);

    const { getMovements: getExercises } = useBackendApi();

    useEffect(() => {
        const fetchExercises = async () => {
            if (muscleId === undefined) return
            const exercises = await getExercises(muscleId)
            setMovements(exercises)
            setMovement(exercises.find(e => e.id === defaultMovement?.id) || {})
        }
        fetchExercises()
    }, [muscleId])




    return (
        <FormControl fullWidth>
            <InputLabel id="movement-select">Movement</InputLabel>
            <Select
                labelId="movement-select"
                id="movement-selector"
                value={movement}
                label="Movement"
                onChange={(e) => {
                    console.log(e.target.value)
                    setMovement(e.target.value)
                    handleChange(e)
                }}
                disabled={muscleId === undefined}
            >
                {movements.map((movement, i) => <MenuItem key={i} value={movement}>{movement.name}</MenuItem>)}
            </Select>

        </FormControl >
    )


}