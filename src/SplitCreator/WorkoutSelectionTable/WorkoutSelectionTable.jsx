import { Button, Divider, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import WorkoutSelectionTableRow from './WorkoutSelectionTableRow'

function WorkoutSelectionTable({ name, onSelectionChange, defaultWorkouts = [] }) {
  const [workouts, setWorkouts] = useState(defaultWorkouts)

  //useEffect(() => { setWorkouts(defaultWorkouts) }, [defaultWorkouts])

  const handleSelectionChange = (id, updatedWorkout) => {
    console.log(updatedWorkout, id, "updatedWorkout")
    const newWorkouts = workouts.map(workout => (workout.id === id ? { ...workout, ...updatedWorkout } : workout))
    setWorkouts(newWorkouts);
    onSelectionChange(newWorkouts);
  };

  return (
    <TableContainer component={Paper} elevation={5}>
      <Typography variant='h5' sx={{ p: 1, textAlign: "center" }}>{name}</Typography>
      <Divider />
      <Table style={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Primary Muscle</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="h6">Excercise</Typography>
            </TableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          {workouts.map(workout => <WorkoutSelectionTableRow
            key={workout.id}
            onSelectionChange={updatedWorkout => handleSelectionChange(workout.id, updatedWorkout)}
            defaultMuscle={workout.muscle}
            defaultExcer={workout.excer}
          />)}
        </TableBody>
      </Table>
      <Button variant='text' fullWidth onClick={() => { setWorkouts(workouts => [...workouts, { id: Date.now() }]) }}>Add excercise</Button>
    </TableContainer>
  )
}

export default WorkoutSelectionTable
