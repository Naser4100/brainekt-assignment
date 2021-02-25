import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button } from '@material-ui/core';

import CardLayout from './common/CardLayout'

import CostContext from '../context/costContext/costContext';

// Custom CSS
const useStyles = makeStyles({
  textField: {
    marginBottom: "5px",
  },
});

const UserForm = () => {
  const classes = useStyles();

  const { sendEmail } = useContext(CostContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [submitButtonState, setSubmitButtonState] = useState(false);

  const submitHandler = () => {
    setSubmitButtonState(true);
    sendEmail({name, email, phone})
    setTimeout(() => {
      setSubmitButtonState(false)
    }, 5000);
  }

  return (
    <CardLayout sectionTitle='User Form'>
        <TextField
          className={classes.textField}
          label="Name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          size="small"
          variant="outlined"
        />

        <TextField
          className={classes.textField}
          label="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          variant="outlined"
        />

        <TextField
          className={classes.textField}
          label="Phone"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          size="small"
          variant="outlined"
        />

        <Button
          variant="contained"
          disabled={ name === '' || email === '' || phone === '' || submitButtonState ? true: false }
          size="small"
          color="primary"
          onClick={submitHandler}>
          Submit
      </Button>
    </CardLayout>
  )
}

export default UserForm
