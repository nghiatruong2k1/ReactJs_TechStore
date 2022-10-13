import { memo, useReducer } from 'react';
import { Paper, Grid, Stack, Typography } from '@mui/material/';

import styles from './DealsOffersProduct.module.css';
import { initState, reducerState } from './init';
import Provider from './provider';
import TimerContent from './Timer';
import ViewContent from './Content';
function DealsOffersProduct({ ...props }) {
  const [state, dispath] = useReducer(reducerState, initState);
  return (
    <Provider value={{ state, dispath }}>
      <Grid container component={Paper} sx={styles.container}>
        <Grid item xs={12} lg={3}>
          <Stack p={3}>
            <Typography component="h4">Sản phẩm khuyến mãi</Typography>
            <TimerContent />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={9}>
          <ViewContent />
        </Grid>
      </Grid>
    </Provider>
  );
}
export default memo(DealsOffersProduct);
