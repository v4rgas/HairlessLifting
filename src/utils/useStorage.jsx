import { atom, useAtom, useAtomValue } from "jotai"
import { splitsAtom } from "./atoms"

export default function useStorage(){
    const [splits, setSplits] = useAtom(splitsAtom)
    return {
        saveSplit: (split) => {
            setSplits({...splits, [split.id]: split}) 
        },
        getSplits: () => {
            return splits
        },
        
    }
}