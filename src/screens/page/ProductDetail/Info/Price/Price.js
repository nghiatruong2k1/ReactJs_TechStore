import {memo} from 'react';
import clsx from 'clsx';
import formatNumber from 'number-format.js';
import {Skeleton} from '@mui/material/';
import styles from '../Info.module.css';
function InfoPrice({loading,price,salePrice}){
  let _className = "";
  let _priceText
  if(!loading){
    if(price){
      if(salePrice){
        _className=styles.root
      }else{
        _className=styles.current
      }
      _priceText = formatNumber("#,###.# đ",price);
    }else{
      _priceText = "Liên hệ"
      _className=styles.current
    }
  }
  return(
    <span className={clsx(styles.price,_className)}>
      {
        loading && <Skeleton variant="text" width='5em' className="skeleton"  /> || _priceText
      }
    </span>
  )
}
export default memo(InfoPrice);