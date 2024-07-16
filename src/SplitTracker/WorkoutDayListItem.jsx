import { Button, Collapse, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon } from "@mui/material";

import ExpandedIcon from "./ExpandedIconButton";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Upload } from "@mui/icons-material";
import UploadIcon from '@mui/icons-material/Upload';
import { useState } from 'react';

export default function WorkoutDayListItem({ splitId, workoutDay }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Divider />
            <ListItem secondaryAction={
                <IconButton >
                    <KeyboardArrowRightIcon />
                </IconButton>
            }>
                <ListItemAvatar>
                    <ExpandedIcon open={expanded} onClick={toggleExpand} />
                </ListItemAvatar>
                {workoutDay.id}
                <ListItemIcon>

                </ListItemIcon>


            </ListItem>

            <Collapse in={expanded} unmountOnExit>
                <List sx={{ pl: 4 }}>
                    {workoutDay.workouts.map((workout) => (
                        <ListItem key={workout.id}>
                            {workout.exer.name}
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
}
