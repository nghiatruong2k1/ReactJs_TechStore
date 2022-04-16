import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Typography,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import {DetailContext} from "../../provider";
function ShortDes({...props}){
  const {state} = useContext(DetailContext);
  if(!state.isLoading && state.data){
    return(
      <div>
        <Typography component="p">{state.data.ShortDes}</Typography>
      </div>
    )
  }else {
    return(
      <Skeleton variant="text" width="100%" height = '10em'  />
    )
  } 
}
export default memo(ShortDes);