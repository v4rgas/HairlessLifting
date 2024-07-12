import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { useEffect, useState } from 'react';

import YouTubeIcon from '@mui/icons-material/YouTube';
import useBackendApi from '../../utils/useBackendApi';
import PlayVideoButton from '../../PlayVideoButton';


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



    return (
        <Stack flexDirection={"row"} alignItems={"center"}>
            <FormControl fullWidth>
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

            </FormControl >
            {excercise.link && <PlayVideoButton videoUrl={excercise.link}  />}

        </Stack>
    )


}