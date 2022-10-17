import { memo} from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
function AddComponent({to}) {
  return (
    <Tooltip title={'Thêm sản phẩm'} placement="top" arrow>
      <IconButton
        color="inherit"
        component={Link}
        to={to || '/404'}
      >
        <span className="fas fa-plus" />
      </IconButton>
    </Tooltip>
  );
}
export default memo(AddComponent);
