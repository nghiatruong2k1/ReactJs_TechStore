import { memo } from 'react';
import { Ver } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function ColumnButton() {
  return (
    <Tooltip title="Hiển thị" placement="top" arrow>
      <span>
        <IconButton color='inherit'>
          <FileUploadRounded />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(ColumnButton);
