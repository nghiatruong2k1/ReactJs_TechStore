import { memo, useContext, useState, useMemo } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function PublicButton({ isPublic, loading }) {
  const [isLoading, setLoading] = useState(false);
  return (
    <Tooltip
      title={(isPublic && 'Công khai') || 'Riêng tư'}
      placement="top"
      arrow
    >
      <span>
        <IconButton disabled={loading || isLoading} color="info"  size='large'>
          {(isPublic && <Visibility />) || <VisibilityOff />}
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(PublicButton);
