import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@material-ui/core';

import CostContext from '../context/costContext/costContext';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const Cost = () => {
  const classes = useStyles();

  const { featureList, totalCost } = useContext(CostContext);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Feature Name</strong>
            </TableCell>
            <TableCell><strong>Price</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {featureList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.featureName}</TableCell>
              <TableCell colSpan={3}>{row.featurePrice}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell><strong>Total</strong></TableCell>
            <TableCell><strong>{45}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Cost;
