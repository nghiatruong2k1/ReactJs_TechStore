import { memo } from 'react';
import { InputAdornment, Tooltip, IconButton } from '@mui/material/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchOption() {
  return (
    <InputAdornment position="start" sx={{ color: 'inherit !important' }}>
      <Tooltip
        title="Tìm kiếm"
        placement="top"
        arrow
        sx={{ color: 'inherit !important' }}
      >
        <span>
          <IconButton type="submit" sx={{ color: 'inherit !important' }}>
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
        </span>
      </Tooltip>
    </InputAdornment>
  );
}
export default memo(SearchOption);
