import { memo } from 'react';
import { AddCircleOutlineRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
function AddButton({ title, to }) {
  return (
    <Tooltip title={title ?? 'Add'} placement="top" arrow>
      <span>
        <IconButton
          color="inherit"
          component={(to && Link) || 'button'}
          to={to}
        >
          <AddCircleOutlineRounded />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(AddButton);
