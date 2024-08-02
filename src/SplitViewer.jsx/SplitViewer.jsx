import { Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import GoBackButton from "../GoBackButton";
import WorkoutViewer from "./WorkoutViewer";
import useStorage from "../utils/useStorage";

export default function SplitViewer() {
    const { splitId } = useParams();

    const { getSplits, deleteSplit } = useStorage();
    const split = getSplits()[splitId];
    console.log(split)

    const navigate = useNavigate()

    return (
        <Container>
            <Grid container spacing={5}>
                <Grid xs={10} md={10} item>
                    <Typography variant="h3">{split?.splitName}</Typography>
                </Grid>

                <Grid xs={2} md={2} alignContent={"center"} item container>
                    <Grid xs={12} md={6} item>
                        <DeleteButton onClick={() => {

                            deleteSplit(splitId);
                            navigate("/saved")
                        }}
                            sx={{ mx: "auto" }}
                        ></DeleteButton>
                    </Grid>

                    <Grid xs={12} md={6} item>
                        <EditButton onClick={() => navigate("/create", { state: { initialSplit: split } })}>
                        </EditButton>
                    </Grid>
                </Grid>

                {split?.workouts?.map((workout, index) =>
                    <Grid key={index} xs={12} item> <WorkoutViewer key={index} workout={workout} /> </Grid>
                )}

                <Grid xs={12} item>
                    <GoBackButton />
                </Grid>

            </Grid>
        </Container>
    );
}
