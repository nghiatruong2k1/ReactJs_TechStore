import {memo,useState,useContext} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import styles from './styles.module.css';
import {DetailContext} from "../../provider";
function AddToCart({...props}){
  const [isLoading, setLoading] = useState(false);
  const {state} = useContext(DetailContext);
  const {cart} = useContext(global.config.UserContext);
  function handleClick() {
    setLoading(true)
    state.data 
    && cart.handle.add(
      {...state.data,Quantity:state.quantity},
      ()=>{setLoading(false)}
    )
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