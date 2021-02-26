// Library/Package import
import React, { useEffect } from 'react';

// React-redux hooks import
import { useDispatch, useSelector } from 'react-redux';

// Action files
import { getHTTPHeaderAction } from '../redux/actions/utilityAction'

// Material-ui package
import { Typography } from '@material-ui/core';

// Reusable Local component
import Title from './common/Title';
import ProgressBarCircle from './common/ProgressBarCircle';


// Component function
const HeaderInfo = () => {

  // This hooks dispatches an action for changing global state
  const dispatch = useDispatch(); 

  // This hooks extract specific state from global redux store
  const headers = useSelector((state) => state.utilityState.headers);

  useEffect(() => {
    // Dispatching an action for getting HTTP-Header and add that HTTP-Header to global state
    dispatch(getHTTPHeaderAction());

    // Put headers for the dependency so that whenever headers update this component will re-render and change will appear
    // eslint-disable-next-line
  }, [headers])

  return (
    headers ? (
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
    ) : <ProgressBarCircle/>
  );
}
export default HeaderInfo;
