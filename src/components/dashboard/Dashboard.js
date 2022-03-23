import React from 'react';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import SalesChart from './SalesChart';
import AccountGraph from './AccountGraph';
import Earning from './Earning';
import Gauge from './Gauge';
import {Box} from '@mui/material';
import AppPageMeta from '../../@crema/core/AppPageMeta';

const Dashboard = () => {
  return (
    <>
      <AppPageMeta />
      <h2>Dashboard</h2>
      <Box sx={{my: 2}}>
        <Earning />
      </Box>
    </>
  );
};

export default Dashboard;
