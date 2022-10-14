import { memo } from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Skeleton,
  Link,
} from '@mui/material/';
import { orderModel } from '~/models/order';
const InfoItem = memo(({ loading, title, value }) => {
  return (
    <ListItem disablePadding>
      <ListItemText>{`${title ?? ''}:`}</ListItemText>
      <ListItemText align="right">
        {!loading ? value : <Skeleton className="skeleton" />}
      </ListItemText>
    </ListItem>
  );
});
function OrderInfo({
  loading,
  FirstName,
  LastName,
  Email,
  Phone,
  Location,
  ...props
}) {
  return (
    <Grid {...props}>
      <List>
        <ListSubheader>Thông tin khách hàng:</ListSubheader>
        <InfoItem
          loading={loading}
          title={'Tên khách hàng'}
          value={`${FirstName ?? ''} ${LastName ?? ''}` || ''}
        />
        <InfoItem
          loading={loading}
          title={orderModel.Email.displayName}
          value={
            <Link
              underline="hover"
              href={(Email && `mailto: ${Email}`) ?? '/404'}
            >
              {Email}
            </Link>
          }
        />
        <InfoItem
          loading={loading}
          title={orderModel.Phone.displayName}
          value={Phone}
        />
        <InfoItem
          loading={loading}
          title={orderModel.Location.displayName}
          value={Location}
        />
      </List>
    </Grid>
  );
}
export default memo(OrderInfo);
