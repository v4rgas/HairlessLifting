import dayjs from "dayjs";
import exercises from '../assets/exercises.json';
import ppl from '../assets/ppl.json';
import { useAtomValue } from 'jotai';
import { workoutSessionsAtom } from './atoms';

export default function useBackendApi() {

    const workouts = useAtomValue(workoutSessionsAtom);

    const mapMuscles = () => Object.keys(exercises).map(muscle => ({ id: muscle, name: muscle }));

    const mapMovements = (muscleId) => {
        const movements = exercises[muscleId] || [];
        return movements.map(({ name, link }, index) => ({ id: index, name, muscleId, link }));
    };

    const mapExercises = () => {
        return Object.keys(exercises).reduce((acc, muscle) => {
            const movements = exercises[muscle];
            const mappedMovements = movements.map(({ name, link }, index) => ({
                muscle: { name: muscle, id: muscle },
                movement: { name, id: index, muscleId: muscle, link }
            }));
            return acc.concat(mappedMovements);
        }, []);
    };

    const sortByDate = (a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -11;

    const getLatestSets = (exerciseId) => {
        return Object.values(workouts)
            .sort(sortByDate)
            .filter(session => session.finishDate)
            .reduce((acc, session) => {
                const sets = session.exercises.find(exercise => exercise.movement.id === exerciseId)?.sets || [];
                return acc.concat(sets);
            }, []);
    };

    return {
        getMuscles: async () => mapMuscles(),
        getMovements: async (muscleId) => mapMovements(muscleId),
        getExercises: async () => mapExercises(),
        getSplits: async () => [ppl],
        getLatestSetsOfExercise: async (exerciseId) => getLatestSets(exerciseId),
    };
}
