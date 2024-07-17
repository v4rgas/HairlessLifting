import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import React from 'react';

export default function ExpandedIconButton({ open, onClick }) {
    return (
        <React.Fragment>
            <IconButton onClick={onClick}>
                {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
        </ React.Fragment>

    )
}