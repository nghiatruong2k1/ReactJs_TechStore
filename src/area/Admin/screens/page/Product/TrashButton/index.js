import { memo } from 'react';
import clsx from 'clsx';
import { RestoreFromTrash, DeleteForeverRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function TrashButton({ inTrash, loading ,onClick}) {
  return (
    <Tooltip title={(inTrash && 'Danh sách') || 'Thùng rác'} placement='top' arrow>
      <span>
        <IconButton disabled={loading} color='inherit' onClick={onClick}>
          {(inTrash && <RestoreFromTrash />) || <DeleteForeverRounded />}
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(TrashButton);
