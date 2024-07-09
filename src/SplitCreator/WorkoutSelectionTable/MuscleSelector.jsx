import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react';

import useBackendApi from '../../useBackendApi';

export default function MuscleSelector({ handleChange, defaultMuscle = {} }) {
    const [muscle, setMuscle] = useState({})
    const [muscles, setMuscles] = useState([]);
    const { getMuscles } = useBackendApi();

    useEffect(() => {
        getMuscles().then(setMuscles)
    }, [])

    useEffect(() => {
        if (muscles.length == 0) return
        if (defaultMuscle?.id && !muscle.id)
            setMuscle(muscles.find(e => e.id === defaultMuscle.id) || {})

    }, [defaultMuscle, muscles])


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
            {muscles.map(muscle => <MenuItem key={muscle.id} value={muscle}>{muscle.name}</MenuItem>)}
        </Select>
    </FormControl >)

}