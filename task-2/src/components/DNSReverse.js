// Library/Package imports
import React, { useEffect, useState } from 'react';

// Import custom react-redux hooks
import { useDispatch, useSelector } from 'react-redux';

// Action files
import { reverseDNSAction } from '../redux/actions/utilityAction';

// Material-ui package
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  Button
} from '@material-ui/core';

// Local component
import Title from './common/Title';

// Custom CSS style
const useStyles = makeStyles({
  chip: {
    margin: '2px'
  },
  marginTopStyle: {
    marginTop: '5px'
  },

});

// Component main function
const DNSReverse = () => {
  const classes = useStyles();

  // This hooks dispatches an action for changing global state
  const dispatch = useDispatch(); 

  // Same thing as above. I'm extracting different value from another state
  const reverseDNS = useSelector((state) => state.utilityState.reverseDNS); 

  // State for storing hostname input
  const [ip, setIp] = useState('');

  // Button disable state
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    
    // Added reverseDNS to useEffect dependency array, so if this value changes it will trigger component re-render
  }, [reverseDNS])
  
  const submitHandler = () => {
    // This will set button disable status to true so that it will not sending accidental click
    // OR restrict sending more than one request at a particular time
    setButtonState(true);

    // Dispatching and action for resolve user-entered hostname
    dispatch(reverseDNSAction(ip));

    // After 3 seconds of submitting this form submit button disable status will turn back to false. 
    // so that we can submit another form data
    setTimeout(() => {
      setButtonState(false)
    }, 3000);
  }

  return (
    <React.Fragment>
      <Title>DNS Reverse</Title>

      <Typography component="p" variant="h6">
        Enter IP address to reverse
      </Typography>

      <TextField
        className={classes.marginTopStyle}
        label="Enter hostname"
        id="dns_reverse"
        variant="outlined"
        size="small"
        
        onChange={(e) => setIp(e.target.value)}
      />
      <Button
        className={classes.marginTopStyle}
        variant="contained"
        disabled={ ip === '' || buttonState ? true: false}
        size="small"
        color="primary"
        onClick={submitHandler}>
        Reverse
      </Button>

      <Typography color="secondary" className={classes.marginTopStyle}>
        <strong>
          Hostname: {reverseDNS && Object.values(reverseDNS)[0] !== null ? Object.values(reverseDNS)[0] : 'Failed to reverse'}
        </strong>
      </Typography>

    </React.Fragment>
  );
}
export default DNSReverse;
