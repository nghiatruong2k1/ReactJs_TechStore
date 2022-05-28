import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import {formatNumber} from "../../../../../../../../Config/Format/";

function DataPrice({loading,price,salePrice,...props}){
  if(!loading){
    let className = "";
    let priceTxt = "";
    if(price){
      if(salePrice){
        className=styles.root
      }else{
        className=styles.current
      }
      priceTxt = formatNumber(price,3,0)+" đ";
    }else{
      priceTxt = "Liên hệ"
      className=styles.current
    }
    return(
      <span className={clsx(styles.price,className)}>{priceTxt}</span>
    )
  }else {
    return(
      <Skeleton variant="text" width="100px"/>
    )
  }
}
export default memo(DataPrice);