import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function ItemPrice({...props}){
  const {state} = useContext(ItemContext);
  if(!state.isLoading){
    let price = "Liên hệ";
    if(state.data.SalePrice && state.data.SalePrice >0){
      price = global.config.formatNumber(state.data.SalePrice,3,0) +"đ";
    }else if(state.data.Price && state.data.Price >0){
      price = global.config.formatNumber(state.data.Price,3,0) +"đ";
    }
    return(
      <Typography>Giá tiền:{price}</Typography>
    )
  }else{
    return(
      <Skeleton width="100%"/>
    )
  }
}
export default memo(ItemPrice);