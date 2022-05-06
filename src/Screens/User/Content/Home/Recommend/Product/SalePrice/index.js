import {memo} from 'react';
import clsx from 'clsx';
import {Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {formatNumber} from "../../../../../../../Config/Format/";
function DataPrice({loading,price,salePrice,...props}){
  let _className = "";
  let _priceText = "";
  if(!loading){
    if(price){
      if(salePrice){
        _className=styles.sale;
        _priceText = formatNumber(salePrice,3,0)+" đ";
      }else{
        _className=styles.hidden;
      }
    }else{
      _priceText = ""
      _className=styles.hidden;
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