import { Container, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import PlayVideoButton from "../PlayVideoButton";

export default function WorkoutDayViewerRow({ workout }) {
    return (
        <TableRow>
            <TableCell>
                {workout.muscle?.name}
            </TableCell>
            <TableCell>
                {workout.excer?.name}
            </TableCell>
            <TableCell >
                <PlayVideoButton videoUrl={workout.excer?.link} />
            </TableCell>
        </TableRow>
    )
}