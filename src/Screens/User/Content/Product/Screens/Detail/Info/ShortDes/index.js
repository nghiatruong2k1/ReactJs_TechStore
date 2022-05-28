import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import {DetailContext} from "../../provider";
function ShortDes({loading,shortDes,...props}){
  if(!loading){
    return(
        <Typography>{shortDes}</Typography>
    )
  }else {
    return(
      <Skeleton variant="text" width="100%" height = '10em'  />
    )
  } 
}
export default memo(ShortDes);