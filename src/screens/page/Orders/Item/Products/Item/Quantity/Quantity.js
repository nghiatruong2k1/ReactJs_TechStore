import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
function ItemQuantity({ loading, quantity }) {
  return (
    <Typography textAlign={'left'} component='small'>
      {(loading && <Skeleton variant="text" className="skeleton" />) ||
        `Số lượng: ${quantity ?? 0}`}
    </Typography>
  );
}
export default memo(ItemQuantity);
