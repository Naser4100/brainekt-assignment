// Import Library/package
import React from 'react';

// Material-ui components imports
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

// Material-ui icon imports
import DashboardIcon from '@material-ui/icons/Dashboard';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    
  </div>
);
