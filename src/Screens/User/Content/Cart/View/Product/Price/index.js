import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {ItemContext} from "../provider";
function Price({...props}){
  const {state} = useContext(ItemContext);
  if(state.isLoading){
    return (<Skeleton width="100%" height="1.4em" />)
  }else{
    let price = "Liên hệ";
    if(typeof(state.data.Price) === 'number' && state.data.Price > 0){
      price = global.config.formatNumber(state.data.Price,3,0)+" đ";
    }

    if(typeof(state.data.SalePrice) === 'number' && state.data.SalePrice > 0){
      return(
          <Typography className={clsx("small",styles.root)}>{price}</Typography>
      )
    }else{
      return(
          <Typography>{price}</Typography>
      )
    }
  }
}
export default memo(Price);