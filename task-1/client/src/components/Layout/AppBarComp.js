import React from 'react';

// material-UI library
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Custom CSS
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarComp = () => {

  // Initialize custom CSS 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Website feature cost calculator
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarComp;
