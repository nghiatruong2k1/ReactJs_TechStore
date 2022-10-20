import { memo } from 'react';
import { Tooltip, IconButton } from '@mui/material/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchOption() {
  return (
    <>
      <Tooltip
        title="Tìm kiếm"
        placement="top"
        arrow
      >
        <span>
          <IconButton type="submit" color='inherit'>
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );
}
export default memo(SearchOption);
