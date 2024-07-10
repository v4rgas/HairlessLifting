import exercises from './assets/exercises.json'

export default function useBackendApi() {

    return {
        getMuscles: async () => {
            console.log(exercises)
            return Object.keys(exercises).map((muscle, index) => {
                return { id: muscle, name: muscle }
            })

        },
        getExcercises: async (muscleId) => {
            console.log(exercises[muscleId])
            return exercises[muscleId].map(({ name, link }, index) => {
                return { id: index, name, muscleId: muscleId, link }
            })
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