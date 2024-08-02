import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material"
import { useEffect, useState } from "react";

import logo from '../assets/logo.svg'
import useBackendApi from "../utils/useBackendApi";
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const [split, setSplit] = useState("");
    const [splits, setSplits] = useState([]);
    const { getSplits } = useBackendApi();

    useEffect(() => { getSplits().then(setSplits) }, [])

    return (
        <Container>
            <Stack spacing={5} minHeight={1} justifyContent="center" sx={{ pt: 10 }}>
                <Box component="img" src={logo} alt="logo" height={200} />
                <FormControl fullWidth>
                    <InputLabel id="split-select">Split</InputLabel>
                    <Select labelId="split-select"
                        id="split-selector"
                        value={split}
                        label="Split"
                        onChange={(e) => {
                            setSplit(e.target.value)
                            console.log(e.target.value)
                        }}>
                        <MenuItem key="empty" value={''}>New Split</MenuItem>
                        {splits.map(split => <MenuItem key={split.id} value={split}>{split.splitName}</MenuItem>)}
                    </Select>

                </FormControl>

                <Button variant="contained" color="primary" fullWidth
                    onClick={() => navigate('/create', { state: { initialSplit: split } })} >
                    Create split
                </Button>




            </Stack>
        </Container >
    )
} 