import { atom, useAtom, useAtomValue } from "jotai"
import { splitsAtom, workoutSessionsAtom } from "./atoms"

import dayjs from "dayjs"

export default function useStorage() {
    const [splits, setSplits] = useAtom(splitsAtom)
    const [workoutSessions, setWorkoutSessions] = useAtom(workoutSessionsAtom)

    const cloneSplits = () => {
        return { ...splits }
    }

    const cloneWorkoutSessions = () => {
        return { ...workoutSessions }
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
        },

        createSession: () => {
            const newWorkoutSessions = cloneWorkoutSessions()
            const newSessionId = dayjs().format()
            newWorkoutSessions[newSessionId] = {
                id: newSessionId,
                exercises: []
            }
            setWorkoutSessions(newWorkoutSessions)
            return newSessionId
        },

        getSession: (sessionId) => {
            return workoutSessions[sessionId]
        },

        saveSession: (session) => {
            const newWorkoutSessions = cloneWorkoutSessions()
            newWorkoutSessions[session.id] = session
            setWorkoutSessions(newWorkoutSessions)
        },

        getSessions: () => {
            return workoutSessions
        },

        deleteSession: (sessionId) => {
            const newWorkoutSessions = cloneWorkoutSessions()
            delete newWorkoutSessions[sessionId]
            setWorkoutSessions(newWorkoutSessions)
        }
    }
}