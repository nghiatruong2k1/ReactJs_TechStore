import {memo} from 'react';
import clsx from 'clsx';
import {Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {formatNumber} from "../../../../../../../../../../../Config/Format/";
function DataPrice({loading,price,salePrice,...props}){
  let _className = "";
  let _priceText = "";
  if(!loading){
    if(price){
      if(salePrice){
        _className=styles.root
      }else{
        _className=styles.current
      }
      _priceText = formatNumber(price,3,0)+" đ";
    }else{
      _priceText = "Liên hệ"
      _className=styles.current
    }
  }
  return(
    <span className={clsx(styles.price,_className)}>
    {
      loading && <Skeleton variant="text" className="skeleton" /> || _priceText
    }
    </span>
  )
}
export default memo(DataPrice);