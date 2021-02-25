// Library 
import React from 'react'
import {
  Container,
  Grid,
  CssBaseline,
  Paper
} from '@material-ui/core';

// Component files
import FeatureList from './components/FeatureList';
import Cost from './components/Cost';
import UserForm from './components/UserForm';
import AppBarComp from './components/Layout/AppBarComp';


// Context files
import CostState from './context/costContext/costState';

// Main component
const App = () => {
  return (
    <CostState>
      <AppBarComp/>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6} md={7} lg={7}>
              <Grid container>
                <Grid item xs>
                  {/* Feature list component */}
                  <Paper style={{padding: '1rem'}} elevation={3}>
                    <UserForm/>
                    <FeatureList/>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={5}>
              {/* Cost component */}
              <Cost />
            </Grid>
            
          </Grid>
        </Container>
      </React.Fragment>
    </CostState>
  );
}

export default App;
