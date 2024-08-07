import exercises from '../assets/exercises.json'
import ppl from '../assets/ppl.json'
import { useAtomValue } from 'jotai'
import { workoutSessionsAtom } from './atoms'

export default function useBackendApi() {

    const workouts = useAtomValue(workoutSessionsAtom)

    return {
        getMuscles: async () => {
            return Object.keys(exercises).map((muscle, index) => {
                return { id: muscle, name: muscle }
            })

        },
        getMovements: async (muscleId) => {
            if (!exercises[muscleId]) {
                console.error(`No movements found for muscleId: ${muscleId}`);
                return [];
            }
            return exercises[muscleId].map(({ name, link }, index) => {
                return { id: index, name, muscleId: muscleId, link };
            });
        },
        getExercises: async () => {
            // {muscle: {name: 'Chest', id: 'chest'}, movement: {name: 'Bench Press', id, muscleId, link}
            return Object.keys(exercises).reduce((acc, muscle) => {
                return acc.concat(exercises[muscle].map((movement, index) => {
                    return { muscle: { name: muscle, id: muscle }, movement: { name: movement.name, id: index, muscleId: muscle, link: movement.link } }
                }))
            }, [])
        },
        getSplits: async () => {
            return [ppl]
        },
        getLatestSetsOfExercise: async (exerciseId) => {
            return Object.values(workouts).reduce((acc, workout) => {
                return acc.concat(workout.exercises.find(exercise => exercise.movement.id === exerciseId)?.sets || [])
            }
                , [])
        },
    }
}
