import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function Name({...props}){
  const {state} = useContext(ItemContext);
  if(state.isLoading){
    return (<Skeleton width="100%" height="1.8em" />)
  }else {
    return(
      <Typography>{state.data.Name ?? "Đang cập nhật"}</Typography>
    )
  }
}
export default memo(Name);