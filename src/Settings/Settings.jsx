import { Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";

import { colorSchemeAtom } from "../utils/atoms";
import colorSchemes from '../utils/colorSchemes'
import { useAtom } from "jotai";

export default function Settings() {
    const [colorScheme, setColorScheme] = useAtom(colorSchemeAtom)

    return (
        <Container>
            <Stack spacing={5}>
                <Typography variant='h3'>Settings</Typography>
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