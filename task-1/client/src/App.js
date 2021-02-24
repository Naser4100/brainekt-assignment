// Library 
import {
  Container,
  Grid,
  Paper
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// Components files
import FeatureList from './components/FeatureList';
import Cost from './components/Cost';

// Context files
import CostState from './context/costContext/costState';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <CostState>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>

            {/* All the feature list goes to this grid*/}
            <Grid item xs={6}>
              <Paper elevation={3} className={classes.paper}><FeatureList/></Paper>
            </Grid>

            {/* Cost component goes to this grid*/}
            <Grid item xs={6}>
              <Paper elevation={3} className={classes.paper}><Cost/></Paper>
            </Grid>

          </Grid>
        </Container>
      </div>
    </CostState>
  );
}

export default App;
