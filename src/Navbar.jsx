import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

import { darkModeAtom } from "./atoms";
import { useAtom } from "jotai";

export default function Navbar() {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ mx: 'auto' }} noWrap>pelao-rqlo</Typography>
                <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode}></Switch>
            </Toolbar>
        </AppBar >
    )
}