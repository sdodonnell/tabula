import { Drawer, Typography } from '@mui/material';
import type { NextPage } from 'next';

const Dashboard: NextPage = () => {
  return (
    <>
      <Typography variant="h2">Dashboard</Typography>
      <Drawer variant="permanent">
        <h1>Some text</h1>
        <h1>Some text</h1>
        <h1>Some text</h1>
        <h1>Some text</h1>
        <h1>Some text</h1>
      </Drawer>
    </>
  );
};

export default Dashboard;
