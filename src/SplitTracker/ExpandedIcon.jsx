import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react';

export default function ExpandedIcon(open) {
    return (
        <React.Fragment>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ React.Fragment>

    )
}