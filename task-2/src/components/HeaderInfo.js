import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// Action files
import { getAccountInfoAction, getHTTPHeaderAction } from '../redux/actions/utilityAction'

// Material-ui package
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Chip
} from '@material-ui/core';

// Local component
import Title from './common/Title';

const useStyles = makeStyles({
  depositContext: {
    
  },
  chip: {
    margin: '2px'
  }
});

// Component function
const HeaderInfo = () => {

  const dispatch = useDispatch(); // This hooks dispatches an action for changing global state
  const headers = useSelector((state) => state.utilityState.headers); // Same thing as above. I'm extracting different value from another state

  useEffect(() => {
    dispatch(getHTTPHeaderAction()); // Dispatching and action for getting ip and change global state according to the API response
  }, [headers])

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Header</Title>

      {/* Ip */}
      <Typography component="p" variant="h6">
        Host: {headers&& headers.Host}
      </Typography>

      <Typography color="textSecondary">
        <strong>Origin:</strong> {headers&& headers.Origin}
      </Typography>

      <Typography color="textSecondary">
        <strong> Connection:</strong> {headers&& headers.Connection}
      </Typography>

      <Typography color="textSecondary">
      <strong> Accept:</strong> {headers&& headers.Accept}
      </Typography>

    </React.Fragment>
  );
}
export default HeaderInfo;