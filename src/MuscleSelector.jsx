import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { useState } from 'react';
import useYoutubeScrapper from './scraperExcercise';

export default function MuscleSelector({ handleChange }) {
    const [muscle, setMuscle] = useState('');
    const { getPlaylistVideos } = useYoutubeScrapper()
    return (<FormControl fullWidth>
        <InputLabel id="muscle-select">Muscle</InputLabel>
        <Select
            labelId="muscle-select"
            id="muscle-selector"
            value={muscle}
            label="Muscle"
            onChange={(e) => {
                setMuscle(e.target.value)
                getPlaylistVideos("https://www.youtube.com/playlist?list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff")
                handleChange(e)
            }}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl >)

}