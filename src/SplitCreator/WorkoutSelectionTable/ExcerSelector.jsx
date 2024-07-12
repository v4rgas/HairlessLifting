import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { useEffect, useState } from 'react';

import YouTubeIcon from '@mui/icons-material/YouTube';
import useBackendApi from '../../utils/useBackendApi';
import PlayVideoButton from '../../PlayVideoButton';


export default function ExcerSelector({ handleChange, muscleId, defaultExcer = {} }) {
    const [excercise, setExcercise] = useState(defaultExcer);
    const [excercises, setExcercises] = useState([defaultExcer]);

    const { getExcercises } = useBackendApi();

    useEffect(() => {
        const fetchExcercises = async () => {
            const excercises = await getExcercises(muscleId)
            setExcercises(excercises)
            setExcercise(excercises.find(e => e.id === defaultExcer?.id) || {})
        }
        fetchExcercises()
    }, [muscleId])




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
                        console.log(e.target.value)
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