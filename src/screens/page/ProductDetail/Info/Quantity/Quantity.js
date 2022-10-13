import {memo, useCallback} from 'react';
import {TextField} from '@mui/material/';
import { useGetInfoContext } from '../provider';
import { initCase } from '../init';
import styles from '../Info.module.css';
function InfoQuantity({loading}){
  const {state,dispath} = useGetInfoContext();
  const handleChange=useCallback((e)=>{
    dispath([initCase.SET_QUANTITY,e.target.value])
  },[])
  return(
    <TextField 
      disabled={loading}
      type="number"
      size="small"
      value={state.Quantity}
      onChange={handleChange}
    />
  )
}
export default memo(InfoQuantity);