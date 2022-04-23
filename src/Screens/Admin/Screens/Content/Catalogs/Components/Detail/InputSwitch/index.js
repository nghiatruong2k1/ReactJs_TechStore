import {memo,useContext} from 'react';
import {Grid,Switch,Typography,FormHelperText} from '@mui/material/';
import {DetailContext} from "../init";
function InputSwitch({left,right,name,label,defaultValue,...props}){
  const {state,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.change(name,event.target.checked)
  }
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
        <Switch value={true} checked={state.data[name] ?? false} onChange={handleChange} />
      </Grid>
      <Grid item {...right}>
        <Typography>{label}</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(InputSwitch);