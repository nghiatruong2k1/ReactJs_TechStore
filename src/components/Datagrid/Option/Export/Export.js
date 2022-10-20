import { memo } from 'react';
import { FileUploadRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function ExportButton() {
  return (
    <Tooltip title="Export" placement="top" arrow>
      <span>
        <IconButton color='inherit'>
          <FileUploadRounded />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(ExportButton);
