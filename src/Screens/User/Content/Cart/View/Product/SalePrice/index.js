import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import { formatNumber } from '../../../../../../../Config/Format';
import {ItemContext} from "../provider";
function SalePrice({...props}){
  const {state} = useContext(ItemContext);
  if(state.isLoading){
    return (<Skeleton width="100%" height="1.4em" />)
  }else{
    if(typeof(state.data.SalePrice) === 'number' && state.data.SalePrice > 0){
      return(
          <Typography className="">{formatNumber(state.data.SalePrice,3,0) +" đ"}</Typography>
      )
    }else{
      return <></>
    }
  }
}
export default memo(SalePrice);