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
        getSplits: async () => {
            return [
                { id: 1, name: 'Push Pull Legs' },
                { id: 2, name: 'Upper Lower' },
                { id: 3, name: 'Full Body' },
                { id: 4, name: 'Bro Split' },
                {
                    id: 6, name: 'Left Right Split / Panxi\'s favorite'
                },
                { id: 7, name: 'Push Pull Legs - Upper Lower' },
                { id: 8, name: 'Push Pull Legs - Full Body' },
            ]
        }
    }
}