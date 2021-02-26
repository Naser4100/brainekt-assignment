// Imports React hooks
import React, { useState, useContext } from 'react';

// Import material-ui
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button } from '@material-ui/core';

// Reusable component
import CardLayout from './common/CardLayout'

// Import cost context for extracting state and action
import CostContext from '../context/costContext/costContext';

// Custom CSS
const useStyles = makeStyles({
  textField: {
    marginBottom: "5px",
  },
});

// Component main function
const UserForm = () => {
  const classes = useStyles();

  const { sendEmail } = useContext(CostContext)

  // User form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Dynamically disable button state
  const [submitButtonState, setSubmitButtonState] = useState(false);

  // Submits form data
  const submitHandler = () => {
    // This will set button disable status to true so that it will not sending accidental click
    setSubmitButtonState(true); 

    // Calling email sender action this will also save user data to database
    sendEmail({name, email, phone});

    // After 7 seconds of submitting this form submit button disable status will turn back to false. 
    // so that we can submit another form data
    setTimeout(() => {
      setSubmitButtonState(false)
    }, 7000);
  }

  return (
    // CardLayout is reusable component 
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
          // Handling button disable status when it's needs to be true of false
          disabled={ name === '' || email === '' || phone === '' || submitButtonState ? true: false }
          size="small"
          color="primary"
          onClick={submitHandler}>
          Submit
      </Button>

    </CardLayout>
  );
}

export default UserForm;
