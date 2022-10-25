import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { Typography } from '@mui/material';
function TitleComponent({ title }) {
  return <Typography sx={{flex:1,px:1}}>{title}</Typography>;
}
export default memo(TitleComponent);
