import { Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";

import { colorSchemeAtom } from "../utils/atoms";
import colorSchemes from '../utils/colorSchemes'
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Settings() {
    const [colorScheme, setColorScheme] = useAtom(colorSchemeAtom)

    useEffect(() => {
        setColorScheme(colorSchemes.find(cs => cs.name === colorScheme.name) || colorSchemes[0])
    }, [colorScheme])

    return (
        <Container>
            <Stack spacing={5}>
                <Typography variant='h4'>Settings</Typography>
                <FormControl fullWidth>
                    <InputLabel id="colorScheme-select">Color Scheme</InputLabel>
                    <Select
                        labelId="colorScheme-select"
                        id="colorScheme-selector"
                        value={colorScheme}
                        label="Color Scheme"
                        onChange={(e) => {
                            console.log(e.target.value)
                            setColorScheme(e.target.value)
                        }}

                    >
                        {colorSchemes.map((colorScheme, i) => <MenuItem key={i} value={colorScheme}>{colorScheme.name}</MenuItem>)}
                    </Select>

                </FormControl >
            </Stack>
        </Container>
    )
}