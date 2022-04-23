import {memo,useContext} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../init";
function InputText({left,right,name,label,placeholder,defaultValue,TextFieldProps,validate,...props}){
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
            component:'small',
            sx:{display:state.valids[name] && 'block' || 'none'}

          }}
          helperText={state.valids[name] || " "}
          fullWidth
          {...TextFieldProps}
        />
      </Grid>
    </Grid>
  )
}
export default memo(InputText);