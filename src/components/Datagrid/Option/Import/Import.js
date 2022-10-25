import { memo } from 'react';
import { FileUploadRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function ImportButton() {
  return (
    <Tooltip title="Import" placement="top" arrow>
      <span>
        <IconButton color='inherit'>
          <FileUploadRounded />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(ImportButton);
