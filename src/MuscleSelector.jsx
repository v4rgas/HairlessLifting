import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react';

import useBackendApi from './useBackendApi';
import useYoutubeScrapper from './scraperExcercise';

export default function MuscleSelector({ handleChange }) {
    const [muscle, setMuscle] = useState('');
    const [muscles, setMuscles] = useState([]);
    const { getMuscles } = useBackendApi();

    useEffect(() => {
        getMuscles().then(setMuscles)
    }, [])

    return (<FormControl fullWidth>
        <InputLabel id="muscle-select">Muscle</InputLabel>
        <Select
            labelId="muscle-select"
            id="muscle-selector"
            value={muscle}
            label="Muscle"
            onChange={(e) => {
                setMuscle(e.target.value)
                handleChange(e)
            }}
        >
            {muscles.map(muscle => <MenuItem key={muscle.id} value={muscle.id}>{muscle.name}</MenuItem>)}
        </Select>
    </FormControl >)

}