import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import WorkoutSelectionTableRow from './WorkoutSelectionTableRow'

function WorkoutSelectionTable({ name, onSelectionChange }) {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => { onSelectionChange(workouts); }, [workouts])

  const handleSelectionChange = (id, updatedWorkout) => {
    setWorkouts(workouts =>
      workouts.map(workout => (workout.id === id ? { ...workout, ...updatedWorkout } : workout))
    );

  };

  return (
    <TableContainer component={Paper}>

      <Typography variant='h5' sx={{ m: 1, textAlign: "center" }}>Day {name}</Typography>
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
            onSelectionChange={updatedWorkout => handleSelectionChange(workout.id, updatedWorkout)} />)}
        </TableBody>
      </Table>
      <Button variant='text' fullWidth onClick={() => { setWorkouts(workouts => [...workouts, { id: Date.now() }]) }}>Add row</Button>

    </TableContainer>
  )
}

export default WorkoutSelectionTable
