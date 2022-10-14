import { memo } from 'react';
import { Grid, List, ListItem, ListItemText, ListSubheader, Skeleton } from '@mui/material/';
import { orderModel } from '~/models/order';
import formatNumber from 'number-format.js';
const DetailItem = memo(({ loading, title, value }) => {
  return (
    <ListItem disablePadding>
      <ListItemText>{`${title ?? ''}:`}</ListItemText>
      <ListItemText align="right">
        {!loading ? value : <Skeleton className="skeleton" />}
      </ListItemText>
    </ListItem>
  );
});
function OrderDetail({ loading, TotalPrice,VoucherSale,...props }) {
  return (
    <Grid {...props}>
      <List>
        <ListSubheader>Chi tiết:</ListSubheader>
        <DetailItem
          loading={loading}
          title={orderModel.VoucherSale.displayName}
          value={formatNumber("#,##0.# %",VoucherSale)}
        />
        <DetailItem
          loading={loading}
          title={orderModel.TotalPrice.displayName}
          value={formatNumber("#,##0.# đ",TotalPrice)}
        />

      </List>
    </Grid>
  );
}
export default memo(OrderDetail);
