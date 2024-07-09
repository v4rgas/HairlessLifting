import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import WorkoutSelectionTableRow from './WorkoutSelectionTableRow'

function WorkoutSelectionTable({ name, onSelectionChange }) {
  const [selection, setSelection] = useState({})
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    setSelection(selection => ({ ...selection, id: name }))
  }, [name])

  const updateSelection = () => {
    onSelectionChange(selection)
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant='h3'>Day {name}</Typography>
      <Table style={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Primary Muscle</Typography>
            </TableCell>
            {/* <TableCell>
              <Typography variant="h6">Type</Typography>
            </TableCell> */}
            <TableCell>
              <Typography variant="h6">Excercise</Typography>
            </TableCell>
            {/* <TableCell>
              <Typography variant="h6">Sets</Typography>
            </TableCell> */}
          </TableRow>
        </TableHead>

        <TableBody>
          {workouts.map(excercise => <WorkoutSelectionTableRow key={excercise.id} onSelectionChange={console.log} />)}
        </TableBody>
      </Table>
      <Button variant='text' fullWidth onClick={() => { setWorkouts(workouts => [...workouts, {}]) }}>Add row</Button>

    </TableContainer>
  )
}

export default WorkoutSelectionTable
