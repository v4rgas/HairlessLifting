import { AppBar, IconButton, Switch, Toolbar, Typography } from "@mui/material";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import { darkModeAtom } from "./atoms";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => navigate("/")}>
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" sx={{ mx: 'auto' }} noWrap>pelao-rqlo</Typography>
                {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode}></Switch>
            </Toolbar>
        </AppBar >
    )
}