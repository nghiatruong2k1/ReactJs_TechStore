import { memo, useEffect } from 'react';
import { Grid } from '@mui/material';
import NoteList from './NoteList';
import Statistics from './Statistics';
import ChartRegisters from './ChartRegisters';
import ChartOrders from './ChartOrders';
import { useHandleTitle } from '~/hooks/Title';
import { adminRouters } from '~/area/Admin/router';
function DashboardComponent() {
  const handleTitle = useHandleTitle();
  useEffect(()=>{
    //return handleTitle(adminRouters.dashboard.title)
  },[])
  return (
    <Grid container>
      <NoteList component={Grid} item xs={12} />
      <Statistics component={Grid} item xs={12} />
      <ChartRegisters component={Grid} item xs={12} />
      <ChartOrders component={Grid} item xs={12} />
    </Grid>
  );
}
export default memo(DashboardComponent);
