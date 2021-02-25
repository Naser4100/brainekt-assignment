import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// Action files
import { getIPInfoAction } from '../redux/actions/ipAction'
import { getIpAction } from '../redux/actions/utilityAction'

// Material-ui package
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Link,
  Chip
} from '@material-ui/core';

// Local component
import Title from './common/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    
  },
  chip: {
    margin: '2px'
  }
});

// Component function
const IPInfo = () => {

  const dispatch = useDispatch(); // This hooks dispatches an action for changing global state
  const ipInfo = useSelector((state) => state.ipState.ipInfo); // This hooks extract specific state from global redux store
  const ip = useSelector((state) => state.utilityState.ip); // Same thing as above. I'm extracting different value from another state

  useEffect(() => {
    dispatch(getIpAction()); // Dispatching and action for getting ip and change global state according to the API response
    dispatch(getIPInfoAction(ip)); // Dispatching another action for getting ip information and change global state according to the API response
  }, [ip])

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>IP information</Title>

      {/* Ip */}
      <Typography component="p" variant="h4">
        IP: {ipInfo&& ipInfo.ip}
      </Typography>

      {/* Available ports */}
      <Typography color="textSecondary">
        <strong>Available ports:</strong> {ipInfo&& ipInfo.ports.map((port, i) => (
          <Chip
          key={i}
          className={classes.chip}
          label={port}
          variant="outlined"
        />
        ))}
      </Typography>

      {/* Ip country name */}
      <Typography color="textSecondary" className={classes.depositContext}>
        <strong>Country:</strong> {ipInfo&& ipInfo.country_name}, <strong>Country code:</strong> {ipInfo&& ipInfo.country_code}
      </Typography>

      {/* Ip city */}
      <Typography color="textSecondary" className={classes.depositContext}>
        <strong>City:</strong> {ipInfo&& ipInfo.city}
      </Typography>
      
      {/* Ip organization */}
      <Typography color="textSecondary" className={classes.depositContext}>
      <strong>Organization:</strong> {ipInfo&& ipInfo.org}
      </Typography>

      {/* Internet service provider */}
      <Typography color="textSecondary" className={classes.depositContext}>
      <strong>ISP:</strong> {ipInfo&& ipInfo.isp}
      </Typography>

      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
export default IPInfo;