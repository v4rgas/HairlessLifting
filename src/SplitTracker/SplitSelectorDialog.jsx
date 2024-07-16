import { Collapse, Dialog, DialogContent, DialogTitle, List, ListItemButton } from "@mui/material";
import React, { useState } from 'react';

import ExpandedIcon from "./ExpandedIcon";
import useStorage from "../utils/useStorage";

export default function SplitSelectorDialog({ open, onClose }) {
    const { getSplits } = useStorage();
    const splits = getSplits();

    const [expandedSplits, setExpandedSplits] = useState({});
    const [expandedDays, setExpandedDays] = useState({});

    const toggleSplit = (id) => {
        setExpandedSplits((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const toggleDay = (splitId, dayId) => {
        setExpandedDays((prev) => ({
            ...prev,
            [`${splitId}-${dayId}`]: !prev[`${splitId}-${dayId}`],
        }));
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Select a split</DialogTitle>
            <DialogContent>
                <List>
                    {Object.entries(splits).map(([id, split]) => (
                        <React.Fragment key={id}>
                            <ListItemButton onClick={() => toggleSplit(id)}>
                                {split.splitName}
                                <ExpandedIcon open={expandedSplits[id]} />
                            </ListItemButton>
                            <Collapse in={expandedSplits[id]} unmountOnExit>
                                {split.workoutDays.map((workoutDay) => (
                                    <React.Fragment key={workoutDay.id}>
                                        <ListItemButton sx={{ pl: 4 }} onClick={() => toggleDay(id, workoutDay.id)}>
                                            {workoutDay.id}
                                        </ListItemButton>
                                        <Collapse in={expandedDays[`${id}-${workoutDay.id}`]} unmountOnExit>
                                            {workoutDay.workouts.map((workout) => (
                                                <ListItemButton key={workout.id} sx={{ pl: 8 }}>
                                                    {workout.exer.name}
                                                </ListItemButton>
                                            ))}
                                        </Collapse>
                                    </React.Fragment>
                                ))}
                            </Collapse>
                        </React.Fragment>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
}
