import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function ItemQuantity({...props}){
  const {state,data} = useContext(ItemContext);
  if(!state.isLoading){
    return(
      <Typography>Số lượng:{data.Quantity}</Typography>
    )
  }else{
    return(
      <Skeleton width="100%"/>
    )
  }
}
export default memo(ItemQuantity);