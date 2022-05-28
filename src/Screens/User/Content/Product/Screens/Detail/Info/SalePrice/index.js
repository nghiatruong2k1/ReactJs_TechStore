import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {formatNumber} from "../../../../../../../../Config/Format/";
function DataSalePrice({loading,price,salePrice,...props}){
  if(!loading){
    let className = "";
    let priceTxt = "";
    if(price){
      if(salePrice){
        className=styles.sale;
        priceTxt = formatNumber(salePrice,3,0)+" đ";
        return(
          <span className={clsx(styles.price,className)}>{priceTxt}</span>
        )
      }
    }
    return <></>
  }else {
    return(
      <Skeleton variant="text" width="100px"/>
    )
  }
}
export default memo(DataSalePrice);