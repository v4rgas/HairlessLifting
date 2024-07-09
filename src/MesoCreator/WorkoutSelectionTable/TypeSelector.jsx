import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { useState } from 'react';

export default function TypeSelector({ handleChange }) {
    const [type, setType] = useState('');
    return (<FormControl fullWidth>
        <InputLabel id="type-select">Type</InputLabel>
        <Select
            labelId="type-select"
            id="type-selector"
            value={type}
            label="Type"
            onChange={(e) => {
                setType(e.target.value)
                handleChange(e)
            }}
        >
            <MenuItem value={10}>Isolation</MenuItem>
            <MenuItem value={20}>Compound</MenuItem>
        </Select>
    </FormControl >)

}