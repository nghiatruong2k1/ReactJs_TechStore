import { Skeleton } from '@mui/material';
import { memo, Fragment } from 'react';
function CellOption({loading, children}) {
  return <Fragment>{loading ? <Skeleton /> : children}</Fragment>;
}
export default memo(CellOption);
