import { memo } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from '@mui/material/';
import IdOrder from './IdOrder';
import DateOrder from './DateOrder';
import OptionOrder from './Option';
import OrderInfo from './Info';
import OrderDetail from './Detail';
import OrderProducts from './Products';
function OrderItem({
  loading,
  Id,
  CreateDate,
  StatusId,
  FirstName,
  LastName,
  Email,
  Phone,
  Location,
  TotalPrice,
  VoucherSale,
}) {
  return (
    <Card>
      <CardHeader
        title={<IdOrder id={Id} loading={loading} />}
        subheader={
          <>
            <DateOrder date={CreateDate} loading={loading} />
          </>
        }
        action={<OptionOrder status={StatusId} loading={loading} />}
      />
      <Divider />
      <Grid component={CardContent} container spacing={2}>
        <OrderInfo
          item
          xs={8}
          loading={loading}
          {...{ FirstName, LastName, Email, Phone, Location }}
        />
        <OrderDetail
          item
          xs={4}
          loading={loading}
          {...{ TotalPrice, VoucherSale }}
        />
      </Grid>
      <Divider />
      <CardContent>
        <OrderProducts loading={loading} OrderId={Id} />
      </CardContent>
      <Divider />
      <CardActions></CardActions>
      <div></div>
    </Card>
  );
}
export default memo(OrderItem);
