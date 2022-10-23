import { memo, useEffect, useReducer, useState } from 'react';
import { Paper, Grid, Stack, Typography } from '@mui/material/';

import styles from './DealsOffersProduct.module.css';
import { initState, reducerState } from './init';
import Provider from './provider';
import TimerContent from './Timer';
import ViewContent from './Content';
import { useInitLoading } from '~/hooks/Loading';
import { ProductServices } from '~/services';
function DealsOffersProduct() {
  const productServices = ProductServices('home Deals Offers Product');
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(initState.limit).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = productServices.getsDealsOffers(
      {
        limit: state.limit ?? 1,
        offset: 0,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
    return () => {
      ourRequest();
      setData(Array(state.limit).fill(null));
    };
  }, [state.limit]);
  return (
    <Provider value={{ state, dispath, loading, data }}>
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
