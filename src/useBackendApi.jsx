export default function useBackendApi() {
    return {
        getMuscles: async () => {
            return [
                { id: 1, name: 'Chest' },
                { id: 2, name: 'Back' },
            ]
        },
        getExcercises: async (muscleId) => {
            return [
                { id: 1, name: 'Bench Press', muscleId: 1 },
                { id: 2, name: 'Push Ups', muscleId: 1 },
                { id: 3, name: 'Pull Ups', muscleId: 2 },
                { id: 4, name: 'Deadlift', muscleId: 2 },
            ].filter(excercise => excercise.muscleId === muscleId)
        },
    }
}