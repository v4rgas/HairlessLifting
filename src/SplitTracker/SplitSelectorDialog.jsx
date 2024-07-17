import { Dialog, DialogContent, DialogTitle, List } from "@mui/material";

import SplitListItem from './SplitListItem';
import useStorage from "../utils/useStorage";

export default function SplitSelectorDialog({ open, onClose }) {
    const { getSplits } = useStorage();
    const splits = getSplits();

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Select a workout from a split</DialogTitle>
            <DialogContent>
                <List>
                    {Object.entries(splits).map(([id, split]) => (
                        <SplitListItem key={id} id={id} split={split} />
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
}
