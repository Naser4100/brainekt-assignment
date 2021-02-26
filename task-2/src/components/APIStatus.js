// Library/Package imports
import React, { useEffect } from 'react';

// Redux hooks library for extracting state and dispatching action
import { useDispatch, useSelector } from 'react-redux';

// Action files
import { getAPIStatusAction } from '../redux/actions/utilityAction';

// Material-ui package
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';

// Reusable common component
import Title from './common/Title';
import ProgressBarCircle from './common/ProgressBarCircle';

// Custom CSS style
const useStyles = makeStyles({
  chip: {
    margin: '2px'
  }
});

// Component main function
const APIStatus = () => {
  const classes = useStyles();

  // This hooks dispatches an action for changing global state
  const dispatch = useDispatch();

  // This hooks extract specific state from global redux store
  const apiStatus = useSelector((state) => state.utilityState.apiStatus);

  useEffect(() => {
    // Dispatching an action for getting API Status and add that this to global state
    dispatch(getAPIStatusAction());

    // Put apiStatus for the dependency so that whenever apiStatus update this component will re-render and change will appear
    // eslint-disable-next-line
  }, [apiStatus])

  return (
    apiStatus ? (
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
    ) : <ProgressBarCircle/>
  );
}
export default APIStatus;
