import { IconButton } from "@mui/material"
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function PlayVideoButton({ videoUrl }) {
    return <IconButton href={videoUrl} target="_blank" size='small'>
        <YouTubeIcon />
    </IconButton>
}