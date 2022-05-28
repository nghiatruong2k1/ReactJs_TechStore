import {memo,useContext,useEffect,useMemo,useState} from 'react';
import clsx from 'clsx';
import {TextField} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../../provider";
function Quantity({...props}){
  const {state,dispath} = useContext(DetailContext);
  const handleBlur = useMemo(function(){
    return function(){
      // const newValue = Number(state.quantity);
      // if(!Number.isNaN(newValue)){
      //     if(newValue > 0){
      //       dispath(["set_quantity",newValue]);
      //       return false;
      //     }
      // }
      // dispath(["set_quantity",1]);
    }
  },[state.quantity])
  return(
    <TextField 
      disabled={state.isLoading || !Boolean(state.data.Id)}
      type="number"
      size="small" 
      onChange={(e)=>{dispath(["set_quantity",e.target.value])}}
      onBlur={handleBlur}
      value={state.quantity}
      style={{width:'6em'}} 
    />
  )
}
export default memo(Quantity);