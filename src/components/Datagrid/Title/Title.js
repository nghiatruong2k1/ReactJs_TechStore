import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { Typography } from '@mui/material';
function TitleComponent({ title }) {
  return <Typography>{title}</Typography>;
}
export default memo(TitleComponent);
