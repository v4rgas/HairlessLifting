import { Box, Button, Divider, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1 }}>
        <Typography variant='h5' sx={{ textAlign: 'center', flexGrow: 1 }}>{name}</Typography>
        <DeleteButton onClick={onDelete} />
      </Box>
      <Divider />
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Muscle</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="h6">Exercise</Typography>
            </TableCell>
            <TableCell width={100}>
              <Typography textOverflow={"wrap"} variant="h6">Actions</Typography>
            </TableCell>


          </TableRow>
        </TableHead>

        <TableBody>
          {workouts.map(workout => <WorkoutSelectionTableRow
            key={workout.id}
            onSelectionChange={updatedWorkout => handleSelectionChange(workout.id, updatedWorkout)}
            onDelete={() => handleDelete(workout.id)}
            defaultMuscle={workout.muscle}
            defaultExer={workout.exer}
          />)}
        </TableBody>
      </Table>
      <Button variant='text' fullWidth onClick={() => { setWorkouts(workouts => [...workouts, { id: Date.now() }]) }}>Add exercise</Button>
    </TableContainer >
  )
}

export default WorkoutSelectionTable
