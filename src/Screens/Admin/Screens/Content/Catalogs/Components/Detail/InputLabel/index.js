import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
function InputLabel({left,right,name,label,placeholder,value,TextFieldProps,validate,...props}){
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <Typography>{value ??  ""}</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(InputLabel);