// Material-ui package
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Reusable component
import Title from './Title';

// Custom CSS
const useStyles = makeStyles({
  root: {
    margin: 'auto'
  },
});

const ProgressBarCircle = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <Title>Loading...</Title>
    </div>
  );
}

export default ProgressBarCircle;
