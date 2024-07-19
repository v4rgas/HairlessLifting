import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import DeletionDialog from './DeletionDialog';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default function DeleteButton({ onClick = () => { }, sx = {} }) {
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        setOpen(false);
        onClick();
    };

    return (
        <>
            <IconButton onClick={() => setOpen(true)} sx={sx}>
                <DeleteIcon />
            </IconButton>
            <DeletionDialog open={open} onClose={() => setOpen(false)} onConfirm={handleDelete} content={"Are you sure you want to delete this item?"} />
        </>
    );
}
