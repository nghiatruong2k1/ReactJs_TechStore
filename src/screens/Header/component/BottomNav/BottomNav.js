import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { Grid, Paper } from '@mui/material';
import styles from '../../Header.module.css';
function BottomNavComponent({ children }) {
  return (
    <Paper className={clsx(styles.bottom, 'popup')} variant='outlined'>
      <Grid container py={0.5} alignItems="center" spacing={0.5}>
        {children}
      </Grid>
    </Paper>
  );
}
export default memo(BottomNavComponent);
