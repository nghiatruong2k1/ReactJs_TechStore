import {memo,useContext,useState,useEffect} from 'react';
import {Grid,TextField} from '@mui/material/';
import {ItemContext} from "../provider";
function Quantity({...props}){
  const {data,index} = useContext(ItemContext);
  const [value,setValue] = useState(0);
  const {cart} = useContext(global.config.UserContext);
  function handleChange(event){
      setValue(event.target.value)   
  }
  function handleBlur(){
    const newValue = Number(value);
    if(!Number.isNaN(newValue)){
        if(newValue > 0){
            cart.handle.setQuantity(index,newValue)
            return false;
        }
    }
    setValue(data.Quantity);
  }
  useEffect(() => {
      setValue(data.Quantity)
  },[data.Quantity]);
  return(
  <Grid item {...props}>
    <TextField 
        size="small" 
        type="number" 
        disabled={!data} 
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
    /> 
  </Grid>
  )
}
export default memo(Quantity);