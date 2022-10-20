import { memo, useContext, useState, useMemo, useCallback } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';
function PublicButton({ isPublic, loading, onClick }) {
  const [isLoading, setLoading] = useState(false);
  const handleClick = useCallback((click) => {
    if (click && typeof click === 'function') {
      setLoading(true);
      click(() => {
        setLoading(false);
      });
    }
  });
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
          onClick={()=>{handleClick(onClick)}}
        >
          {(isPublic && <Visibility />) || <VisibilityOff />}
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(PublicButton);
