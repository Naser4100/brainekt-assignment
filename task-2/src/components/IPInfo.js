import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// Action files
import { getIPInfoAction } from '../redux/actions/ipAction'
import { getIpAction } from '../redux/actions/utilityAction'

// Material-ui package
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Chip,
} from '@material-ui/core';

// Local component
import Title from './common/Title';
import ProgressBarCircle from './common/ProgressBarCircle';

const useStyles = makeStyles({
  chip: {
    margin: '2px'
  }
});

// Component function
const IPInfo = () => {
  const classes = useStyles();

   // This hooks dispatches an action for changing global state
  const dispatch = useDispatch();

  // This hooks extract specific state from global redux store
  const ipInfo = useSelector((state) => state.ipState.ipInfo);
  
  // Same thing as above. I'm extracting different value from another state
  const ip = useSelector((state) => state.utilityState.ip); 

  useEffect(() => {
     // Dispatching and action for getting ip and change global state according to the API response
    dispatch(getIpAction());

    // Dispatching another action for getting IP information and change global state according to the API response
    dispatch(getIPInfoAction(ip)); 

    // IP state is added to this dependency array so 
    // if it's value changes this trigger re-rendering of this components
    // eslint-disable-next-line
  }, [ip])


  return (
    ip ? (
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
          color="primary"
          size="small"
          key={i}
          className={classes.chip}
          label={port}
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
    </React.Fragment>
    ) :  <ProgressBarCircle/>
  );
}
export default IPInfo;