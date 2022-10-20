import { Skeleton } from '@mui/material';
import { memo, Fragment } from 'react';
function CellOption({ loading, data ,display: { format },text}) {
  return (
    <Fragment>
      {loading ? (
        <Skeleton />
      ) : (
        (data && ((typeof format === 'function' && format(data)) || <></>)) ||
        text ||
        ''
      )}
    </Fragment>
  );
}
export default memo(CellOption);
