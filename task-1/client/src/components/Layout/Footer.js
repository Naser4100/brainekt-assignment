// Library package
import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

// Method for footer copyright info
const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://naser.netlify.app/">
        Abdullah Naser
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>
      <Box pb={4}>
        <Copyright />
      </Box>
    </div>
  )
}

export default Footer
