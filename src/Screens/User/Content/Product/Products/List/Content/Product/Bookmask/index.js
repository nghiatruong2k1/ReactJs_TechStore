import {memo} from 'react';
import clsx from 'clsx';
import {  Badge} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function Bookmask({price,salePrice,...props}){
  let sale = 0;
    if(salePrice && salePrice > 0 && price && price > 0){
        sale = Math.ceil(100 - salePrice * 100 / price);
    }
  if(sale > 0){
    return(
      <Badge 
          className={styles.badge}
          componentsProps={{
            badge:{
              className:styles.sale
          }}} 
          badgeContent={`Giảm giá ${sale}%`}
      ></Badge>
    )
  }else{
    return <></>
  }
}
export default memo(Bookmask);