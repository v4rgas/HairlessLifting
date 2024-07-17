import { Container, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import PlayVideoButton from "../PlayVideoButton";

export default function WorkoutViewerRow({ workout }) {
    return (
        <TableRow>
            <TableCell>
                {workout.muscle?.name}
            </TableCell>
            <TableCell>
                {workout.movement?.name}
            </TableCell>
            <TableCell >
                <PlayVideoButton videoUrl={workout.movement?.link} />
            </TableCell>
        </TableRow>
    )
}