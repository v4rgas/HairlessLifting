import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

export default function DeletionDialog({ open, onClose, onConfirm, content }) {
    return <Dialog open={open} onClose={onClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
            {content}
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onConfirm} autoFocus>
                Delete
            </Button>
        </DialogActions>
    </Dialog>
}