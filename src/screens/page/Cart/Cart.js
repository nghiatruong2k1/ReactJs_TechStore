import { memo, useCallback, useEffect } from 'react';
import { Grid, Stack } from '@mui/material';

import { useGetTitle } from '~/hooks/Title';
import { useGetCart } from '~/hooks/Cart';

import Provider from './provider';
import CartContent from './Content';
import CartTotal from './Total';
import CartVoucher from './Voucher';
import CartPayment from './Payment';
import { useReducer } from 'react';
import { initCase, initState, reducerState } from './init';
function CartComponent() {
  const {
    state: { total, data, isLoading, totalPrice },
    handle:{reset}
  } = useGetCart();
  const [state, dispath] = useReducer(reducerState, initState);
  const handleTitle = useGetTitle();
  useEffect(() => {
    return handleTitle('Giỏ hàng');
  }, []);
  const handleChange = useCallback((data) => {
    dispath([initCase.CHANGE_VOUCHER, data]);
  }, []);
  const handleSuccess = useCallback(() => {
    dispath([initCase.CHANGE_VOUCHER]);
    reset && reset();
  }, []);
  return (
    <Provider value={{ state, dispath }}>
      <Grid container spacing={2}>
        <Stack item xs={8} component={Grid} spacing={2}>
          <CartContent data={data} loading={isLoading} />
        </Stack>
        <Stack item xs={4} component={Grid} spacing={2}>
          <CartVoucher voucher={state.voucher} onChange={handleChange} />
          <CartTotal
            total={total}
            totalPrice={totalPrice}
            saleValue={state.voucher?.Value}
          />
          <CartPayment
            onSuccess={handleSuccess}
            voucher={state.voucher}
            data={data}
            total={total}
            totalPrice={totalPrice}
            loading={isLoading}
          />
        </Stack>
      </Grid>
    </Provider>
  );
}
export default memo(CartComponent);
