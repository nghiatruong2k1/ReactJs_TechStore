import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material';
import { orderModel } from '~/models/order';
import { formatDate } from '~/config/Format';
function DateOrderComponent({loading,date}) {
  return (
    <Typography component="b">
      {(true && `${orderModel.CreateDate.displayName}: ${formatDate(date)}`) || (
        <Skeleton  />
      )}
    </Typography>
  );
}
export default memo(DateOrderComponent);
