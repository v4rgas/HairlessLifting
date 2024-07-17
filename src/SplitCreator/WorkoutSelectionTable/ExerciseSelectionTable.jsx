import { Box, Button, Divider, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import DeleteButton from '../../DeleteButton';
import ExerciseSelectionTableRow from './ExerciseSelectionTableRow'

function ExerciseSelectionTable({ name, onSelectionChange, defaultExercises = [], onDelete }) {
  const [exercises, setExercises] = useState(defaultExercises)


  const handleSelectionChange = (id, updatedExercise) => {
    console.log(updatedExercise, id, "updatedExercise")
    const newExercises = exercises.map(exercise => (exercise.id === id ? { ...exercise, ...updatedExercise } : exercise))
    setExercises(newExercises);
    onSelectionChange(newExercises);
  };

  const handleDelete = (id) => {
    const filteredExercises = exercises.filter(w => w.id !== id)
    setExercises(filteredExercises)
    onSelectionChange(filteredExercises)
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
              <Typography variant="h6">Movement</Typography>
            </TableCell>
            <TableCell width={100}>
              <Typography textOverflow={"wrap"} variant="h6">Actions</Typography>
            </TableCell>


          </TableRow>
        </TableHead>

        <TableBody>
          {exercises.map(workout => <ExerciseSelectionTableRow
            key={workout.id}
            onSelectionChange={updatedWorkout => handleSelectionChange(workout.id, updatedWorkout)}
            onDelete={() => handleDelete(workout.id)}
            defaultMuscle={workout.muscle}
            defaultMovement={workout.movement}
          />)}
        </TableBody>
      </Table>
      <Button variant='text' fullWidth onClick={() => { setExercises(exercises => [...exercises, { id: Date.now() }]) }}>Add exercise</Button>
    </TableContainer >
  )
}

export default ExerciseSelectionTable
