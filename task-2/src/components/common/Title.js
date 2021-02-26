// Library/Package imports
import React from 'react';

// Material-ui import
import { Typography } from '@material-ui/core';

// Component main function
// This is a reusable component, so that other components can use it
const Title = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      
      {/* This props.children will be text to shown in here */}
      {props.children}
    </Typography>
  );
}

export default Title;
