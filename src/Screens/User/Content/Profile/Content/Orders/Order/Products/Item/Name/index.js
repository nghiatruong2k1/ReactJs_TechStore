import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import {ItemContext} from "../provider";
function ItemName({...props}){
  const {data} = useContext(ItemContext);
  if(data){
    return(
      <Typography component={NavLink} 
        to={`/product/detail/${data.Id}`} 
      >
        {data.Name ?? "Đang cập nhật"}
      </Typography>
    )
  }else{
    return(
      <Skeleton component="h6" width="100%"/>
    )
  }
}
export default memo(ItemName);