import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
import formatNumber from 'number-format.js';
function ItemQuantity({ loading, price }) {
  return (
    <Typography textAlign={'left'} component='small'>
      {(loading && <Skeleton variant="text" className="skeleton" />) ||
        `Giá: ${formatNumber("#,##0.# đ",price)}`}
    </Typography>
  );
}
export default memo(ItemQuantity);
