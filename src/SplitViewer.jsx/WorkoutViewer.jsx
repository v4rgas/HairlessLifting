import { Container, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import WorkoutViewerRow from "./WorkoutViewerRow";

export default function WorkoutViewer({ workout }) {
    console.log(workout)
    return (
        <TableContainer component={Paper} elevation={5}>
            <Typography variant='h5' sx={{ p: 1, textAlign: "center" }}>{workout?.id} </Typography>
            <Divider />
            <Table style={{ tableLayout: 'fixed' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h6">Muscle</Typography>
                        </TableCell>

                        <TableCell>
                            <Typography variant="h6">Movement</Typography>
                        </TableCell>

                        <TableCell width={100}>
                            <Typography variant="h6">Video</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {workout?.exercises?.map((workout, index) => <WorkoutViewerRow key={index} workout={workout} />)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}