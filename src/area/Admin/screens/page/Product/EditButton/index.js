import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAction, routersAdmin } from '~/config/Router';
function AddComponent({id}) {
  return (
    <Tooltip title={'Sửa sản phẩm'} placement="top" arrow>
      <IconButton
        color="inherit"
        component={Link}
        size='large'
        to={getAction(routersAdmin.routers.product.update, {id}, routersAdmin.area)}
      >
        <span className="fas fa-edit" />
      </IconButton>
    </Tooltip>
  );
}
export default memo(AddComponent);
