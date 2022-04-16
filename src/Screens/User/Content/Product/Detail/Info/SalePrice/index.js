import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {DetailContext} from "../../provider";
function DataSalePrice({...props}){
  const {state} = useContext(DetailContext);
  if(!state.isLoading && state.data){
    let className = "";
    let salePrice = "";
    if(state.data.Price){
      if(state.data.SalePrice){
        className=styles.sale;
        salePrice = global.config.formatNumber(state.data.SalePrice,3,0)+" đ";

        return(
          <span className={clsx(styles.price,className)}>{salePrice}</span>
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