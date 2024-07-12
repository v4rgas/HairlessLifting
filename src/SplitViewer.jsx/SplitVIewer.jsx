import { Container, TableContainer, Table, TableHead, TableRow, TableCell, Paper, Typography, Divider, TableBody, Stack  } from "@mui/material";
import { useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";
import GoBackButton from "../GoBackButton";
import WorkoutDayViewer from "./WorkoutDayViewer";

export default function SplitViewer() {
    const { splitId } = useParams();

    const { getSplits } = useStorage();
    const split = getSplits()[splitId];

    return (
        <Container>
            <Stack spacing={5}>
                <Typography variant="h3">{split?.splitName}</Typography>
                {split?.workoutDays?.map((workoutDay, index) => <WorkoutDayViewer key={index} workoutDay={workoutDay} />)}
                <GoBackButton/>
            </Stack>
        </Container>
    );
}
