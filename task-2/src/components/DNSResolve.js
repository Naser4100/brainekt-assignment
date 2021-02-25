import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// Action files
import { resolveDNSAction } from '../redux/actions/utilityAction';

// Material-ui package
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  Button
} from '@material-ui/core';

// Local component
import Title from './common/Title';

const useStyles = makeStyles({
  chip: {
    margin: '2px'
  },
  marginTopStyle: {
    marginTop: '5px'
  },

});

// Component function
const IpLookup = () => {

  const dispatch = useDispatch(); // This hooks dispatches an action for changing global state
  const resolvedIP = useSelector((state) => state.utilityState.resolvedIP); // Same thing as above. I'm extracting different value from another state

  // State for storing hostname input
  const [hostName, setHostname] = useState('')

  useEffect(() => {
  }, [resolvedIP])
  
  const submitHandler = () => {
    dispatch(resolveDNSAction(hostName)); // Dispatching and action for getting ip and change global state according to the API response
    // console.log();
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>DNS Resolve</Title>

      {/* Host name */}
      <Typography component="p" variant="h6">
        Enter hostname to resolve
      </Typography>

      <TextField
        className={classes.marginTopStyle}
        label="Enter hostname"
        id="dns"
        variant="outlined"
        size="small"
        
        onChange={(e) => setHostname(e.target.value)}
      />
      <Button
        className={classes.marginTopStyle}
        variant="contained"
        disabled={ hostName === '' ? true: false}
        size="small"
        color="primary"
        onClick={submitHandler}>
        Resolve
      </Button>

      <Typography color="secondary" className={classes.marginTopStyle}>
        <strong>
          IP address: {resolvedIP && Object.values(resolvedIP)[0] !== null ? Object.values(resolvedIP)[0] : 'Invalid Hostname'}
        </strong>
      </Typography>

    </React.Fragment>
  );
}
export default IpLookup;