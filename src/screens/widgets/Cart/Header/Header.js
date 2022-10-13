import { memo, useContext } from 'react';
import { CardHeader, Typography, IconButton, Tooltip } from '@mui/material/';
function CartHeader({ total,onClose }) {
  return (
    <CardHeader
      avatar={<span className="fa fa-shopping-cart" />}
      titleTypographyProps={{
        component: 'h5',
      }}
      title={'Giỏ hàng'}
      subheader={<Typography>{`Tổng cộng: ${total} sản phẩm`}</Typography>}
      action={
        <Tooltip arrow placement="top" title="Đóng">
          <IconButton color="error" size="large" onClick={onClose}>
            <span className="fa fa-times" />
          </IconButton>
        </Tooltip>
      }
	  sx={{py:0.5}}
    />
  );
}
export default memo(CartHeader);
