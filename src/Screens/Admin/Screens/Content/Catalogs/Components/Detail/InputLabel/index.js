import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../init";
function InputLabel({left,right,name,label,placeholder,defaultValue,TextFieldProps,validate,...props}){
  const {state,handle} = useContext(DetailContext);
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <Typography>{state.data[name] ??  ""}</Typography>
      </Grid>
    </Grid>
  )
}
export default memo(InputLabel);