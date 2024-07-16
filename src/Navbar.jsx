import { AppBar, Box, Divider, IconButton, Switch, Toolbar, Typography } from "@mui/material";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsIcon from '@mui/icons-material/Settings';
import { darkModeAtom } from "./utils/atoms";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const navigate = useNavigate()
    return (
        <AppBar position="static" sx={{ mb: 5 }}>
            <Toolbar>

                <Box flexGrow={1}>
                    <IconButton onClick={() => navigate("/")}>
                        <HomeIcon />
                    </IconButton>

                    <IconButton onClick={() => navigate("/saved")}>
                        <FolderSpecialIcon />
                    </IconButton>

                    <IconButton onClick={() => navigate("/tracker")}>
                        <EditNoteIcon />
                    </IconButton>
                </Box>

                <Typography variant="h6" noWrap flexGrow={1}>pelao-rqlo</Typography>

                {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode}></Switch>
                <IconButton onClick={() => navigate("/settings")}>
                    <SettingsIcon />
                </IconButton>

            </Toolbar>
        </AppBar >
    )
}