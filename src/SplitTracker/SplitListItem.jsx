import { Collapse, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton } from "@mui/material";

import ExpandedIcon from "./ExpandedIconButton";
import WorkoutDayListItem from './WorkoutDayListItem';
import { useState } from 'react';

export default function SplitListItem({ id, split }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <ExpandedIcon open={expanded} onClick={toggleExpand} />
                </ListItemAvatar>

                {split.splitName}

            </ListItem>
            <Collapse in={expanded} unmountOnExit>
                <List sx={{ pl: 2 }}>
                    {split.workoutDays.map((workoutDay) => (
                        <WorkoutDayListItem key={workoutDay.id} splitId={id} workoutDay={workoutDay} />
                    ))}
                </List>
            </Collapse>
        </>
    );
}
