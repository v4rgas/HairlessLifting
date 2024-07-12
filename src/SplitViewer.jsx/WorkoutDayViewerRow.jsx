import { Container, TableContainer, Table, TableHead, TableRow, TableCell, Paper, Typography, Divider, TableBody  } from "@mui/material";
import PlayVideoButton from "../PlayVideoButton";

export default function WorkoutDayViewerRow({ workout }) {
    return (
        <TableRow>
            <TableCell>
                {workout.muscle.name}
            </TableCell>
            <TableCell>
                {workout.excer.name} <PlayVideoButton videoUrl={workout.excer.link} />
            </TableCell>
        </TableRow>
    )
}