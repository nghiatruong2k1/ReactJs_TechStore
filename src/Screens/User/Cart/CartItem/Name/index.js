import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import {ItemContext} from "../provider";

import { getRoute } from "../../../../../Config/Route/";
function ItemName({...props}){
  const {state} = useContext(ItemContext);
  return(
      <Typography component={!state.isLoading && NavLink || "span"} 
        to={`${getRoute("user","product","detail",{alias:state.data && state.data.Alias})}`} 
      >
        {!state.isLoading 
          && (state.data.Name || "Đang cập nhật") 
          || <Skeleton variant="text" className="skeleton"/>}
      </Typography>
    )
}
export default memo(ItemName);