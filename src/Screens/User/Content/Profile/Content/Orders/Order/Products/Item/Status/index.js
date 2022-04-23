import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Chip,CircularProgress} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function getColorStatus(id){
  if(id == 1){
    return "#9ea7ad"
  }else if(id == 2){
    return "#2dccff"
  }else if(id == 3){
    return "#56f000"
  }else if(id == 4){
    return "#ff3838"
  }
}
function Status({...props}){
  const {data,loading} = useContext(ItemContext);
  return(
    <Chip icon={loading && <CircularProgress style={{width:"1em",height:"1em"}}/> || <></>} label={data && data.StatusName || "Đang chờ"} />
  )
}
export default memo(Status);