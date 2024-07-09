import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import ExcerSelectionTableRow from './ExcerSelectionTableRow'

function ExcerSelectionTable({ name, onSelectionChange }) {
  const [selection, setSelection] = useState({})
  const [excercises, setExcercises] = useState([])

  useEffect(() => {
    setSelection(selection => ({ ...selection, id: name }))
  }, [name])

  const updateSelection = () => {
    onSelectionChange(selection)
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant='h3'>Day {name}</Typography>
      <Table>
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
          {excercises.map(excercise => <ExcerSelectionTableRow key={excercise.id} />)}
        </TableBody>
      </Table>
      <Button variant='text' fullWidth onClick={() => { setExcercises(excercises => [...excercises, {}]) }}>Add row</Button>

    </TableContainer>
  )
}

export default ExcerSelectionTable
