import {memo} from 'react';
import clsx from 'clsx';
import formatNumber from 'number-format.js';
import {Skeleton} from '@mui/material/';
import styles from '../Product.module.css';
function DataPrice({loading,price,salePrice}){
  let _className = "";
  let _priceText
  if(!loading){
    if(price){
      if(salePrice){
        _className=styles.root
      }else{
        _className=styles.current
      }
      _priceText = formatNumber("#,##0.# đ",price);
    }else{
      _priceText = "Liên hệ"
      _className=styles.current
    }
  }
  return(
    <span className={clsx(styles.price,_className)}>
      {
        loading && <Skeleton variant="text" className="skeleton"  /> || _priceText
      }
    </span>
  )
}
export default memo(DataPrice);