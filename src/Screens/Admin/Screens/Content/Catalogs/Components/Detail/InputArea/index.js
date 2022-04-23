import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../init";
function InputArea({left,right,name,label,placeholder,defaultValue,TextFieldProps,...props}){
  const {state,handle} = useContext(DetailContext);
  function handleChange(event){
      handle.change(name,event.target.value);
  }
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <TextField
          label=""
          value={state.data[name] ??  ""}
          onChange={handleChange}
          placeholder={placeholder ?? label ?? ""}
          size="small"
          FormHelperTextProps={{
            error:true,
            component:'small'
          }}
          helperText={state.valids[name] || " "}
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