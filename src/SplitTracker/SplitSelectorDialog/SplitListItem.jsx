import { Collapse, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";

import ExpandedIconButton from "./ExpandedIconButton";
import WorkoutDayListItem from './WorkoutListItem';
import { useState } from 'react';

export default function SplitListItem({ id, split, onSelectWorkout }) {
    const [expanded, setExpanded] = useState(false);
    console.log(split)

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <ExpandedIconButton open={expanded} onClick={toggleExpand} />
                </ListItemAvatar>

                {split.splitName}

            </ListItem>
            <Collapse in={expanded} unmountOnExit>
                <List sx={{ pl: 2 }}>
                    {split.workouts.map((workout) => (
                        <WorkoutDayListItem key={workout.id} splitId={id} workout={workout} onSelect={onSelectWorkout} />
                    ))}
                </List>
            </Collapse>
        </>
    );
}
