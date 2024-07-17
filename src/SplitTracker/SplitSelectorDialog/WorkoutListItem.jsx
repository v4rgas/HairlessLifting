import { Button, Collapse, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon } from "@mui/material";

import ExpandedIconButton from "./ExpandedIconButton";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Upload } from "@mui/icons-material";
import UploadIcon from '@mui/icons-material/Upload';
import { useState } from 'react';

export default function WorkoutListItem({ splitId, workout, onSelect }) {
    const [expanded, setExpanded] = useState(false);

    console.log(workout)

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Divider />
            <ListItem secondaryAction={
                <IconButton onClick={() => onSelect(workout)} >
                    <KeyboardArrowRightIcon />
                </IconButton>
            }>
                <ListItemAvatar>
                    <ExpandedIconButton open={expanded} onClick={toggleExpand} />
                </ListItemAvatar>
                {workout.id}
                <ListItemIcon>

                </ListItemIcon>


            </ListItem>

            <Collapse in={expanded} unmountOnExit>
                <List sx={{ pl: 4 }}>
                    {workout.exercises.map((exercise) => (
                        <ListItem key={exercise.id}>
                            {exercise.movement.name}
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
}
