import { IconButton } from "@mui/material"
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function PlayVideoButton({ videoUrl, sx = {} }) {
    return <IconButton href={videoUrl} sx={sx} target="_blank">
        <YouTubeIcon />
    </IconButton>
}