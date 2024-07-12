import { Container, TableContainer, Table, TableHead, TableRow, TableCell, Paper, Typography, Divider, TableBody  } from "@mui/material";
import WorkoutDayViewerRow from "./WorkoutDayViewerRow";

export default function WorkoutDayViewer({workoutDay}){
    console.log(workoutDay)
    return (
    <TableContainer component={Paper} elevation={5}>
    <Typography variant='h5' sx={{ p: 1, textAlign: "center" }}>{workoutDay?.id} </Typography>
    <Divider />
    <Table style={{ tableLayout: 'fixed' }}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography variant="h6">Muscle</Typography>
                    </TableCell>

                    <TableCell>
                        <Typography variant="h6">Excercise</Typography>
                    </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {workoutDay?.workouts.map((workout, index) => <WorkoutDayViewerRow key={index} workout={workout} />)}
            </TableBody>
        </Table>
</TableContainer>
)
}