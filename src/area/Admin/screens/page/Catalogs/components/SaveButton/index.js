import { memo } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Save } from '@mui/icons-material';
import { useInitLoading } from '~/hooks/Loading';
function AddComponent({ loading, onClick, ...props }) {
  const [isLoading, handleLoading] = useInitLoading();
  return (
    <Tooltip title={'Lưu'} placement="top" arrow>
      <IconButton
        color="inherit"
        size="large"
        disabled={loading || isLoading}
        onClick={() => {
          if (onClick) {
            const ourLoading = handleLoading();
            onClick(ourLoading);
          }
        }}
        {...props}
      >
        <Save />
      </IconButton>
    </Tooltip>
  );
}
export default memo(AddComponent);
