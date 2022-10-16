import { memo } from 'react';
import { Grid } from '@mui/material';
import NoteList from './NoteList';
import Statistics from './Statistics';
import ChartRegisters from './ChartRegisters';
import ChartOrders from './ChartOrders';
function DashBoardComponent() {
  return (
    <Grid container>
      <NoteList component={Grid} item xs={12} />
      <Statistics component={Grid} item xs={12} />
      <ChartRegisters component={Grid} item xs={12} />
      <ChartOrders component={Grid} item xs={12} />
    </Grid>
  );
}
export default memo(DashBoardComponent);
