import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react';

import useBackendApi from '../../useBackendApi';

export default function ExcerSelector({ handleChange, muscleId }) {
    const [excercise, setExcercise] = useState('');
    const [excercises, setExcercises] = useState([]);
    const { getExcercises } = useBackendApi();
    useEffect(() => {
        getExcercises(muscleId).then(setExcercises)
    }, [muscleId])
    return (<FormControl fullWidth>
        <InputLabel id="excercise-select">Excercise</InputLabel>
        <Select
            labelId="excercise-select"
            id="excercise-selector"
            value={excercise}
            label="Excercise"
            onChange={(e) => {
                setExcercise(e.target.value)
                handleChange(e)
            }}
        >
            {excercises.map(excercise => <MenuItem key={excercise.id} value={excercise.id}>{excercise.name}</MenuItem>)}
        </Select>
    </FormControl >)

}