import {memo,useContext,useEffect,useState} from 'react';
import clsx from 'clsx';
import {TextField} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {DetailContext} from "../../provider";
function Quantity({...props}){
  const {state,handle} = useContext(DetailContext);
  const [value,setValue] = useState(1)
  function handleChange(event){
    setValue(event.target.value);  
}
function handleBlur(){
  const newValue = Number(value);
  if(!Number.isNaN(newValue)){
      if(newValue > 0){
          handle.set("quantity",newValue);
          return false;
      }
  }
  setValue(state.quantity);
}
useEffect(() => {
    setValue(state.quantity)
}, [state.quantity]);
  return(
    <TextField 
      disabled={state.isLoading || !Boolean(state.data)}
      type="number"
      size="small" 
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      style={{width:'6em'}} 
    />
  )
}
export default memo(Quantity);