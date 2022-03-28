import React from 'react';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import SalesChart from './Sales/SalesChart';
import AccountGraph from './Account/AccountGraph';
import Earning from './Earning/Earning';
import Gauge from './Gauge/Gauge';
import {Box} from '@mui/material';
import AppPageMeta from '../../@crema/core/AppPageMeta';

const Dashboards = () => {
  return (
    <>
      <AppGridContainer>
        <h2>Sample Dashboard</h2>
        <Grid item xs={12} md={4}>
          {/** Stacked Area Chart */}
          <SalesChart />
        </Grid>
        <Grid item xs={12} md={4}>
          {/** Stacked Area Chart */}
          <AccountGraph />
        </Grid>
        <Grid item xs={12} md={4}>
          {/** Stacked Area Chart */}
          <Earning />
        </Grid>
        <Grid item xs={12} md={7}>
          <Gauge />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Dashboards;
