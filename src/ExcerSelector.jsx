import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { useState } from 'react';

export default function ExcerSelector({ handleChange }) {
    const [excercise, setExcercise] = useState('');
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl >)

}