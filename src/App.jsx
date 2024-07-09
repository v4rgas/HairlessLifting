import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { darkModeAtom } from './atoms';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

export default function App() {
    const prefersDarkMode = useAtomValue(darkModeAtom)

    const draculaDarkPalette = {
        mode: 'dark',
        primary: {
            main: '#bd93f9', // Dracula purple
        },
        secondary: {
            main: '#ff79c6', // Dracula pink
        },
        background: {
            default: '#282a36', // Dracula background
            paper: '#44475a', // Dracula current line
        },
        text: {
            primary: '#f8f8f2', // Dracula foreground
            secondary: '#6272a4', // Dracula comment
        },
    };

    const draculaLightPalette = {
        mode: 'light',
        primary: {
            main: '#6272a4', // Dracula comment color for light theme
        },
        secondary: {
            main: '#ff79c6', // Dracula pink
        },
        background: {
            default: '#f8f8f2', // Dracula foreground for light theme
            paper: '#ffffff', // White paper
        },
        text: {
            primary: '#282a36', // Dracula background for text in light theme
            secondary: '#44475a', // Dracula current line for secondary text in light theme
        },
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: prefersDarkMode ? draculaDarkPalette : draculaLightPalette,
            }),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Outlet />
        </ThemeProvider>
    )
}