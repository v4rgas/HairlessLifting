import { Button, Container, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"
import { useEffect, useState } from "react";

import useBackendApi from "../useBackendApi";
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const [split, setSplit] = useState("");
    const [splits, setSplits] = useState([]);
    const { getSplits } = useBackendApi();

    useEffect(() => { getSplits().then(setSplits) }, [])

    return (
        <Container>
            <Stack spacing={5} minHeight={1} justifyContent="center" sx={{ my: 35 }}>
                <FormControl fullWidth>
                    <InputLabel id="split-select">Split</InputLabel>
                    <Select labelId="split-select"
                        id="split-selector"
                        value={split}
                        label="Split"
                        onChange={(e) => {
                            setSplit(e.target.value)
                        }}>
                        {splits.map(split => <MenuItem key={split.id} value={split}>{split.name}</MenuItem>)}
                    </Select>

                </FormControl>

                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate('/create')}>Create split from template</Button>
                <Button variant="contained" fullWidth onClick={() => navigate('/create')}>Create a split from scratch</Button>
            </Stack>
        </Container>
    )
} 