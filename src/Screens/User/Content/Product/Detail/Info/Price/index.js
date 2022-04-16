import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Skeleton} from '@mui/material/';
import styles from './styles.module.css';

import {DetailContext} from "../../provider";
function DataPrice({...props}){
  const {state} = useContext(DetailContext);
  if(!state.isLoading && state.data){
    let className = "";
    let price = "";
    if(state.data.Price){
      if(state.data.SalePrice){
        className=styles.root
      }else{
        className=styles.current
      }
      price = global.config.formatNumber(state.data.Price,3,0)+" đ";
    }else{
      price = "Liên hệ"
      className=styles.current
    }
    return(
      <span className={clsx(styles.price,className)}>{price}</span>
    )
  }else {
    return(
      <Skeleton variant="text" width="100px"/>
    )
  }
}
export default memo(DataPrice);