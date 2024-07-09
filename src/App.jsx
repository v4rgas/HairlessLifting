import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import ExcerSelector from './ExcerSelector'
import MuscleSelector from './MuscleSelector'
import TypeSelector from './TypeSelector'

function App() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Primary Muscle</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Type</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Excercise</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Sets</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>
              <MuscleSelector handleChange={(e) => { console.log(e.target.value) }} />
            </TableCell>
            <TableCell>
              <TypeSelector handleChange={(e) => { console.log(e.target.value) }} />
            </TableCell>
            <TableCell>
              <ExcerSelector handleChange={(e) => { console.log(e.target.value) }} />
            </TableCell>
            <TableCell>
              <Typography variant="body1">42</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant="body1">Jane Doe</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">39</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">39</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">39</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default App
