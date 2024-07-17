import { Button, Container, Stack, Typography } from "@mui/material";

import GoBackButton from "../../GoBackButton";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useStorage from "../../utils/useStorage";

export default function SplitTracker() {
    const { createSession, getSessions } = useStorage();
    const navigate = useNavigate();
    const sessions = getSessions();

    console.log(sessions)

    return (
        <Container>
            <Stack spacing={5}>
                <Typography variant="h4">Active Sessions</Typography>
                {Object.values(sessions).filter(session => !session.finishDate).map((session) => {
                    return <Button variant="contained" color="secondary" key={session.id}
                        onClick={() => navigate(`/tracker/${session.id}`)}>
                        Session {session.id}
                    </Button>
                })}
                <Button variant="contained" onClick={() => {
                    const sessionId = createSession();
                    navigate(`/tracker/${sessionId}`);
                }}
                >Start new session</Button>
                <Typography variant="h4"> Finished sessions</Typography>
                {Object.values(sessions).filter(session => session.finishDate).map((session) => {
                    return <Button variant="contained" color="secondary" key={session.id}
                        onClick={() => navigate(`/tracker/${session.id}`)}>
                        Session {session.id}
                    </Button>
                })}
                <GoBackButton />
            </Stack>
        </Container>
    );
}
