import { Container, TableContainer, Table, TableHead, TableRow, TableCell, Paper, Typography, Divider, TableBody  } from "@mui/material";
import { useParams } from "react-router-dom";
import useStorage from "../utils/useStorage";
import GoBackButton from "../GoBackButton";

export default function SplitTracker() {
    const { splitId } = useParams();

    const { getSplits } = useStorage();
    const split = getSplits()[splitId];


    


    return (
        <Container>
            <pre>{JSON.stringify(split, null, 2)}</pre>

 
            <GoBackButton/>
        </Container>
    );
}
