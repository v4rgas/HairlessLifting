import { useAtom, useAtomValue } from "jotai"
import { splitsAtom } from "./atoms"

export default function useStorage(){
    
    return {
        saveSplit: (split) => {
            const [splits, setSplits] = useAtom(splitsAtom)
            setSplits([...splits, split]) 
        },
        getSplits: ()=>{
            return useAtomValue(splitsAtom)
        }
    }
}