import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { colorSchemeAtom, darkModeAtom } from './utils/atoms';

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

export default function App() {
    const prefersDarkMode = useAtomValue(darkModeAtom)
    const colorScheme = useAtomValue(colorSchemeAtom)


    const theme = useMemo(
        () =>
            createTheme({
                palette: prefersDarkMode ? colorScheme.dark : colorScheme.light,
            }),
        [prefersDarkMode, colorScheme],
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Outlet />
        </ThemeProvider>
    )
}