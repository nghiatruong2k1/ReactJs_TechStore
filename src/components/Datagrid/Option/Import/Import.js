import { memo } from 'react';
import { FileDownloadRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function ImportButton({ ...props }) {
  return (
    <Tooltip title="Import" placement="top" arrow>
      <span>
        <IconButton color='inherit'>
          <FileDownloadRounded />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(ImportButton);
