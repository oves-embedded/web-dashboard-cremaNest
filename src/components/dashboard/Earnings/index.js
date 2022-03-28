import React from 'react';
import AppCard from '@crema/core/AppCard';
import {Box} from '@mui/material/Box';
import EarningChart from './EarningChart';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Earning = ({data}) => {
  return (
    <AppCard
      title='Earninggs'
      sxStyle={{height: 1}}
      contentStyle={{display: 'flex', flexDirection: 'column'}}
    >
      <Box
        sx={{
          my: 3,
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          '& .recharts-wrapper': {
            width: '260px !important',
            height: '260px !important',
            alignSelf: 'center',
            '& .recharts-surface': {
              width: '260px !important',
              height: '260px !important',
            },
          },
        }}
      >
        <EarningChart data={data} />
      </Box>
    </AppCard>
  );
};

export default Earning;
