import { Box, Button, Divider, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import DeleteButton from '../../DeleteButton';
import WorkoutSelectionTableRow from './WorkoutSelectionTableRow'

function WorkoutSelectionTable({ name, onSelectionChange, defaultWorkouts = [], onDelete }) {
  const [workouts, setWorkouts] = useState(defaultWorkouts)

  //useEffect(() => { setWorkouts(defaultWorkouts) }, [defaultWorkouts])

  const handleSelectionChange = (id, updatedWorkout) => {
    console.log(updatedWorkout, id, "updatedWorkout")
    const newWorkouts = workouts.map(workout => (workout.id === id ? { ...workout, ...updatedWorkout } : workout))
    setWorkouts(newWorkouts);
    onSelectionChange(newWorkouts);
  };

  const handleDelete = (id) => {
    const fileredWorkouts = workouts.filter(w => w.id !== id)
    setWorkouts(fileredWorkouts)
    onSelectionChange(fileredWorkouts)
  }

  return (
    <TableContainer component={Paper} elevation={5} sx={{ width: 1 }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center' width={1}>
        <Box />
        <Typography variant='h5' sx={{ p: 1, width: 1, textAlign: 'center' }}>{name} </Typography>
        <DeleteButton onClick={onDelete} />
      </Stack>
      <Divider />
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Muscle</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="h6">Excercise</Typography>
            </TableCell>

            <TableCell padding='checkbox' >
              {/* <Typography variant="h6">Video</Typography> */}
            </TableCell>

            <TableCell padding='checkbox'>
              {/* <Typography variant="h6">Delete</Typography> */}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {workouts.map(workout => <WorkoutSelectionTableRow
            key={workout.id}
            onSelectionChange={updatedWorkout => handleSelectionChange(workout.id, updatedWorkout)}
            onDelete={() => handleDelete(workout.id)}
            defaultMuscle={workout.muscle}
            defaultExcer={workout.excer}
          />)}
        </TableBody>
      </Table>
      <Button variant='text' fullWidth onClick={() => { setWorkouts(workouts => [...workouts, { id: Date.now() }]) }}>Add excercise</Button>
    </TableContainer >
  )
}

export default WorkoutSelectionTable
