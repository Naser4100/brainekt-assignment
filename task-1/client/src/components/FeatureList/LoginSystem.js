import { useState, useContext } from 'react';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Slider,
  Card,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CostContext from '../../context/costContext/costContext'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  card: {
    marginBottom: 12,
  }
}));

const LoginSystem = ({featureData}) => {
  const { addFeature, featureList } = useContext(CostContext);

  const classes = useStyles();
  // const addDataToCostArray = event => {
  //   let newArray = [...arr, { fname: event.target.name, featureValue: +event.target.value, id: event.target.id }];
  //   if (arr.some(feature => feature.id === event.target.id)) {
  //     newArray = newArray.filter(feature => feature.id !== event.target.id);
  //   }
  //   setArr(newArray);
  //   console.log(newArray);
  // };


  const handleInputChange = (event) => {
    addFeature(event);
  }

  return (
    <Card variant='outlined' className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Login System
        </Typography>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>

            {/* Email/password login */}
            <FormControlLabel
              control={
                <Checkbox
                  id='email_pass_login'
                  value={featureData.emailPasswordLogin.price}
                  onChange={handleInputChange}
                  name={featureData.emailPasswordLogin.name}
                />
              }
              label={featureData.emailPasswordLogin.name}
            />

            {/* Social Login */}
            <FormControlLabel
              control={
                <Checkbox
                  id='social_login'
                  value={featureData.socialLogin.price}
                  onChange={handleInputChange}
                  name={featureData.socialLogin.name}
                  />
                }
              label={featureData.socialLogin.name}
            />

          </FormGroup>
        </FormControl>
      </CardContent>
    </Card>
  )
}

export default LoginSystem;
