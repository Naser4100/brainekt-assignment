import React, { useEffect } from 'react';

// Redux hooks library for extracting state and dispatching action
import { useDispatch, useSelector } from 'react-redux';

// Action files
import { getAPIStatusAction } from '../redux/actions/utilityAction';

// Material-ui package
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Chip
} from '@material-ui/core';

// Reusable common component
import Title from './common/Title';

// Custom CSS style
const useStyles = makeStyles({
  depositContext: {
    
  },
  chip: {
    margin: '2px'
  }
});

// Component function
const APIStatus = () => {

  const dispatch = useDispatch(); // This hooks dispatches an action for changing global state
  const apiStatus = useSelector((state) => state.utilityState.apiStatus); // Same thing as above. I'm extracting different value from another state

  useEffect(() => {
    dispatch(getAPIStatusAction()); // Dispatching and action for getting ip and change global state according to the API response
    // Dispatching another action for getting ip information and change global state according to the API response
  }, [apiStatus])// Put ip for the dependency so that whenever ip update this component will re-render and change will appear

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>API status</Title>
      {/* API plan */}
      <Typography color="textSecondary" className={classes.depositContext}>
        <strong>Plan:</strong> {apiStatus&& apiStatus.plan}
      </Typography>

      {/* usage limit */}
      <Typography color="textSecondary">
        <strong>Scan credits:</strong> {apiStatus&& apiStatus.scan_credits}
      </Typography>

      <Typography color="textSecondary">
        <strong> Query credits:</strong> {apiStatus&& apiStatus.query_credits}
      </Typography>

      <Typography color="textSecondary">
        <strong> Monitored IP's:</strong> {apiStatus&& apiStatus.monitored_ips}
      </Typography>

    </React.Fragment>
  );
}
export default APIStatus;