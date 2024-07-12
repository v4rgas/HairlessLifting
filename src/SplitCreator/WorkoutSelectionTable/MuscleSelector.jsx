import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react';

import useBackendApi from '../../utils/useBackendApi';

export default function MuscleSelector({ handleChange, defaultMuscle = {} }) {
    const [muscle, setMuscle] = useState(defaultMuscle)
    const [muscles, setMuscles] = useState([defaultMuscle]);
    const { getMuscles } = useBackendApi();

    useEffect(() => {
        const fetchMuscles = async () => {
            const muscles = await getMuscles()
            setMuscles(muscles)
            setMuscle(muscles.find(e => e.id === defaultMuscle?.id) || {})
        }
        fetchMuscles()
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
            {muscles.map(muscle => <MenuItem key={muscle.id} value={muscle}>{muscle.name}</MenuItem>)}
        </Select>
    </FormControl >)

}