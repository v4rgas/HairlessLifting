import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
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
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this item?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
