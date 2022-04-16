import {memo,useContext} from 'react';
import clsx from 'clsx';
import {TextField} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../../provider";
function Quantity({...props}){
  const {state} = useContext(DetailContext);
  return(
    <TextField 
      disabled={state.isLoading || !Boolean(state.data)}
      type="number"
      size="small" 
      defaultValue={state.quantity ?? 1}
      inputProps={{min:1,max:10}} 
      style={{width:'6em'}} 
    />
  )
}
export default memo(Quantity);