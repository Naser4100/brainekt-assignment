// Library import statement
import {
  Typography,
  Card,
  CardContent,
  FormControl,
  FormGroup
} from '@material-ui/core';

// makeStyle uses for using custom supported CSS to the component
import { makeStyles } from '@material-ui/core/styles';

// Custom CSS
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  card: {
    marginBottom: 12,
  }
}));

const CardLayout = (props) => {

  const classes = useStyles();
  return (
    // Using the custom CSS 
    <Card variant='outlined' className={classes.card}>
      <CardContent>

        <Typography variant="h5" component="h2">
          {props.sectionTitle}
        </Typography>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {props.children}
          </FormGroup>
        </FormControl>

      </CardContent>
    </Card>
  )
}

export default CardLayout;
