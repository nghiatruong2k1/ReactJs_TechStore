import { memo } from 'react';
import { DeleteSweep } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function ExportButton({ ...props }) {
  return (
    <Tooltip title="Export" placement="top" arrow>
      <span>
        <IconButton color='inherit'>
          <DeleteSweep />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(ExportButton);
