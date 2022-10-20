import { memo} from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
function AddComponent({title,...props}) {
  return (
    <Tooltip title={title || 'Thêm'} placement="top" arrow>
      <IconButton
        color="inherit"
        component={(props.to && Link) || 'span'}
        {...props}
      >
        <span className="fas fa-plus" />
      </IconButton>
    </Tooltip>
  );
}
export default memo(AddComponent);
