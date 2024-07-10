import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react';

import useBackendApi from '../../useBackendApi';

export default function ExcerSelector({ handleChange, muscleId, defaultExcer }) {
    const [excercise, setExcercise] = useState({});
    const [excercises, setExcercises] = useState([]);

    const { getExcercises } = useBackendApi();

    useEffect(() => {
        getExcercises(muscleId).then(setExcercises)
    }, [muscleId])

    useEffect(() => {
        if (excercises.length == 0) return
        if (defaultExcer?.id && !excercise.id)
            setExcercise(excercises.find(e => e.id === defaultExcer.id) || {})

    }, [defaultExcer, excercises])



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
            {excercises.map(excercise => <MenuItem key={excercise.id} value={excercise}>{excercise.name}</MenuItem>)}
        </Select>
    </FormControl >)

}