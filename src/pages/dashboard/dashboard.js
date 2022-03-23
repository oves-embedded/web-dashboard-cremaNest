import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Dashboard = asyncComponent(() => import('../../components/dashboard'));
export default AppPage(() => <Dashboard />);
