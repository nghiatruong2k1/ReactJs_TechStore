import { memo, useCallback, useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import { useHandleTitle } from '~/hooks/Title';
import { useGetCart } from '~/hooks/Cart';
import { ViewContent } from '~/components';
import { routers } from '~/config/Router';
import CartLayout from './layout';
import CartHeader from './Header';
import CartFooter from './Footer';
import CartEmpty from './Empty';
import CartContent from './Content';
function CartComponent({ isToggle, toggleComponent }) {
  const { state, dispath, initCase } = useGetCart();
  const handleTitle = useHandleTitle();
  useEffect(() => {
    if (state.isOpen) {
      return handleTitle(routers.profile.cart.title);
    }
  }, [state.isOpen]);
  const open=useCallback(()=>{
    dispath([initCase.TOGGLE_OPEN,true])
  },[])
  const close=useCallback(()=>{
    dispath([initCase.TOGGLE_OPEN,false])
  },[])
  return (
    <>
      <CartLayout
        open={state.isOpen}
        onOpen={open}
        onClose={close}
        total={state.total}
        toggleComponent={toggleComponent}
        header={CartHeader}
        footer={CartFooter}
      >
        <ViewContent loading={state.isLoading} length={state.data?.length} empty={<CartEmpty />}>
            <CartContent data={state.data}/>
        </ViewContent>
      </CartLayout>
    </>
  );
}
export default memo(CartComponent);
