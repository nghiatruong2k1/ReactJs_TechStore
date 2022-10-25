import { memo, useContext, useState, useMemo, useCallback } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
function PublicButton({ isPublic, loading, onClick }) {
  const [isLoading, handleLoading] = useInitLoading();
  return (
    <Tooltip
      title={(isPublic && 'Công khai') || 'Riêng tư'}
      placement="top"
      arrow
    >
      <span>
        <IconButton
          disabled={loading || isLoading}
          color="info"
          size="large"
          onClick={() => {
            if (onClick) {
              const ourLoading = handleLoading();
              onClick(ourLoading);
            }
          }}
        >
          {(isPublic && <Visibility />) || <VisibilityOff />}
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(PublicButton);
