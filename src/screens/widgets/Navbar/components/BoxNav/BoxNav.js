import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { Divider,  Grid,  Stack } from '@mui/material';
function BoxNavComponent({ children,toggleComponent,...props }) {
  return (
    <Grid {...props}>
      <Divider sx={{my:0.5}}/>
      <Stack direction={'row'} justifyContent='space-between'>{children}</Stack>
    </Grid>
  );
}
export default memo(BoxNavComponent);
