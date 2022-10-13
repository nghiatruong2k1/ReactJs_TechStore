import { memo, useCallback, useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import CartLayout from './layout';
import { useGetTitle } from '~/hooks/Title';
import { useGetCart } from '~/hooks/Cart';
import CartHeader from './Header';
import CartFooter from './Footer';
import CartEmpty from './Empty';
import CartContent from './Content';
import { ViewContent } from '~/components';
function CartComponent({ isToggle, toggleComponent, ...props }) {
  const { state, dispath, initCase } = useGetCart();
  const handleTitle = useGetTitle();
  useEffect(() => {
    if (state.isOpen) {
      return handleTitle('Giỏ hàng');
    }
  }, [state.isOpen]);
  const total = useMemo(() => {
    if(Array.isArray(state.data)){
      return state.data.reduce((rs, i) => {
        if(i){
          return rs + i.Quantity;
        }else{
          return rs
        }
      }, 0);
    }else{
      return 0
    }
  }, [state.data]);
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
        total={total}
        toggleComponent={toggleComponent}
        header={CartHeader}
        footer={CartFooter}
        {...props}
      >
        <ViewContent loading={state.isLoading} length={state.data?.length} empty={<CartEmpty />}>
            <CartContent data={state.data}/>
        </ViewContent>
      </CartLayout>
    </>
  );
}
export default memo(CartComponent);
