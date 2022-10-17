import { memo } from 'react';
import clsx from 'clsx';
import { Skeleton, Typography } from '@mui/material';
import { orderModel } from '~/models/order';
function IdOrderComponent({loading,id}) {
  return (
    <Typography component="b">
      {(true && `${orderModel.Id.displayName}: ${id ?? 0}`) || (
        <Skeleton  />
      )}
    </Typography>
  );
}
export default memo(IdOrderComponent);
