import {memo,useState,useContext} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import styles from './styles.module.css';
function AddToCart({loading,data,...props}){
  const [isLoading, setLoading] = useState(false);
  const {cart} = useContext(global.config.UserContext);
  function handleClick() {
   setLoading(true)
    data && cart.handle.add(
      {...data,Quantity:1},
      ()=>{setLoading(false)}
    ) 
  }
  return(
    <LoadingButton
          onClick={handleClick}
          disabled={loading || isLoading}
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