import { memo, useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material/';
import { useGetCart } from '~/hooks/Cart';
function RemoveButton({ index, loading }) {
  const { dispath, initCase } = useGetCart();
  return (
    <Tooltip placement="top" title="Xóa khỏi giỏ hàng" arrow>
      <span>
        <IconButton
          disabled={loading}
          color="error"
          onClick={() => {
            dispath([initCase.REMOVE, index]);
          }}
        >
          <span className="fas fa-times" />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(RemoveButton);
