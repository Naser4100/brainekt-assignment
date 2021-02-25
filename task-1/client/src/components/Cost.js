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

  let newData = featureList.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
  const price = newData.reduce((acc, curr) => curr.featurePrice + acc, 0);

  const rows = newData.map(row => {
    if(row.featurePrice > 0) {
      return (
        <TableRow key={row.id}>
        <TableCell>{row.featureName}</TableCell>
        <TableCell colSpan={3}>{row.featurePrice}</TableCell>
      </TableRow>
      );
    }
  })

  console.log(newData)
  
  return (

    <Card className={classes.root}>
      <CardContent>
        <TableContainer >
          <Table aria-label="spanning table" >
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature Name</strong>
                </TableCell>
                <TableCell><strong>Price</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {newData.length && newData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.featureName}</TableCell>
                  <TableCell colSpan={3}>{row.featurePrice}</TableCell>
                </TableRow>
              ))} */}
              {rows}

              <TableRow>
                <TableCell><strong>Total</strong></TableCell>
                <TableCell><strong>{price}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
export default Cost;
