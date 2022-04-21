import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../init";
function InputArea({left,right,feild,label,placeholder,defaultValue,TextFieldProps,...props}){
  const {state,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.change(feild,event.target.value);
  }
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <TextField
          label=""
          value={state.data[feild] ??  ""}
          onChange={handleChange}
          placeholder={placeholder ?? label ?? ""}
          size="small"
          multiline
          rows={5}
          fullWidth
          {...TextFieldProps}
        />
      </Grid>
    </Grid>
  )
}
export default memo(InputArea);