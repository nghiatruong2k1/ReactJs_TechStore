import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { Typography } from '@mui/material';
function TitleComponent({ title, titleOnTrash, inTrash }) {
  return (
    <Typography>
      <>{title}</>
      <>{inTrash && `( ${titleOnTrash} )`}</>
    </Typography>
  );
}
export default memo(TitleComponent);
