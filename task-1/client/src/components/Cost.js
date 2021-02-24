import React, { useContext } from 'react';

// Material-UI library
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardContent,
} from '@material-ui/core';

// Cost context for accessing featureList 
import CostContext from '../context/costContext/costContext';

// Custom CSS
const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "4rem",
    minWidth: "275"
  },
});

// Main cost component
const Cost = () => {
  const classes = useStyles();

  const { featureList, totalCost } = useContext(CostContext);
  
  return (

    <Card className={classes.root}>
      <CardContent>
        <TableContainer >
          <Table aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature Name</strong>
                </TableCell>
                <TableCell><strong>Price</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {featureList.length && featureList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.featureName}</TableCell>
                  <TableCell colSpan={3}>{row.featurePrice}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell><strong>Total</strong></TableCell>
                <TableCell><strong>{totalCost}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
export default Cost;
