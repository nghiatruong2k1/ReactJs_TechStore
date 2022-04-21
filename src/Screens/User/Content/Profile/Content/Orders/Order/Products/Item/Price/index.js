import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function ItemPrice({...props}){
  const {data,loading} = useContext(ItemContext);
  if(!loading){
    let price = "Liên hệ";
    if(data.Price >0){
      price = global.config.formatNumber(data && data.Price,3,0) +"đ";
    }
    return(
      <Typography>{price}</Typography>
    )
  }else{
    return(
      <Skeleton width="100%"/>
    )
  }
}
export default memo(ItemPrice);