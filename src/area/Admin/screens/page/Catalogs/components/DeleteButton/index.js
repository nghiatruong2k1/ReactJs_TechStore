import { memo} from 'react';
import { RestoreFromTrash, DeleteForeverRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
function TrashButton({ isTrash, loading, onClick, onDelete }) {
  const [isLoading, handleLoading] = useInitLoading();
  return(
    <>
      <Tooltip
        title={(isTrash && 'Khôi phục') || 'Xóa tạm'}
        placement="top"
        arrow
      >
        <span>
          <IconButton
            disabled={loading || isLoading}
            color="warning"
            onClick={() => {
              if(onClick){
                const ourLoading = handleLoading();
                onClick(ourLoading);
              }
            }}
            size="large"
          >
            {(isTrash && <RestoreFromTrash />) || <DeleteForeverRounded />}
          </IconButton>
        </span>
      </Tooltip>
      {isTrash && (
        <Tooltip title={'Xóa vĩnh viễn'} placement="top" arrow>
          <span>
            <IconButton
              disabled={loading || isLoading}
              color="error"
              onClick={() => {
                if(onDelete){
                  const ourLoading = handleLoading();
                  onDelete(ourLoading);
                }
              }}
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
