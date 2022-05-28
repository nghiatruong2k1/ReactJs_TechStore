import {memo,useState,useContext} from 'react';
import clsx from 'clsx';
import {LoadingButton} from '@mui/lab/';
import styles from './styles.module.css';
import { useSnackbar } from "notistack";
import {DetailContext} from "../../provider";
function AddToCart({...props}){
  const [isLoading, setLoading] = useState(false);
  const {state} = useContext(DetailContext);
  const {cart} = useContext(global.config.UserContext);
  const { enqueueSnackbar } = useSnackbar();
  function handleClick() {
    const quantity = Number(state.quantity);
    if(!Number.isNaN(quantity) && quantity > 0){
      setLoading(true);
      state.data.Id && cart.handle.add(
        {...state.data,Quantity:quantity},
        ()=>{setLoading(false)}
      )
    }else{
      enqueueSnackbar({message:"Số lượng không hợp lệ!",type:"warning"})
    }
  }
  return(
    <LoadingButton
          onClick={handleClick}
          disabled={isLoading || state.isLoading || !Boolean(state.data.Id)}
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