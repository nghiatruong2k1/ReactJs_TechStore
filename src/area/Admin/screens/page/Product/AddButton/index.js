import { memo} from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAction, routersAdmin } from '~/config/Router';
function AddComponent() {
  return (
    <Tooltip title={'Thêm sản phẩm'} placement="top" arrow>
      <IconButton
        color="inherit"
        component={Link}
        to={getAction(routersAdmin.routers.product.add, {}, routersAdmin.area)}
      >
        <span className="fas fa-plus" />
      </IconButton>
    </Tooltip>
  );
}
export default memo(AddComponent);
