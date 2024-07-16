import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function DeleteButton({ onClick = () => { }, sx = {} }) {
    return <IconButton onClick={onClick} sx={sx}>
        <DeleteIcon />
    </IconButton>
}