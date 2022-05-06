import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import {ItemContext} from "../provider";
import { getRoute } from '../../../../../../../../../../Config/Route/';
function ItemName({...props}){
  const {data,loading} = useContext(ItemContext);
  if(!loading){
    return(
      <Typography component={NavLink} 
        to={`${getRoute("user","product","detail",{alias:data && data.Alias})}`} 
      >
        {data && data.Name || "Đang cập nhật"}
      </Typography>
    )
  }else{
    return(
      <Skeleton component="h6" width="100%"/>
    )
  }
}
export default memo(ItemName);