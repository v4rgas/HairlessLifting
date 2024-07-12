import { Container, Typography, Stack, Grid  } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";
import GoBackButton from "../GoBackButton";
import WorkoutDayViewer from "./WorkoutDayViewer";
import DeleteButton from "../DeleteButton";

export default function SplitViewer() {
    const { splitId } = useParams();

    const { getSplits, deleteSplit } = useStorage();
    const split = getSplits()[splitId];

    const navigate = useNavigate()

    return (
        <Container>
            <Grid container spacing={5}>
                <Grid xs={11} item>
                    <Typography variant="h3">{split?.splitName}</Typography>
                </Grid>

                <Grid xs={1} item>
                    <DeleteButton onClick={()=>{
                        
                        deleteSplit(splitId);
                        navigate("/saved")
                    }}></DeleteButton>
                </Grid>

                {split?.workoutDays?.map((workoutDay, index) => 
                <Grid xs={12} item> <WorkoutDayViewer key={index} workoutDay={workoutDay} /> </Grid>
                )}

                <Grid xs={12} item>
                    <GoBackButton/>
                </Grid>

            </Grid>
        </Container>
    );
}
