import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';

export default function EditButton({ onClick = () => {}, sx = {} }) {
    return <IconButton onClick={onClick} sx={sx}>
        <EditIcon/>
    </IconButton>
}