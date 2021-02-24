
import {
  Typography,
  Card,
  CardContent,
  FormControl,
  FormGroup
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

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
