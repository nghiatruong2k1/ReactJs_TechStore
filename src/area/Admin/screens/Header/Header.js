import { memo } from 'react';
import clsx from 'clsx';
import { Box, Container, Grid, Paper } from '@mui/material/';
import styles from './Header.module.css';

function AdminHeaderComponent() {
  return (
    <Box component="header" className={clsx( styles.root)}>
      <Container
        component={Paper}
        maxWidth="100%"
        className={clsx( styles.header)}
      >
        <Grid container alignItems="center" columnSpacing={1}>
          <Grid item xs></Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}
export default memo(AdminHeaderComponent);
