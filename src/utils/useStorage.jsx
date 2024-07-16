import { atom, useAtom, useAtomValue } from "jotai"

import { splitsAtom } from "./atoms"

export default function useStorage() {
    const [splits, setSplits] = useAtom(splitsAtom)

    const cloneSplits = () => {
        return { ...splits }
    }

    return {
        saveSplit: (split) => {
            const newSplits = cloneSplits()
            console.log(split.id)
            console.log(splits)
            newSplits[split.id] = split
            setSplits(newSplits)
        },
        getSplits: () => {
            return splits
        },
        deleteSplit: (splitId) => {
            const newSplits = cloneSplits()
            delete newSplits[splitId]
            setSplits(newSplits)
        }

    }
}