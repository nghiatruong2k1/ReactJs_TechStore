import { memo } from 'react';
import { Skeleton, Typography } from '@mui/material/';
function TyText({ loading,before,after, children,...props}) {
  return (
    <Typography {...props}>
      {before}{(loading && <Skeleton />) || children}{after}
    </Typography>
  );
}
export default memo(TyText);
