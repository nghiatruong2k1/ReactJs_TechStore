import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function ItemBrand({...props}){
  const {data} = useContext(ItemContext);
  if(data){
    return(
      <Typography>{data.BrandName}</Typography>
    )
  }else{
    return(
      <Skeleton width="100%"/>
    )
  }
}
export default memo(ItemBrand);