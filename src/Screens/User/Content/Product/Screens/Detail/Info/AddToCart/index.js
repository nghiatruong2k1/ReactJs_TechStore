import {memo,useState,useContext} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import styles from './styles.module.css';
import {DetailContext} from "../../provider";
function AddToCart({...props}){
  const [isLoading, setLoading] = useState(false);
  const {state} = useContext(DetailContext);
  const {cart} = useContext(global.config.UserContext);
  const {toast} = useContext(global.config.context);
  function handleClick() {
    if(state.quantity >= 1){
      setLoading(true);
      state.data && cart.handle.add(
        {...state.data,Quantity:state.quantity},
        ()=>{setLoading(false)}
      )
    }else{
        toast.handle.add({message:"Số lượng không hợp lệ!",type:"warning"})
    }
  }
  return(
    <LoadingButton
          onClick={handleClick}
          disabled={isLoading || state.isLoading || !Boolean(state.data)}
          loading={isLoading}
          loadingPosition="start"
          className={styles.button}
          startIcon={<span className={clsx("fa fa-shopping-cart",styles.icon)}/>}
          variant="outlined"
        >
          Thêm vào giỏ hàng
    </LoadingButton>
  )
}
export default memo(AddToCart);