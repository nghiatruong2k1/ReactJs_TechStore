import { memo } from 'react';
import { Grid } from '@mui/material/';
import { AccorCard } from '~/components';
import OrdersStatis from './screens/OrdersStatis';
import UserStatis from './screens/UserStatis';
import CardStatistic from './components/CardStatistic';
function Statistics({ ...props }) {
  return (
    <AccorCard title="Thống kê" open={true} {...props}>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <OrdersStatis xs={12} sm={6} lg={3} xl={4} />
        <UserStatis xs={12} sm={6} lg={3} xl={4} />
        <CardStatistic title="Lượt truy cập"  icon={<span className='fas fa-eye' />}xs={12} sm={6} lg={3} xl={4} />
        <CardStatistic title="Phản hồi" icon={<span className='fas fa-comments' />} xs={12} sm={6} lg={3} xl={4} />
      </Grid>
    </AccorCard>
  );
}
export default memo(Statistics);
