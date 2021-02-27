// Import react hooks
import { useContext } from 'react';

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

  container: {
    maxHeight: 550,
  },
});

// Main cost component
const Cost = () => {
  const classes = useStyles();

  // Destructuring featureList state
  const { featureList } = useContext(CostContext);

  // Removing duplicate feature from featureList
  let newData = featureList.filter((feature, index, array)=>array.findIndex(currElem=>(currElem.id === feature.id))===index);

  // Calculating total price for selected features
  const totalPrice = newData.reduce((acc, curr) => curr.featurePrice + acc, 0);

  // Generating rows based on the feature price that are greater than 0.
  // because 0 means user is not interested to buy so, we don't want it to render in the table
  // eslint-disable-next-line
  const rows = newData.map(row => {
    if(row.featurePrice > 0) {
      return (
        <TableRow key={row.id}>
        <TableCell>{row.featureName}</TableCell>
        <TableCell colSpan={3}>${row.featurePrice}</TableCell>
      </TableRow>
      );
    }
  });

  return (

    <Card className={classes.root}>

      <CardContent className={classes.cardContent}>

        <TableContainer className={classes.container}>

          <Table stickyHeader  aria-label="spanning table" >
            <TableHead >
              <TableRow>
                <TableCell>
                  <strong>Feature Name</strong>
                </TableCell>
                <TableCell><strong>Price</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {rows&& rows}

              <TableRow>
                <TableCell><strong>Total</strong></TableCell>
                <TableCell><strong>${totalPrice}</strong></TableCell>
              </TableRow>

            </TableBody>
          </Table>

        </TableContainer>

      </CardContent>

    </Card>
  );
}
export default Cost;
