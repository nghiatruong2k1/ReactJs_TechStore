import { memo } from 'react';
import clsx from 'clsx';
import { RestoreFromTrash, DeleteForeverRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function TrashButton({ isTrash, loading, onClick }) {
  return (
    <>
      <Tooltip
        title={(isTrash && 'Khôi phục') || 'Xóa tạm'}
        placement="top"
        arrow
      >
        <span>
          <IconButton
            disabled={loading}
            color="warning"
            onClick={onClick}
            size="large"
          >
            {(isTrash && <RestoreFromTrash />) || <DeleteForeverRounded />}
          </IconButton>
        </span>
      </Tooltip>
      {isTrash && (
        <Tooltip
          title={'Xóa vĩnh viễn'}
          placement="top"
          arrow
        >
          <span>
            <IconButton
              disabled={loading}
              color="error"
              onClick={onClick}
              size="large"
            >
              {<DeleteForeverRounded />}
            </IconButton>
          </span>
        </Tooltip>
      )}
    </>
  );
}
export default memo(TrashButton);
