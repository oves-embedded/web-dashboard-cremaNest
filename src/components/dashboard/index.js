import React from 'react';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import SalesChart from './Sales/SalesChart';
import AccountGraph from './Account/AccountGraph';
import Earning from './Earning/Earning';
import Gauge from './Gauge/Gauge';

const Dashboards = () => {
  return (
    <>
      <AppGridContainer>
        <Grid item xs={6} md={6}>
          <AccountGraph />
        </Grid>
        <Grid item xs={6} md={6}>
          <Gauge />
        </Grid>
        <Grid item xs={6} md={6}>
          <Gauge />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Dashboards;
