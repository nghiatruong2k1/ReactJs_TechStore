import {memo,useContext} from 'react';
import {Grid,Switch,Typography,FormHelperText} from '@mui/material/';
function InputSwitch({left,right,name,label,checked,onChange,valid,onValid,...props}){
  return(
    <Grid container alignItems="center">
      <Grid item {...left}>
        <Switch value={true} checked={checked || false} onChange={(e)=>(onChange && onChange(e,e.target.checked))} />
      </Grid>
      <Grid item {...right}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={12}>
       <FormHelperText component="small" error>{valid ?? ""}</FormHelperText> 
      </Grid>
    </Grid>
  )
}
export default memo(InputSwitch);