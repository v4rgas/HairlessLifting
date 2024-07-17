import exercises from '../assets/exercises.json'

export default function useBackendApi() {

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